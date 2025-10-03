"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // ConvertKit integration - Replace with your Form ID
      const CONVERTKIT_FORM_ID = process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID || "YOUR_FORM_ID";

      const response = await fetch(`https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM_ID}/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          api_key: process.env.NEXT_PUBLIC_CONVERTKIT_API_KEY,
          email: email,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setMessage("Thanks! Check your email to confirm your subscription.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      id="email-signup"
      className="bg-navy-800 py-12 px-6 rounded-xl border border-gold/20"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
          Stay Connected
        </h3>
        <p className="text-gray-300 mb-6">
          Get free resources, updates, and encouragement for your parenting journey.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            disabled={status === "loading"}
            className="flex-1 px-5 py-3 border-2 border-gray-300 rounded-full focus:outline-none focus:border-gold transition-colors disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-8 py-3 bg-gold text-white rounded-full font-bold hover:bg-gold-light transition-all duration-300 hover:scale-105 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </button>
        </form>

        {message && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`mt-4 text-sm ${status === "success" ? "text-green-600" : "text-red-600"}`}
          >
            {message}
          </motion.p>
        )}

        <p className="text-xs text-gray-400 mt-4">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </motion.div>
  );
}
