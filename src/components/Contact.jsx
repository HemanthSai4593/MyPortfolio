import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState(""); // 'sending', 'success', 'failed'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/xblqjvny", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("success");
      e.target.reset();
      console.log("✅ Message sent successfully via Formspree!");
    } else {
      setStatus("failed");
      console.error("❌ Failed to send message. Check your Formspree setup.");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-[rgb(29,1,55)] text-white flex flex-col items-center justify-center py-20 px-8"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-violet-300 mb-8"
      >
        Contact Me
      </motion.h2>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-violet-900/40 p-8 rounded-2xl shadow-lg w-full max-w-lg space-y-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 rounded-lg bg-transparent border border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-400 placeholder-gray-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-3 rounded-lg bg-transparent border border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-400 placeholder-gray-400"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="w-full p-3 rounded-lg bg-transparent border border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-400 placeholder-gray-400"
        ></textarea>

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full bg-violet-600 hover:bg-violet-700 py-3 rounded-lg transition text-white font-semibold"
        >
          {status === "sending"
            ? "Sending..."
            : status === "success"
            ? "✅ Sent Successfully!"
            : "Send Message"}
        </button>

        {status === "failed" && (
          <p className="text-center text-red-400 mt-3">
            ❌ Failed to send. Please try again later.
          </p>
        )}
      </form>

      {status === "success" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="mt-6 text-green-400 font-semibold text-center"
        >
          🎉 Message sent successfully! I’ll get back to you soon.
        </motion.div>
      )}
    </section>
  );
}
