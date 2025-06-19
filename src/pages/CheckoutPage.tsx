import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "@/components/CartContext";
import Header from "@/components/Header";
import { supabase } from "../../supabaseClient";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { districtData } from "../data/districtData";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", phone: "", district: "", upazila: "", area: "" });
  const [profile, setProfile] = useState({ full_name: "", email: "", phone: "", district: "", upazila: "", area: "" });
  const { cart } = useCart();
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  useEffect(() => {
    async function checkAuthAndProfile() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        setShowAuthDialog(true);
        setCheckingAuth(false);
        return;
      }
      // Fetch profile
      const { data: profileData } = await supabase
        .from("profiles")
        .select("full_name, phone, district, upazila, area")
        .eq("user_id", user.id)
        .single();
      if (profileData) {
        setProfile(profileData);
        setForm(f => ({
          name: f.name || profileData.full_name || "",
          email: f.email || user.email || "",
          phone: f.phone || profileData.phone || "",
          district: f.district || profileData.district || "",
          upazila: f.upazila || profileData.upazila || "",
          area: f.area || profileData.area || ""
        }));
      } else {
        setForm(f => ({ ...f, email: user.email || "" }));
      }
      setCheckingAuth(false);
    }
    checkAuthAndProfile();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => {
      const updated = { ...prev, [e.target.name]: e.target.value };
      if (e.target.name === "district") {
        updated.upazila = "";
      }
      return updated;
    });
  };

  const isMissing = (field: string) => !form[field];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/payment", { state: { form, cart } });
  };

  if (checkingAuth) return null;

  if (showAuthDialog) {
    return (
      <Dialog open>
        <DialogContent>
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Sign In Required</h2>
            <p className="mb-6">You must be signed in to access the checkout. Please log in or create an account to continue.</p>
            <Button className="w-full mb-2" onClick={() => navigate("/login")}>Sign In</Button>
            <Button className="w-full" variant="outline" onClick={() => navigate("/signup")}>Create Account</Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

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
                  {isMissing("name") && <span className="text-red-500 text-xs">Required</span>}
                </div>
                <div>
                  <label className="block mb-1 font-medium">Email</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
                  {isMissing("email") && <span className="text-red-500 text-xs">Required</span>}
                </div>
                <div>
                  <label className="block mb-1 font-medium">Phone</label>
                  <input name="phone" value={form.phone} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
                  {isMissing("phone") && <span className="text-red-500 text-xs">Required</span>}
                </div>
                <div>
                  <label className="block mb-1 font-medium">District</label>
                  <select name="district" value={form.district} onChange={handleChange} required className="w-full border rounded px-3 py-2">
                    <option value="">Select District</option>
                    {Object.keys(districtData).sort().map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                  {isMissing("district") && <span className="text-red-500 text-xs">Required</span>}
                </div>
                <div>
                  <label className="block mb-1 font-medium">Upazila</label>
                  <select name="upazila" value={form.upazila} onChange={handleChange} required className="w-full border rounded px-3 py-2" disabled={!form.district}>
                    <option value="">Select Upazila</option>
                    {form.district && districtData[form.district]?.map(u => <option key={u} value={u}>{u}</option>)}
                  </select>
                  {isMissing("upazila") && <span className="text-red-500 text-xs">Required</span>}
                </div>
                <div>
                  <label className="block mb-1 font-medium">Area</label>
                  <input name="area" value={form.area} onChange={handleChange} required className="w-full border rounded px-3 py-2" placeholder="Your area, village, or street" />
                  {isMissing("area") && <span className="text-red-500 text-xs">Required</span>}
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