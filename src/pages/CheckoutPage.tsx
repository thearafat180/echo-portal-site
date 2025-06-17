import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "@/components/CartContext";
import Header from "@/components/Header";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", address: "" });
  const { cart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Build order summary from cart
    const orderSummary = cart.map(item =>
      `${item.name} x ${item.quantity} (৳${item.price * item.quantity})`
    ).join('%0A');

    // Build the message
    const message = 
      `Order Details:%0A` +
      `Name: ${encodeURIComponent(form.name)}%0A` +
      `Email: ${encodeURIComponent(form.email)}%0A` +
      `Address: ${encodeURIComponent(form.address)}%0A%0A` +
      `Items:%0A${orderSummary}%0A` +
      `Total: ৳${total}`;

    // Messenger link for facebook.com/taaracraft
    const fbLink = `https://m.me/taaracraft?ref=${message}`;

    // Open Messenger in a new tab
    window.open(fbLink, '_blank');
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-taara-warm-white">
        <div className="container mx-auto px-6 py-32 max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-taara-brown">Checkout</h1>
          <form onSubmit={handleSubmit} className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Shipping Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block mb-1 font-medium">Name</label>
                  <input name="name" value={form.name} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Email</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Address</label>
                  <textarea name="address" value={form.address} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                      <span>{item.name} x {item.quantity}</span>
                    </div>
                    <span className="font-bold text-taara-brown">৳{item.price * item.quantity}</span>
                  </div>
                ))}
                <div className="text-right text-xl font-bold mt-6">Total: <span className="text-taara-brown">৳{total}</span></div>
              </CardContent>
              <CardFooter>
                <Button type="submit" size="lg" className="w-full bg-taara-brown text-white">Place Order</Button>
              </CardFooter>
            </Card>
          </form>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage; 