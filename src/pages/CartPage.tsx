import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/components/CartContext";
import Header from "@/components/Header";
import { useState } from "react";
import { Trash2 } from 'lucide-react';

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
                  <div key={item.id} className={`flex bg-white rounded-2xl shadow p-6 items-center relative border transition-all ${selected ? 'border-taara-brown ring-2 ring-taara-brown/30' : 'border-gray-100'}`}>
                    {/* Selection Toggle - centered vertically */}
                    <button
                      type="button"
                      onClick={() => setSelectedItems(sel =>
                        selected ? sel.filter(id => id !== item.id) : [...sel, item.id]
                      )}
                      className={`mx-4 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all ${selected ? 'bg-taara-brown border-taara-brown' : 'border-gray-300 bg-white'}`}
                      aria-label={selected ? 'Deselect item' : 'Select item'}
                      style={{ alignSelf: 'center' }}
                    >
                      {selected && <span className="text-white font-bold">✓</span>}
                    </button>
                    {/* Product Image, Name, Description (clickable) */}
                    <Link to={`/product/${item.id}`} className="flex-1 min-w-0 group flex items-center gap-4 hover:bg-taara-cream/40 rounded-xl transition-colors px-2 py-1">
                      <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
                      <div>
                        <div className="font-bold text-lg text-taara-dark-brown mb-1">{item.name}</div>
                        {item.short_desc && (
                          <div className="text-gray-500 text-sm mb-2 max-w-xs truncate" title={item.short_desc}>
                            {item.short_desc}
                          </div>
                        )}
                      </div>
                    </Link>
                    {/* Quantity & Price */}
                    <div className="flex flex-col items-end gap-2 min-w-[120px] ml-4">
                      <div className="flex items-center gap-2 mb-2">
                        <button
                          type="button"
                          className="w-8 h-8 flex items-center justify-center rounded border border-taara-brown text-taara-brown bg-taara-cream hover:bg-taara-golden"
                          onClick={() => handleDecrement(item.id)}
                          aria-label="Decrease quantity"
                        >
                          –
                        </button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <button
                          type="button"
                          className="w-8 h-8 flex items-center justify-center rounded border border-taara-brown text-taara-brown bg-taara-cream hover:bg-taara-golden"
                          onClick={() => handleIncrement(item.id)}
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <div className="font-bold text-taara-brown text-xl">৳{item.price * item.quantity}</div>
                    </div>
                    {/* Remove Icon (not overlapping) */}
                    <button
                      type="button"
                      className="ml-4 text-red-400 hover:text-red-600 transition-colors z-10"
                      onClick={() => removeFromCart(item.id)}
                      aria-label="Remove item"
                      style={{ alignSelf: 'center' }}
                    >
                      <Trash2 size={22} />
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