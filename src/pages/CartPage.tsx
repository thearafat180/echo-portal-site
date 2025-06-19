import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/components/CartContext";
import Header from "@/components/Header";
import { useState } from "react";
import { Trash2 } from 'lucide-react';
import { X } from 'lucide-react';

const CartPage = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, clearCart, incrementQuantity, decrementQuantity } = useCart();
  // Add state for selected items
  const [selectedItems, setSelectedItems] = useState(cart.map(item => item.id));
  // Only selected items for checkout
  const selectedCart = cart.filter(item => selectedItems.includes(item.id));

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
      <div className="min-h-screen bg-taara-warm-white">
        <div className="container mx-auto px-6 py-32">
          <div className="mb-8 flex justify-between items-center">
            <h1 className="text-6xl font-display font-bold text-taara-dark-brown mb-4 animate-fade-in-up">
              Your Cart
            </h1>
            {cart.length > 0 && (
              <Button
                size="lg"
                className="bg-taara-brown text-white ml-auto"
                onClick={() => navigate("/checkout", { state: { cart: selectedCart } })}
                disabled={selectedItems.length === 0}
              >
                Proceed to Checkout
              </Button>
            )}
          </div>
          {cart.length === 0 ? (
            <div className="text-center text-taara-dark-brown text-xl">Your cart is empty.</div>
          ) : (
            <div className="flex flex-col gap-6">
              {cart.map((item) => {
                const selected = selectedItems.includes(item.id);
                return (
                  <div key={item.id} className={`flex flex-col sm:flex-row bg-white rounded-xl shadow p-1 sm:p-4 items-center relative border transition-all gap-2 sm:gap-4 ${selected ? 'border-taara-brown ring-2 ring-taara-brown/30' : 'border-gray-100'}`}>
                    {/* Selection Toggle - centered vertically */}
                    <button
                      type="button"
                      onClick={() => setSelectedItems(sel =>
                        selected ? sel.filter(id => id !== item.id) : [...sel, item.id]
                      )}
                      className={`mb-2 sm:mb-0 sm:mx-2 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${selected ? 'bg-taara-brown border-taara-brown' : 'border-gray-300 bg-white'}`}
                      aria-label={selected ? 'Deselect item' : 'Select item'}
                      style={{ alignSelf: 'flex-start' }}
                    >
                      {selected && <span className="text-white font-bold">✓</span>}
                    </button>
                    {/* Product Image and Name (clickable) */}
                    <Link to={`/product/${item.id}`} className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3 flex-1 min-w-0 group">
                      <img src={item.image} alt={item.name} className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg flex-shrink-0" />
                      <div className="font-bold text-base sm:text-lg text-taara-dark-brown mb-1 truncate group-hover:underline mt-1 sm:mt-0">{item.name}</div>
                    </Link>
                    {/* Info and Quantity */}
                    <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                      <div className="flex-1 min-w-0">
                        {/* Quantity selector for mobile */}
                        <div className="flex items-center gap-2 mt-1 sm:hidden">
                          <button
                            type="button"
                            className="w-7 h-7 flex items-center justify-center rounded border border-taara-brown text-taara-brown bg-taara-cream hover:bg-taara-golden"
                            onClick={() => handleDecrement(item.id)}
                            aria-label="Decrease quantity"
                          >
                            –
                          </button>
                          <span className="w-7 text-center font-semibold">{item.quantity}</span>
                          <button
                            type="button"
                            className="w-7 h-7 flex items-center justify-center rounded border border-taara-brown text-taara-brown bg-taara-cream hover:bg-taara-golden"
                            onClick={() => handleIncrement(item.id)}
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      {/* Quantity & Price for desktop */}
                      <div className="hidden sm:flex flex-col items-end gap-2 min-w-[100px] ml-2">
                        <div className="flex items-center gap-2 mb-1">
                          <button
                            type="button"
                            className="w-7 h-7 flex items-center justify-center rounded border border-taara-brown text-taara-brown bg-taara-cream hover:bg-taara-golden"
                            onClick={() => handleDecrement(item.id)}
                            aria-label="Decrease quantity"
                          >
                            –
                          </button>
                          <span className="w-7 text-center font-semibold">{item.quantity}</span>
                          <button
                            type="button"
                            className="w-7 h-7 flex items-center justify-center rounded border border-taara-brown text-taara-brown bg-taara-cream hover:bg-taara-golden"
                            onClick={() => handleIncrement(item.id)}
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                        <div className="font-bold text-taara-brown text-base sm:text-lg">৳{item.price * item.quantity}</div>
                      </div>
                    </div>
                    {/* Remove Icon (right for all, below for mobile) */}
                    <button
                      type="button"
                      className="ml-2 text-red-400 hover:text-red-600 transition-colors z-10 self-start sm:self-center"
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