"use client";

import React, { useState, useEffect } from "react";
import AppButton from "@/components/appbutton";
import { Col, Row } from "antd";
import {
  MdAnalytics,
  MdOutlineEventAvailable,
  MdPeopleAlt,
  MdUpdate,
  MdSecurity,
  MdMonetizationOn,
} from "react-icons/md";
import { motion } from "framer-motion";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function OwnerApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setIsVisible(true);
  }, []);

  // Animation variants with improved timing
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Enhanced animation for the phone
  const phoneVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1.2,
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  // Features data for easier management
  const features = [
    {
      icon: <MdOutlineEventAvailable className="text-2xl text-amber-600" />,
      text: "Easy setup to list your parking spaces",
    },
    {
      icon: <MdUpdate className="text-2xl text-amber-600" />,
      text: "Real-time updates on slot availability",
    },
    {
      icon: <MdAnalytics className="text-2xl text-amber-600" />,
      text: "Detailed analytics and earnings reports",
    },
    {
      icon: <MdPeopleAlt className="text-2xl text-amber-600" />,
      text: "Hassle-free customer management",
    },
    {
      icon: <MdSecurity className="text-2xl text-amber-600" />,
      text: "Secure payment processing",
    },
    {
      icon: <MdMonetizationOn className="text-2xl text-amber-600" />,
      text: "Dynamic pricing options for maximum profit",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-amber-50 to-white overflow-hidden py-16">
      {/* Hero Section with Improved Layout */}
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -30 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-600">
            List Your Park
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Turn your empty parking spaces into a profitable business with our
            advanced management platform
          </p>
        </motion.div>

        <Row className="flex items-center justify-center pt-8 pb-20">
          {/* Left Column - Phone Mockup */}
          <Col
            xs={24}
            sm={24}
            md={12}
            className="flex justify-center mb-12 md:mb-0"
          >
            <motion.div
              className="relative flex items-center justify-center"
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={phoneVariants as any}
            >
              {/* Decorative elements */}
              <motion.div
                className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-amber-400/20 to-orange-500/20 blur-xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Phone container */}
              <motion.div
                className="relative flex items-center justify-center w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Inner glow */}
                <div className="absolute inset-2 bg-gradient-to-br from-amber-400 to-amber-300 rounded-full opacity-50" />

                {/* Phone image */}
                <motion.div className="relative z-10 drop-shadow-2xl">
                  <motion.img
                    className="w-35 sm:w-56 md:w-60 lg:w-72 object-contain"
                    src={`assets/images/samsung-galaxy-still(11).png`}
                    alt="PEAT Owner App Mockup"
                    animate={{
                      y: [0, -8, 0],
                      rotateZ: [0, 2, 0, -2, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 5,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Floating elements around the phone */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center shadow-lg"
                    animate={{
                      y: [0, -10, 0],
                      x: [0, 5, 0],
                      opacity: [0.9, 1, 0.9],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  >
                    <MdMonetizationOn className="text-white text-2xl" />
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-2 -left-4 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center shadow-lg"
                    animate={{
                      y: [0, 8, 0],
                      x: [0, -3, 0],
                      opacity: [0.9, 1, 0.9],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  >
                    <MdAnalytics className="text-white text-xl" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </Col>

          {/* Right Column - Features & CTA */}
          <Col xs={24} sm={24} md={12} className="px-6 md:px-10">
            <motion.div
              className="max-w-lg mx-auto md:mx-0"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 30 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <motion.h1
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                Maximize Your Parking Revenue with{" "}
                <span className="text-amber-500">PEAT</span>
              </motion.h1>

              <motion.p
                className="text-base md:text-lg font-light mb-6 text-gray-600 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                The PEAT Park Owner App empowers parking facility owners to
                manage bookings, track occupancy, and increase revenue
                effortlessly. List your parking space and let our technology
                handle the rest.
              </motion.p>

              <motion.h2
                className="text-xl md:text-2xl font-semibold mb-4 text-gray-800 flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <span className="w-8 h-1 bg-amber-500 mr-3 rounded-full"></span>
                Key Features
              </motion.h2>

              {/* Feature list with improved styling */}
              <motion.ul
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
                variants={containerVariants as any}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
              >
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-amber-500"
                    variants={itemVariants as any}
                  >
                    <div className="mr-3 bg-amber-100 p-2 rounded-lg">
                      {feature.icon}
                    </div>
                    <span className="text-sm md:text-base text-gray-700">
                      {feature.text}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Rating indicator */}
              <motion.div
                className="flex items-center mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.7, delay: 1 }}
              >
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  Trusted by 1000+ parking owners
                </span>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.7, delay: 1.2 }}
              >
                <AppButton
                  playStoreLink="https://play.google.com/store/apps/details?id=com.example"
                  appStoreLink="https://apps.apple.com/app/id123456789"
                />

                {/* Additional CTA */}
                {/* <motion.button
                  className="w-full py-3 text-amber-600 font-medium border border-amber-600 rounded-lg hover:bg-amber-50 transition-colors duration-300 mt-3 flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Schedule a Demo</span>
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </motion.button> */}
              </motion.div>
            </motion.div>
          </Col>
        </Row>

        {/* Stats Section */}
        <motion.div
          className="mt-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl shadow-xl p-8 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
          transition={{ duration: 0.7, delay: 1.4 }}
        >
          <h3 className="text-xl md:text-2xl font-semibold text-center mb-8 text-white">
            Why Parking Owners Choose PEAT
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "30%", label: "Average Revenue Increase" },
              { value: "24/7", label: "Automated Management" },
              { value: "5min", label: "Quick Setup Time" },
              { value: "10k+", label: "Active Users" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center backdrop-filter backdrop-blur-sm p-4 rounded-lg"
                style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: -5 }}
                transition={{ delay: 1.6 + index * 0.1, duration: 0.5 }}
              >
                <p className="text-3xl md:text-4xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="text-sm md:text-base text-amber-100">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial Section */}
        <motion.div
          className="mt-16 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
          transition={{ duration: 0.7, delay: 1.8 }}
        >
          <h3 className="text-xl md:text-2xl font-semibold text-center mb-8 text-gray-800">
            What Our Users Say
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "PEAT increased my parking lot's revenue by 35% in just 3 months. The automated system is a game-changer.",
                author: "Michael T.",
                role: "Shopping Mall Owner",
              },
              {
                quote:
                  "Setting up was incredibly easy. Now I can manage my multiple parking locations from a single dashboard.",
                author: "Sarah J.",
                role: "Corporate Parking Manager",
              },
              {
                quote:
                  "The analytics help me make smarter pricing decisions. I wish I had discovered PEAT years ago!",
                author: "David L.",
                role: "Hotel Parking Director",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border-t-4 border-amber-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.0 + index * 0.1, duration: 0.5 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <svg
                  className="w-8 h-8 text-amber-400 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-600 mb-4">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-gray-800">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
