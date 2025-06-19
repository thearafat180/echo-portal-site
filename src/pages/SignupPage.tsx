import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { supabase } from "../../supabaseClient";

const SignupPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", telephone: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    const { data, error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
    });
    if (error) {
      setError(error.message);
    } else {
      // Try to save profile data if user is returned (may not be if email verification is required)
      const userId = data?.user?.id;
      if (userId) {
        await supabase.from("profiles").upsert({
          user_id: userId,
          full_name: form.firstName + " " + form.lastName,
          phone: form.telephone,
          address: "",
          profile_picture: "",
        });
      }
      setSuccess("Signup successful! Please check your email to verify your account before logging in.");
      setForm({ firstName: "", lastName: "", email: "", telephone: "", password: "" });
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-taara-warm-white flex items-center justify-center">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-6">
          <h2 className="text-2xl font-bold text-taara-brown mb-4">Register Account</h2>
          {error && <div className="text-red-500 text-center">{error}</div>}
          {success && <div className="text-green-600 text-center">{success}</div>}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block mb-1 font-medium">First Name <span className="text-red-500">*</span></label>
              <input name="firstName" value={form.firstName} onChange={handleChange} required className="w-full border rounded px-3 py-2" placeholder="First Name" />
            </div>
            <div className="flex-1">
              <label className="block mb-1 font-medium">Last Name <span className="text-red-500">*</span></label>
              <input name="lastName" value={form.lastName} onChange={handleChange} required className="w-full border rounded px-3 py-2" placeholder="Last Name" />
            </div>
          </div>
          <div>
            <label className="block mb-1 font-medium">E-Mail <span className="text-red-500">*</span></label>
            <input name="email" type="email" value={form.email} onChange={handleChange} required className="w-full border rounded px-3 py-2" placeholder="E-Mail" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Telephone <span className="text-red-500">*</span></label>
            <input name="telephone" value={form.telephone} onChange={handleChange} required className="w-full border rounded px-3 py-2" placeholder="Telephone" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Password <span className="text-red-500">*</span></label>
            <input name="password" type="password" value={form.password} onChange={handleChange} required className="w-full border rounded px-3 py-2" placeholder="Password" />
          </div>
          <button type="submit" className="w-full bg-taara-brown hover:bg-taara-dark-brown text-white py-2 rounded font-bold text-lg">Continue</button>
          <div className="flex items-center my-4">
            <div className="flex-1 border-t"></div>
            <div className="mx-4 text-gray-500">Already have an account?</div>
            <div className="flex-1 border-t"></div>
          </div>
          <div className="text-center text-sm">
            If you already have an account with us, please login at the <Link to="/login" className="text-[#ff3c00] hover:underline">login page</Link>.
          </div>
        </form>
      </div>
    </>
  );
};

export default SignupPage;