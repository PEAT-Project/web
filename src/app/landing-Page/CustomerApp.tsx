import React, { useState, useEffect } from "react";
import AppButton from "@/components/appbutton";
import { Col, Row } from "antd";
import {
  MdDateRange,
  MdEventAvailable,
  MdOutlineNavigation,
  MdOutlinePayment,
  MdLocationOn,
  MdNotificationsActive,
} from "react-icons/md";
import { motion } from "framer-motion";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function CustomerApp() {
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
      icon: <MdEventAvailable className="text-2xl text-amber-600" />,
      text: "Real-time parking slot availability",
    },
    {
      icon: <MdOutlinePayment className="text-2xl text-amber-600" />,
      text: "Instant booking and secure payments",
    },
    {
      icon: <MdOutlineNavigation className="text-2xl text-amber-600" />,
      text: "Easy navigation to parking locations",
    },
    {
      icon: <MdDateRange className="text-2xl text-amber-600" />,
      text: "Flexible booking options for short or long stays",
    },
    {
      icon: <MdLocationOn className="text-2xl text-amber-600" />,
      text: "Find parking spots near your destination",
    },
    {
      icon: <MdNotificationsActive className="text-2xl text-amber-600" />,
      text: "Reminders and expiry notifications",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-amber-500 to-orange-500 overflow-hidden py-16">
      {/* Hero Section with Improved Layout */}
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -30 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            Book a Slot
          </h2>
          <p className="text-lg md:text-xl text-amber-100 max-w-3xl mx-auto">
            Find, reserve and pay for parking spaces with just a few taps
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
                className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full bg-white/20 blur-xl"
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
                className="relative flex items-center justify-center w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-white rounded-full shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Inner glow */}
                <div className="absolute inset-2 bg-gradient-to-br from-amber-100 to-amber-50 rounded-full opacity-50" />

                {/* Phone image */}
                <motion.div className="relative z-10 drop-shadow-2xl">
                  <motion.img
                    className="w-35 sm:w-56 md:w-60 lg:w-72 object-contain"
                    src={`${basePath}/assets/images/samsung-galaxy-still(11).png`}
                    alt="PEAT Customer App Mockup"
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
                    <MdOutlinePayment className="text-white text-2xl" />
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
                    <MdLocationOn className="text-white text-xl" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </Col>

          {/* Right Column - Features & CTA */}
          <Col xs={24} sm={24} md={12} className="px-6 md:px-10">
              <motion.div
              className="max-w-lg mx-auto md:mx-0 bg-white/10 backdrop-filter backdrop-blur-lg p-8 rounded-2xl"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 30 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <motion.h1
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                Effortless Parking at Your Fingertips
              </motion.h1>

              <motion.p
                className="text-base md:text-lg font-light mb-6 text-amber-100 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                With the PEAT Booking App, finding and reserving parking has
                never been easier. Explore available parking slots, book
                instantly, and secure your spot all in just a few taps.
              </motion.p>

              <motion.h2
                className="text-xl md:text-2xl font-semibold mb-4 text-white flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <span className="w-8 h-1 bg-white mr-3 rounded-full"></span>
                Features
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
                    className="flex items-start bg-white/20 p-3 rounded-lg border-l-4 border-white hover:bg-white/30 transition-all duration-300"
                    variants={itemVariants as any}
                  >
                    <div className="mr-3 bg-white/30 p-2 rounded-lg">
                      {feature.icon}
                    </div>
                    <span className="text-sm md:text-base text-white">
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
                      className="w-5 h-5 text-amber-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-amber-100">
                  4.8 stars from 10,000+ users
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
                  className="w-full py-3 text-white font-medium border border-white rounded-lg hover:bg-white/20 transition-colors duration-300 mt-3 flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Learn More</span>
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

        {/* Map visualization section */}
        <motion.div
          className="mt-12 bg-white rounded-2xl shadow-xl p-8 max-w-5xl mx-auto overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
          transition={{ duration: 0.7, delay: 1.4 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
                Find Parking Near You
              </h3>
              <p className="text-gray-600 mb-6">
                Our interactive map shows real-time parking availability across
                the city. Filter by price, duration, and special features to
                find your perfect spot.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "1000+", label: "Parking Locations" },
                  { number: "50k+", label: "Available Spaces" },
                  { number: "95%", label: "User Satisfaction" },
                  { number: "2min", label: "Average Booking Time" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-3 bg-amber-50 rounded-lg"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6 + index * 0.1 }}
                  >
                    <p className="text-xl font-bold text-amber-600">
                      {stat.number}
                    </p>
                    <p className="text-xs text-gray-600">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="hidden md:block md:w-1/2 relative">
              <motion.div
                className="relative rounded-xl overflow-hidden shadow-lg h-64 md:h-80"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8, duration: 0.7 }}
              >
                {/* Simplified map mockup */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                  {/* Map roads */}
                  <div className="absolute top-1/4 left-0 right-0 h-2 bg-gray-300"></div>
                  <div className="absolute top-2/3 left-0 right-0 h-2 bg-gray-300"></div>
                  <div className="absolute bottom-1/4 left-0 right-0 h-2 bg-gray-300"></div>
                  <div className="absolute left-1/4 top-0 bottom-0 w-2 bg-gray-300"></div>
                  <div className="absolute left-2/3 top-0 bottom-0 w-2 bg-gray-300"></div>
                  <div className="absolute left-3/4 top-0 bottom-0 w-2 bg-gray-300"></div>

                  {/* Parking indicators */}
                  <motion.div
                    className="absolute top-1/4 left-1/4 w-8 h-8 bg-amber-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white font-bold"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    P
                  </motion.div>

                  <motion.div
                    className="absolute top-2/3 left-2/3 w-8 h-8 bg-amber-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white font-bold"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    P
                  </motion.div>

                  <motion.div
                    className="absolute bottom-1/4 right-1/4 w-8 h-8 bg-amber-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white font-bold"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  >
                    P
                  </motion.div>

                  {/* User location */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-lg"
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(59, 130, 246, 0.5)",
                        "0 0 0 15px rgba(59, 130, 246, 0)",
                        "0 0 0 0 rgba(59, 130, 246, 0)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  ></motion.div>
                </div>
              </motion.div>

              {/* Controls overlay */}
              <motion.div
                className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg flex justify-between items-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.5 }}
              >
                <div className="flex items-center">
                  <MdLocationOn className="text-amber-500 text-xl mr-1" />
                  <span className="text-xs text-gray-700 truncate">
                    Current Location
                  </span>
                </div>
                <button className="bg-amber-500 text-white text-xs px-3 py-1 rounded-full">
                  Find Parking
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
