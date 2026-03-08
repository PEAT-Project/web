import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function MainBanner() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <main
      className="relative md:min-h-screen bg-cover bg-center flex items-center justify-center text-center px-4 min-h-[80vh] overflow-hidden"
      style={{
        backgroundImage:
          `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)),url('${basePath}/assets/images/background.jpg')`,
        backgroundPosition: `center ${scrollY * 0.5}px`,
      }}
    >
      <motion.div
        className="flex flex-col items-center text-center gap-8 md:py-[10vh] pt-20 max-w-4xl z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants as any}
      >
  <motion.div variants={itemVariants as any} className="space-y-2">
          <span className="inline-block bg-[#F8A71B] text-black px-4 py-1 rounded-full text-sm font-medium tracking-wide mb-4 animate-pulse">
            #1 PARKING SERVICE
          </span>
          <h1 className="text-white text-4xl md:text-7xl font-bold leading-tight drop-shadow-xl">
            Find Your Parking Spot,
            <br />
            <span className="text-[#F8A71B]">Anywhere, Anytime.</span>
          </h1>
          <p className="text-gray-200 mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Discover convenient parking spaces near you with real-time
            availability and secure your spot in seconds.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants as any}
          className="mt-8 flex flex-col md:flex-row gap-4"
        >
          <button className="flex items-center justify-center gap-2 bg-[#F8A71B] text-white px-8 py-4 text-lg rounded-lg font-medium transition-transform transform hover:scale-105 hover:shadow-xl">
            Book Now
          </button>
        </motion.div>
      </motion.div>
    </main>
  );
}
