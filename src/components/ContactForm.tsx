"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subscribe: false
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Web3Forms integration - Replace with your access key
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subscribe: formData.subscribe ? "Yes" : "No",
          subject: "New Contact Form Submission from Anchored Website"
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setMessage("Thanks for reaching out! We'll get back to you soon.");
        setFormData({ name: "", email: "", message: "", subscribe: false });
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
      className="w-full max-w-2xl mx-auto"
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Your Name"
            required
            disabled={status === "loading"}
            className="w-full px-5 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gold transition-colors disabled:opacity-50"
          />
        </div>

        <div>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="Your Email"
            required
            disabled={status === "loading"}
            className="w-full px-5 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gold transition-colors disabled:opacity-50"
          />
        </div>

        <div>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Your Message"
            rows={6}
            required
            disabled={status === "loading"}
            className="w-full px-5 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gold transition-colors disabled:opacity-50 resize-none"
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="subscribe"
            checked={formData.subscribe}
            onChange={(e) => setFormData({ ...formData, subscribe: e.target.checked })}
            disabled={status === "loading"}
            className="w-5 h-5 text-navy-900 border-gray-300 rounded focus:ring-gold"
          />
          <label htmlFor="subscribe" className="text-sm text-white">
            Subscribe to email updates
          </label>
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="px-8 py-4 bg-gold text-white rounded-full font-bold text-lg hover:bg-gold-light transition-all duration-300 hover:scale-105 shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>

        {message && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`text-center text-sm ${status === "success" ? "text-green-600" : "text-red-600"}`}
          >
            {message}
          </motion.p>
        )}
      </form>
    </motion.div>
  );
}
