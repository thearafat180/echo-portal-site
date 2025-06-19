import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircle2, Loader2 } from 'lucide-react';
import { supabase } from "@/lib/supabase";
import { PromoCode } from "../types/promo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const paymentMethods = [
	{
		label: "Cash on Delivery",
		value: "cod",
		description: "Pay with cash upon delivery of your order.",
		icon: "💵",
	},
];

const PaymentPage = () => {
		const location = useLocation();
		const navigate = useNavigate();
		const { form, cart } = location.state || {};
		const [showAuthDialog, setShowAuthDialog] = useState(false);
		const [checkingAuth, setCheckingAuth] = useState(true);
		const [selectedMethod, setSelectedMethod] = useState("");
		const [agreed, setAgreed] = useState(false);
		const [loading, setLoading] = useState(false);
		const [error, setError] = useState("");
		const [success, setSuccess] = useState("");
		const [promoInput, setPromoInput] = useState("");
		const [promo, setPromo] = useState<PromoCode | null>(null);
		const [promoError, setPromoError] = useState("");
		const [discount, setDiscount] = useState(0);

		const subtotal = cart
			? cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
			: 0;

		const totalWeight = cart
			? cart.reduce((sum, item) => sum + ((item.weight ? item.weight : 0) * item.quantity), 0) / 1000
			: 0;

		function calculateOnlineFee(weightKg: number) {
			if (weightKg <= 1) return 130;
			return 130 + Math.ceil(weightKg - 1) * 20;
		}

		const onlineFee = calculateOnlineFee(totalWeight);
		const total = subtotal + onlineFee;

		const getFullAddress = () => {
			if (form?.district || form?.upazila || form?.area) {
				return `${form?.area ? form.area + ', ' : ''}${form?.upazila ? form.upazila + ', ' : ''}${form?.district || ''}`.replace(/, $/, '');
			}
			return form?.address || '';
		};

		const handlePayment = async (e: React.FormEvent) => {
			e.preventDefault();
			setError("");
			setSuccess("");
			setLoading(true);

			// Fetch the current user before inserting order
			const { data: { user } } = await supabase.auth.getUser();

			const productNames = cart ? cart.map(item => item.name).join(", ") : "";
			const productPrices = cart ? cart.map(item => item.price).join(", ") : "";
			const productQuantities = cart ? cart.map(item => item.quantity).join(", ") : "";

			const orderData = {
				user_id: user?.id || null,
				customer_name: form?.name || "",
				email: form?.email || "",
				phone: form?.phone || "",
				address: getFullAddress(),
				payment_method: selectedMethod,
				total: total,
				discount: discount,
				payable_total: total - discount,
				promo_code: promo?.code || null,
				order_status: "pending",
				created_at: new Date().toISOString(),
				product_names: productNames,
				product_prices: productPrices,
				product_quantities: productQuantities,
			};

			const { error: orderError } = await supabase.from("orders").insert([orderData]);
			if (orderError) {
				setError("Failed to save order. Please try again.");
				setLoading(false);
				return;
			}

			setTimeout(() => {
				setLoading(false);
				setSuccess("Payment successful! Your order has been placed.");
			}, 1200);
		};

		async function handleApplyPromo(e: React.FormEvent) {
			e.preventDefault();
			setPromoError("");
			setDiscount(0);
			setPromo(null);
			if (!promoInput) return;
			const { data, error } = await supabase
				.from("promo_codes")
				.select("*")
				.eq("code", promoInput.trim())
				.eq("is_active", true)
				.single();
			if (error || !data) {
				setPromoError("Invalid or expired promo code.");
				return;
			}
			if (data.expires_at && new Date(data.expires_at) < new Date()) {
				setPromoError("Promo code has expired.");
				return;
			}
			setPromo(data);
			let d = 0;
			if (data.discount_type === "amount") d = data.discount_value;
			if (data.discount_type === "percent") d = Math.round((data.discount_value / 100) * subtotal);
			setDiscount(d);
		}

		useEffect(() => {
			async function checkAuth() {
				const { data: { user } } = await supabase.auth.getUser();
				if (!user) {
					setShowAuthDialog(true);
				} else {
					setShowAuthDialog(false);
				}
				setCheckingAuth(false);
			}
			checkAuth();

			// Listen for auth state changes
			const { data: listener } = supabase.auth.onAuthStateChange(() => {
				checkAuth();
			});
			return () => {
				listener?.subscription.unsubscribe();
			};
		}, []);

		if (checkingAuth) return null;

		if (showAuthDialog) {
			return (
				<Dialog open>
					<DialogContent onEscapeKeyDown={() => navigate('/cart')} onPointerDownOutside={() => navigate('/cart')}>
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
				<div className="min-h-screen bg-gradient-to-br from-taara-warm-white to-[#f7f3ed] flex flex-col items-center py-12 px-2">
          <div className="w-full max-w-2xl flex flex-col gap-10 items-center">
            {/* Animated Payment Heading */}
            <h1 className="text-6xl font-display font-bold text-taara-dark-brown mb-4 animate-fade-in-up text-center">Payment</h1>
            {/* Checkout Summary - on top */}
            <div className="w-full bg-white/90 rounded-3xl shadow-xl border border-taara-wood/10 p-10 animate-fade-in mb-0">
              <h3 className="text-xl font-bold mb-4 text-taara-brown">Checkout Summary</h3>
              <div className="space-y-2 text-gray-700 text-base">
                <div className="flex justify-between"><span>Subtotal</span><span>{subtotal} TK.</span></div>
                <div className="flex justify-between"><span>Shipping Cost</span><span>{onlineFee} TK.</span></div>
                <div className="flex justify-between"><span>Total Weight</span><span>{totalWeight.toFixed(2)} kg</span></div>
                <div className="flex justify-between font-semibold"><span>Total</span><span>{(total - discount).toLocaleString()} TK.</span></div>
                <div className="flex justify-between font-bold text-taara-brown"><span>Payable Total</span><span>{(total - discount).toLocaleString()} TK.</span></div>
              </div>
              <div className="mt-8">
                <details className="mb-2 open:bg-taara-brown/5 rounded">
                  <summary className="cursor-pointer text-taara-brown font-medium">Apply Voucher or Promo Code</summary>
                  <form onSubmit={handleApplyPromo} className="flex flex-col gap-2 mt-2">
                    <input type="text" value={promoInput} onChange={e => setPromoInput(e.target.value)} placeholder="Enter code" className="w-full border rounded px-3 py-2" />
                    <Button className="w-full mt-0" type="submit">Apply</Button>
                    {promoError && <div className="text-red-500 text-sm text-center">{promoError}</div>}
                    {promo && <div className="text-green-700 text-sm text-center">Promo applied: {promo.code} ({promo.discount_type === 'amount' ? `৳${promo.discount_value}` : `${promo.discount_value}%`})</div>}
                  </form>
                </details>
                {promo && discount > 0 && (
                  <div className="bg-green-50 text-green-700 text-center py-2 rounded font-semibold mt-4">
                    You are saving {discount} TK
                  </div>
                )}
              </div>
            </div>
            {/* Payment Methods - below */}
            <form onSubmit={handlePayment} className="w-full bg-white/90 rounded-3xl shadow-xl border border-taara-wood/10 p-10 animate-fade-in">
              <h2 className="text-2xl font-bold mb-6 text-taara-brown flex items-center gap-2">
                <span>Payment Method</span>
                <span className="text-sm font-normal text-gray-500">(Select one)</span>
              </h2>
              <div className="space-y-6">
                <div className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${selectedMethod === "cod" ? 'border-taara-brown bg-taara-brown/5 shadow' : 'border-gray-200 bg-white'}`}>
                  <input type="radio" name="payment" id="cod" checked={selectedMethod === "cod"} onChange={() => setSelectedMethod("cod")} className="accent-taara-brown scale-125" />
                  <label htmlFor="cod" className="flex-1 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">💵</span>
                      <span className="font-semibold text-taara-brown">Cash on Delivery</span>
                    </div>
                    <div className="text-gray-500 text-sm mt-1">Pay with cash upon delivery of your order.</div>
                  </label>
                </div>
              </div>
              <div className="mt-8 flex items-center gap-2">
                <input type="checkbox" id="agree" checked={agreed} onChange={e => setAgreed(e.target.checked)} className="accent-taara-brown scale-110" />
                <label htmlFor="agree" className="text-sm text-gray-700">I agree to the <a href="#" className="text-taara-brown underline">terms and conditions</a>.</label>
              </div>
              <Button type="submit" className="w-full mt-8 text-lg py-3 font-bold shadow-lg transition-all hover:scale-[1.02]" disabled={!selectedMethod || !agreed || loading}>
                {loading ? <Loader2 className="animate-spin inline-block mr-2" /> : null}
                {loading ? "Processing..." : `Confirm Order ৳${(total - discount).toLocaleString()}`}
              </Button>
              {error && <div className="text-red-500 text-center mt-2">{error}</div>}
              {success && <div className="text-green-600 text-center mt-2 flex items-center justify-center gap-2"><CheckCircle2 className="inline-block" /> {success}</div>}
            </form>
          </div>
        </div>
				<Footer />
			</>
		);
};

export default PaymentPage;
