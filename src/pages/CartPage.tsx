import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/components/CartContext";
import { useEffect, useMemo, useState } from "react";
import { Leaf, Trash2 } from 'lucide-react';
import { useProduct } from "@/hooks/useProducts";

const CartPage = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, selectedIds, setSelectedIds, clearCart, addToCart, incrementQuantity, decrementQuantity } = useCart();
  // Add state for selected items
  // const ids = cart.map(item => item.id);
  const ids = useMemo(() => cart.map(item => item.id), [cart]);
  const {product, error, loading} =  useProduct(ids);
  // const [selectedItems, setSelectedItems] = useState([]);
  useEffect(() => {
    if(!loading && !error) {
      setSelectedIds(cart.map(item => item.id));
    }
  }, [loading, error, cart]);

  // Only selected items for checkout
  const selectedCart = cart.filter(item => selectedIds.includes(item.id));

  // Use context functions directly
  const handleIncrement = (id: number) => {
    incrementQuantity(id);
  };
  const handleDecrement = (id: number) => {
    decrementQuantity(id);
  };

  return (
    <>
      <Header />
      <div className="bg-taara-warm-white min-h-screen">
        <div className="mx-auto px-6 py-32 container">
          <div className="flex justify-between items-center mb-8">
            <h1 className="mb-4 font-display font-bold text-taara-dark-brown text-6xl animate-fade-in-up">
              Your Cart
            </h1>
            {cart.length > 0 && (
              <Button
                size="lg"
                className="bg-taara-brown ml-auto text-white"
                onClick={() => navigate("/checkout", { state: { cart: selectedCart } })}
                disabled={selectedIds.length === 0}
              >
                Proceed to Checkout
              </Button>
            )}
          </div>          {cart.length === 0 ? (
            <div className="text-taara-dark-brown text-xl text-center">Your cart is empty.</div>
          ) : loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="border-taara-brown border-b-2 rounded-full w-12 h-12 animate-spin"></div>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {cart.map((item) => {
                const selected = selectedIds.includes(item.id);
                const productData = product?.find(p => p.id === item.id);
                return (
                  <div key={item.id} className={`flex flex-col sm:flex-row bg-white rounded-xl shadow p-1 sm:p-4 items-center relative border transition-all gap-2 sm:gap-4 ${selected ? 'border-taara-brown ring-2 ring-taara-brown/30' : 'border-gray-100'}`}>
                    {/* Selection Toggle - centered vertically */}
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedIds(
                          selected
                            ? selectedIds.filter(id => id !== item.id)
                            : [...selectedIds, item.id]
                        )
                      }
                      className={`mb-2 sm:mb-0 sm:mx-2 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${selected ? 'bg-taara-brown border-taara-brown' : 'border-gray-300 bg-white'}`}
                      aria-label={selected ? 'Deselect item' : 'Select item'}
                      style={{ alignSelf: 'flex-start' }}
                    >
                      {selected && <span className="font-bold text-white">✓</span>}
                    </button>                    {/* Product Image and Name (clickable) */}
                    <Link to={`/product/${item.id}`} className="group flex sm:flex-row flex-col flex-1 items-center gap-1 sm:gap-3 min-w-0">
                      <img src={productData?.image_url || item.image} alt={productData?.name || item.name} className="flex-shrink-0 rounded-lg w-16 sm:w-20 h-16 sm:h-20 object-cover" />
                      <div className="mt-1 sm:mt-0 mb-1 font-bold text-taara-dark-brown text-base sm:text-lg group-hover:underline truncate">{productData?.name || item.name}</div>
                    </Link>
                    {/* Info and Quantity */}
                    <div className="flex sm:flex-row flex-col flex-1 sm:items-center gap-1 sm:gap-4 min-w-0">
                      <div className="flex-1 min-w-0">
                        {/* Quantity selector for mobile */}
                        <div className="sm:hidden flex items-center gap-2 mt-1">
                          <button
                            type="button"
                            className="flex justify-center items-center bg-taara-cream hover:bg-taara-golden border border-taara-brown rounded w-7 h-7 text-taara-brown"
                            onClick={() => handleDecrement(item.id)}
                            aria-label="Decrease quantity"
                          >
                            –
                          </button>
                          <span className="w-7 font-semibold text-center">{item.quantity}</span>
                          <button
                            type="button"
                            className="flex justify-center items-center bg-taara-cream hover:bg-taara-golden border border-taara-brown rounded w-7 h-7 text-taara-brown"
                            onClick={() => handleIncrement(item.id)}
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      {/* Quantity & Price for desktop */}
                      <div className="hidden sm:flex flex-col items-end gap-2 ml-2 min-w-[100px]">
                        <div className="flex items-center gap-2 mb-1">
                          <button
                            type="button"
                            className="flex justify-center items-center bg-taara-cream hover:bg-taara-golden border border-taara-brown rounded w-7 h-7 text-taara-brown"
                            onClick={() => handleDecrement(item.id)}
                            aria-label="Decrease quantity"
                          >
                            –
                          </button>
                          <span className="w-7 font-semibold text-center">{item.quantity}</span>
                          <button
                            type="button"
                            className="flex justify-center items-center bg-taara-cream hover:bg-taara-golden border border-taara-brown rounded w-7 h-7 text-taara-brown"
                            onClick={() => handleIncrement(item.id)}
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                        <div className="font-bold text-taara-brown text-base sm:text-lg">৳{(productData?.price || item.price) * item.quantity}</div>
                      </div>
                    </div>
                    {/* Remove Icon (right for all, below for mobile) */}
                    <button
                      type="button"
                      className="z-10 self-start sm:self-center ml-2 text-red-400 hover:text-red-600 transition-colors"
                      onClick={() => removeFromCart(item.id)}
                      aria-label="Remove item"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                );
              })}
            </div>
          )}
          <div className="mt-8">
            <Link to="/products" className="text-taara-brown hover:underline">Continue Shopping</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;