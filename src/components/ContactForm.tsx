import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";
import React from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData); // Replace with backend API call
    alert("Message sent! We’ll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 flex items-center justify-center"
        >
          Get in Touch <FaEnvelope className="ml-2" />
        </motion.h2>
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto space-y-4"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 rounded text-gray-900"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 rounded text-gray-900"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full p-3 rounded text-gray-900"
            rows={5}
            required
          />
          <button
            type="submit"
            className="bg-accent text-white py-3 px-6 rounded-lg hover:bg-green-600 transition flex items-center justify-center mx-auto"
          >
            Send Message <FaEnvelope className="ml-2" />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
