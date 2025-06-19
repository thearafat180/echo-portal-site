import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer"; // Import the Footer component
import { supabase } from "../../supabaseClient";

const LoginPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const { error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });
    if (error) {
      setError(error.message);
    } else {
      navigate("/account"); // Redirect to dashboard after login
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-taara-warm-white flex items-center justify-center pt-24">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-6">
          <h2 className="text-2xl font-bold mb-4">Account Login</h2>
          {error && <div className="text-red-500 text-center">{error}</div>}
          <div>
            <label className="block mb-1 font-semibold">Phone / E-Mail</label>
            <input name="email" type="text" value={form.email} onChange={handleChange} required className="w-full border rounded px-3 py-2" placeholder="Phone / E-Mail" />
          </div>
          <div className="flex items-center justify-between">
            <label className="block mb-1 font-semibold">Password</label>
            <Link to="/forgot-password" className="text-[#ff3c00] text-sm font-medium">Forgotten Password?</Link>
          </div>
          <input name="password" type="password" value={form.password} onChange={handleChange} required className="w-full border rounded px-3 py-2" placeholder="Password" />
          <button type="submit" className="w-full bg-taara-brown hover:bg-taara-dark-brown text-white py-2 rounded font-bold text-lg mt-2">Login</button>
          <div className="flex items-center my-4">
            <div className="flex-1 border-t"></div>
            <div className="mx-4 text-gray-500">Don't have an account?</div>
            <div className="flex-1 border-t"></div>
          </div>
          <Link to="/signup" className="block w-full border border-taara-brown text-taara-brown py-2 rounded text-center font-bold text-lg hover:bg-taara-brown hover:text-white transition-colors">Create Your Account</Link>
        </form>
      </div>
      <Footer /> {/* Add the Footer component here */}
    </>
  );
};

export default LoginPage;