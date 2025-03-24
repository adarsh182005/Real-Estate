import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://formspree.io/f/xkgolkey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Error sending message. Try again.");
      }
    } catch (error) {
      setStatus("🚨 Network error. Please try again later.");
    }
  };

  return (
    <section className="flex flex-col items-center py-16 px-4 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
        Contact <span className="text-blue-600">With Us</span>
      </h2>
      <p className="text-gray-600 text-center mb-8 max-w-xl">
        Ready to Make a Move? Let’s Build Your Future Together
      </p>

      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none h-32"
              placeholder="Write your message..."
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-all duration-300"
          >
            Send Message
          </button>

          {/* Status Message */}
          {status && <p className="mt-4 text-center text-gray-700">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
