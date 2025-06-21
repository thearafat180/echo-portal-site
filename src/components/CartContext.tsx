import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
// import { useUser } from "@supabase/auth-helpers-react";
import { supabase as sb  } from "../../supabaseClient";


export type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  selectedIds: number[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: number) => void;
  getCartCount: () => number;
  clearCart: () => void;
  setSelectedIds: (ids: number[]) => void;
  incrementQuantity: (id: number) => void;
  decrementQuantity: (id: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [user, setUser] = useState(null);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  useEffect(() => {
    // Fetch user from Supabase
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    fetchUser();
  }, []);

  useEffect(() => {
    const fetchCart = async () => {
      if (!user) return;
      const { data, error } = await supabase
        .from("carts")
        .select("*")
        .eq("user_id", user.id);
      if (data) {
        const mapped: CartItem[] = data.map((item) => ({
          id: Number(item.product_id),
          name: item.product_name,
          price: Number(item.price),
          image: item.image || "",
          quantity: item.quantity,
        }));
        setCart(mapped);
      }
    };
    fetchCart();
  }, [user]);

  const insertItemToDB = async (item: Omit<CartItem, "quantity">) => {
    if (!user) return;
    await supabase.from("carts").insert({
      user_id: user.id,
      product_id: item.id.toString(),
      quantity: 1,
    });
  };

  const updateQuantityInDB = async (productId: number, quantity: number) => {
    if (!user) return;

    await supabase
      .from("carts")
      .update({ quantity })
      .eq("user_id", user.id)
      .eq("product_id", productId.toString());
  };

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    console.log("Adding to cart:", item);
    setCart((prev) => {
      const found = prev.find((i) => i.id === item.id);
      if (found) {
        updateQuantityInDB(item.id, found.quantity + 1);
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      insertItemToDB(item);
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
    if (user) {
      supabase
        .from("carts")
        .delete()
        .eq("user_id", user.id)
        .eq("product_id", id.toString());
    }
  };

  const getCartCount = () => cart.reduce((sum, i) => sum + i.quantity, 0);

  const clearCart = () => {
    setCart([]);
    if (user) {
      supabase.from("carts").delete().eq("user_id", user.id);
    }
  };

  const incrementQuantity = (id: number) => {
    console.log(cart);
    setCart((prev) => {
      return prev.map((i) => {
        if (i.id === id) {
          const newQty = i.quantity + 1;
          updateQuantityInDB(id, newQty);
          return { ...i, quantity: newQty };
        }
        return i;
      }); 
    });
  };

  const decrementQuantity = (id: number) => {
    setCart((prev) =>
      prev.map((i) => {
        if (i.id === id) {
          const newQty = Math.max(1, i.quantity - 1);
          updateQuantityInDB(id, newQty);
          return { ...i, quantity: newQty };
        }
        return i;
      })
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, setSelectedIds, selectedIds, removeFromCart, getCartCount, clearCart, incrementQuantity, decrementQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
