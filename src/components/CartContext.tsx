import React, { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useNavigate } from "react-router-dom";

export type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: number) => void;
  getCartCount: () => number;
  clearCart: () => void;
  incrementQuantity: (id: number) => void;
  decrementQuantity: (id: number) => void;
  isSignedIn: boolean;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [userId, setUserId] = useState<string | null>(null);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [cartLoaded, setCartLoaded] = useState(false); // NEW
  const navigate = useNavigate();

  // Fetch user and cart from Supabase on mount or auth change
  useEffect(() => {
    const getUserAndCart = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data: { user } } = await supabase.auth.getUser();
        console.log('Supabase user:', user);
        if (user) {
          setUserId(user.id);
          setIsSignedIn(true);
          // Fetch cart from Supabase
          const { data, error } = await supabase
            .from('carts')
            .select('cart_items')
            .eq('user_id', user.id)
            .single();
          console.log('Fetched cart from Supabase:', data, error);
          if (error && error.code !== 'PGRST116') { // PGRST116: No rows found
            setError('Supabase error: ' + error.message);
            setCart([]);
            setCartLoaded(true);
          } else if (data && data.cart_items) {
            setCart(data.cart_items);
            setCartLoaded(true);
          } else {
            setCart([]);
            setCartLoaded(true);
          }
        } else {
          setUserId(null);
          setIsSignedIn(false);
          setCart([]);
          setCartLoaded(true);
        }
      } catch (err: any) {
        setError('Supabase error: ' + (err.message || 'Unknown error'));
        setCart([]);
        setCartLoaded(true);
      }
      setLoading(false);
    };
    getUserAndCart();
    // Listen for auth state changes
    const { data: listener } = supabase.auth.onAuthStateChange(() => {
      getUserAndCart();
    });
    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  // Only sync to Supabase after initial cart load
  useEffect(() => {
    const syncCart = async () => {
      if (!userId || !cartLoaded) return;
      const { error } = await supabase.from('carts').upsert([
        {
          user_id: userId,
          cart_items: cart,
          updated_at: new Date().toISOString(),
        }
      ], { onConflict: 'user_id' });
      console.log('Upserted cart to Supabase:', cart, error);
    };
    if (userId && cartLoaded) syncCart();
  }, [cart, userId, cartLoaded]);

  // Require sign-in for all cart actions
  const requireSignIn = () => {
    if (!isSignedIn) {
      navigate('/login');
      return false;
    }
    return true;
  };

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    if (!requireSignIn()) return;
    setCart((prev) => {
      const found = prev.find((i) => i.id === item.id);
      if (found) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    if (!requireSignIn()) return;
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const getCartCount = () => cart.reduce((sum, i) => sum + i.quantity, 0);

  const clearCart = () => {
    if (!requireSignIn()) return;
    setCart([]);
  };

  const incrementQuantity = (id: number) => {
    if (!requireSignIn()) return;
    setCart((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, quantity: i.quantity + 1 } : i
      )
    );
  };

  const decrementQuantity = (id: number) => {
    if (!requireSignIn()) return;
    setCart((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, quantity: Math.max(1, i.quantity - 1) } : i
      )
    );
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center text-taara-brown text-xl">Loading...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-500 text-xl">{error}</div>;

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getCartCount, clearCart, incrementQuantity, decrementQuantity, isSignedIn }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};