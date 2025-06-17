import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
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
      navigate("/");
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-taara-warm-white flex items-center justify-center">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-6">
          <h2 className="text-2xl font-bold text-taara-brown mb-4">Login</h2>
          {error && <div className="text-red-500 text-center">{error}</div>}
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input name="password" type="password" value={form.password} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
          </div>
          <button type="submit" className="w-full bg-taara-brown text-white py-2 rounded font-bold">Login</button>
          <div className="text-center text-sm mt-4">
            Don't have an account? <Link to="/signup" className="text-taara-brown hover:underline">Sign Up</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage; 