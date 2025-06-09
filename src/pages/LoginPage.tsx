import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";

const LoginPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add authentication logic
    alert("Logged in! (Demo)");
    navigate("/");
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-taara-warm-white flex items-center justify-center">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-6">
          <h2 className="text-2xl font-bold text-taara-brown mb-4">Login</h2>
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