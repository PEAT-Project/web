"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  IoLocationOutline,
  IoMailOutline,
  IoCallOutline,
} from "react-icons/io5";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");

      // Reset form after success
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <IoLocationOutline className="w-6 h-6" />,
      title: "Our Location",
      details: "PEAT Headquarters",
      subDetails: "Local City Center, Suite 300",
    },
    {
      icon: <IoMailOutline className="w-6 h-6" />,
      title: "Email Address",
      details: "support@peatapp.com",
      subDetails: "business@peatapp.com",
    },
    {
      icon: <IoCallOutline className="w-6 h-6" />,
      title: "Phone Number",
      details: "+1 (555) 728-9275",
      subDetails: "24/7 Customer Support",
    },
  ];

  return (
    <div className="bg-white min-h-screen text-gray-800">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-50 to-amber-100 z-0" />
  {/* background pattern - use runtime basePath so it works on project pages */}
  {(() => {
    const router = useRouter();
    const basePath = (router as any)?.basePath || "";
    return (
      <div
        className="absolute inset-0 bg-no-repeat bg-cover opacity-5 z-0"
        style={{
          backgroundImage: `url('${basePath}/assets/images/parking-pattern.png')`,
        }}
      />
    );
  })()}

        <div className="relative z-10 pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
              Contact PEAT
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about our parking management system or need
              assistance? Our team is here to help with all your parking needs.
              Registered under number <strong>PV00306529</strong>.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-100 hover:border-amber-300 transition-all duration-300 hover:shadow-lg hover:shadow-amber-100 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-br from-amber-400 to-amber-500 rounded-lg text-white shadow-md group-hover:shadow-lg group-hover:shadow-amber-200/50 transition-all duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">
                      {info.title}
                    </h3>
                    <p className="text-gray-700">{info.details}</p>
                    <p className="text-gray-500 text-sm">{info.subDetails}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg shadow-gray-100"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Send Us a Message
            </h2>

            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6"
              >
                Thank you! Your message has been sent successfully. A member of
                our parking solutions team will get back to you shortly.
              </motion.div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 text-gray-800"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-gray-800"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-gray-800"
                    placeholder="Parking Inquiry"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-gray-800 resize-none"
                    placeholder="Tell us about your parking needs or any questions you have about our services..."
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 text-white font-medium text-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber-200/50 ${
                      isSubmitting
                        ? "opacity-75 cursor-not-allowed"
                        : "hover:scale-[1.02]"
                    }`}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </div>
            </form>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden h-full min-h-[400px] border border-gray-200 shadow-lg shadow-gray-100"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059445135!2d-74.25986613799748!3d40.697149417097104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1683888073122!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="PEAT Parking Locations"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </motion.div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about the PEAT parking management
              system.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: "How does the PEAT parking system work?",
                a: "PEAT allows you to find, reserve, and pay for parking spots in real-time through our user-friendly app. Simply search for available spots near your destination, book with a tap, and use the app to access the parking facility.",
              },
              {
                q: "Is PEAT available in my city?",
                a: "PEAT is currently available in major urban centers locally. We're expanding rapidly - check our coverage map in the app for the most up-to-date information on available locations.",
              },
              {
                q: "How do I cancel a parking reservation?",
                a: "You can cancel a reservation through the app up to 30 minutes before your scheduled arrival time for a full refund. Later cancellations may be subject to our cancellation policy.",
              },
              {
                q: "What payment methods does PEAT accept?",
                a: "PEAT accepts all major credit cards, debit cards, and mobile payment solutions. All payments are processed securely through our encrypted platform.",
              },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-amber-300 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <h3 className="text-lg font-semibold mb-2 text-amber-500">
                  {faq.q}
                </h3>
                <p className="text-gray-700">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-50 to-amber-100 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-2xl border border-gray-200 text-center shadow-xl"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              Start Using PEAT Today
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Eliminate parking stress and uncertainty. Join thousands of
              drivers who have revolutionized their parking experience with
              PEAT.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#"
                className="px-8 py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-amber-200/50 transition-all duration-300 hover:scale-105"
              >
                Download the App
              </a>
              <a
                href="#"
                className="px-8 py-3 bg-transparent border border-gray-300 hover:border-amber-400 text-gray-700 hover:text-amber-600 rounded-lg font-medium transition-all duration-300 hover:scale-105"
              >
                View Parking Locations
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
