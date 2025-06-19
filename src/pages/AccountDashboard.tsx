import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { districtData } from "../data/districtData";

const districtList = Object.keys(districtData);

const AccountDashboard = () => {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({
    full_name: "",
    phone: "",
    district: "",
    upazila: "",
    area: ""
  });
  const [editMode, setEditMode] = useState(false);
  const [saving, setSaving] = useState(false);
  const [profileError, setProfileError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUserAndData() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate("/login");
        return;
      }
      setUser(user);
      // Fetch profile
      const { data: profileData } = await supabase
        .from("profiles")
        .select("full_name, phone, district, upazila, area")
        .eq("user_id", user.id)
        .single();
      if (profileData) setProfile(profileData);
      // Fetch orders for this user
      const { data: ordersData } = await supabase
        .from("orders")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });
      setOrders(ordersData || []);
      setLoading(false);
    }
    fetchUserAndData();
  }, [navigate]);

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
    // Reset upazila if district changes
    if (e.target.name === "district") {
      setProfile(p => ({ ...p, district: e.target.value, upazila: "" }));
    }
  };

  const handleProfileSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    setProfileError("");
    // Prevent saving if any address field is empty
    if (!profile.district || !profile.upazila || !profile.area) {
      setProfileError("Please fill in all address fields (district, upazila, and area)." );
      setSaving(false);
      return;
    }
    // Upsert profile with new address fields
    const { error } = await supabase.from("profiles").upsert({
      user_id: user.id,
      full_name: profile.full_name,
      phone: profile.phone,
      district: profile.district,
      upazila: profile.upazila,
      area: profile.area
    });
    if (error) setProfileError(error.message);
    else setEditMode(false);
    setSaving(false);
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-taara-warm-white py-16 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow p-8">
          <h1 className="text-6xl font-display font-bold text-taara-dark-brown mb-8 text-center animate-fade-in-up">My Account</h1>
          <div className="mb-8">
            <div className="text-lg font-semibold mb-1">Email:</div>
            <div className="text-taara-dark-brown mb-2">{user.email}</div>
            {editMode ? (
              <form onSubmit={handleProfileSave} className="space-y-2 mt-2">
                <div>
                  <label className="block font-semibold">Full Name</label>
                  <input name="full_name" value={profile.full_name || ""} onChange={handleProfileChange} className="border rounded px-2 py-1 w-full" />
                </div>
                <div>
                  <label className="block font-semibold">Phone</label>
                  <input name="phone" value={profile.phone || ""} onChange={handleProfileChange} className="border rounded px-2 py-1 w-full" />
                </div>
                <div>
                  <label className="block font-semibold">District (জেলা)</label>
                  <select name="district" value={profile.district || ""} onChange={handleProfileChange} className="border rounded px-2 py-1 w-full">
                    <option value="">Select District</option>
                    {districtList.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block font-semibold">Upazila (উপজেলা)</label>
                  <select name="upazila" value={profile.upazila || ""} onChange={handleProfileChange} className="border rounded px-2 py-1 w-full" disabled={!profile.district}>
                    <option value="">Select Upazila</option>
                    {profile.district && districtData[profile.district]?.map(u => <option key={u} value={u}>{u}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block font-semibold">Area</label>
                  <input name="area" value={profile.area || ""} onChange={handleProfileChange} className="border rounded px-2 py-1 w-full" placeholder="Your area, village, or street" />
                </div>
                {profileError && <div className="text-red-500">{profileError}</div>}
                <button type="submit" className="bg-taara-brown text-white px-4 py-2 rounded" disabled={saving}>{saving ? "Saving..." : "Save"}</button>
                <button type="button" className="ml-2 px-4 py-2 rounded border" onClick={() => setEditMode(false)}>Cancel</button>
              </form>
            ) : (
              <>
                <div className="mt-2"><span className="font-semibold">Full Name:</span> {profile.full_name || <span className="text-gray-400">Not set</span>}</div>
                <div className="mt-2"><span className="font-semibold">Phone:</span> {profile.phone || <span className="text-gray-400">Not set</span>}</div>
                <div className="mt-2"><span className="font-semibold">Address:</span> {(!profile.district && !profile.upazila && !profile.area) ? <span className="text-gray-400">Not set</span> : `${profile.area ? profile.area + ', ' : ''}${profile.upazila ? profile.upazila + ', ' : ''}${profile.district || ''}`}</div>
                <button className="mt-2 bg-taara-brown text-white px-4 py-2 rounded" onClick={() => setEditMode(true)}>Edit Profile</button>
              </>
            )}
          </div>
          <h2 className="text-2xl font-bold text-taara-brown mb-4">My Orders</h2>
          {orders.length === 0 ? (
            <div className="text-gray-500">No orders found.</div>
          ) : (
            <div className="space-y-6">
              {orders.map(order => (
                <div key={order.id} className="border rounded-lg p-4 bg-taara-cream">
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-semibold text-taara-brown">Order #{order.id}</div>
                    <div className="text-sm text-gray-500">{new Date(order.created_at).toLocaleString()}</div>
                  </div>
                  <div className="mb-2">Status: <span className="font-semibold text-taara-brown">{order.order_status}</span></div>
                  <div className="mb-2">Total: <span className="font-bold">৳{order.payable_total}</span></div>
                  <details>
                    <summary className="cursor-pointer text-taara-brown">View Items</summary>
                    <ul className="list-disc ml-6 mt-2">
                      {(() => {
                        const names = order.product_names ? order.product_names.split(',') : [];
                        const prices = order.product_prices ? order.product_prices.split(',') : [];
                        const quantities = order.product_quantities ? order.product_quantities.split(',') : [];
                        return names.map((name, idx) => (
                          <li key={idx}>
                            {name.trim()} x {quantities[idx] ? quantities[idx].trim() : '?'} (৳{prices[idx] ? (parseFloat(prices[idx]) * parseInt(quantities[idx] || '1')).toLocaleString() : '?'})
                          </li>
                        ));
                      })()}
                    </ul>
                  </details>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AccountDashboard;
