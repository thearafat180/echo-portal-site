import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/components/CartContext";
import Header from "@/components/Header";

const CartPage = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, clearCart, incrementQuantity, decrementQuantity } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

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
          <h1 className="text-4xl font-bold mb-8 text-taara-brown">Your Cart</h1>
          {cart.length === 0 ? (
            <div className="text-center text-taara-dark-brown text-xl">Your cart is empty.</div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {cart.map((item) => (
                <Card key={item.id} className="flex flex-col">
                  <CardHeader className="flex-row items-center gap-4">
                    <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
                    <div>
                      <CardTitle>{item.name}</CardTitle>
                      <div className="text-taara-brown font-bold text-lg">৳{item.price}</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <span>Qty:</span>
                      <button
                        type="button"
                        className="px-2 py-1 bg-taara-cream rounded-l border border-taara-brown text-taara-brown hover:bg-taara-golden"
                        onClick={() => handleDecrement(item.id)}
                        aria-label="Decrease quantity"
                      >
                        –
                      </button>
                      <input type="number" min={1} value={item.quantity} className="w-16 border rounded px-2 py-1 text-center" readOnly />
                      <button
                        type="button"
                        className="px-2 py-1 bg-taara-cream rounded-r border border-taara-brown text-taara-brown hover:bg-taara-golden"
                        onClick={() => handleIncrement(item.id)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                      {/* TODO: Add quantity update logic */}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <Button className="bg-red-600 text-white hover:bg-red-700" onClick={() => removeFromCart(item.id)}>Remove</Button>
                    {/* TODO: Add remove logic */}
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
          {cart.length > 0 && (
            <div className="mt-12 flex flex-col items-end">
              <div className="text-2xl font-bold mb-4">Total: <span className="text-taara-brown">৳{total}</span></div>
              <Button size="lg" className="bg-taara-brown text-white" onClick={() => navigate("/checkout")}>Proceed to Checkout</Button>
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