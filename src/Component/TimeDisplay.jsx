/* eslint-disable */

import React from "react";
import { FaClock } from "react-icons/fa"; // Importing an icon for a clock
import { motion } from "framer-motion"; // Importing Framer Motion for animations

const TimeDisplay = ({ time }) => {
  // Motion variants for the container
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    hover: { scale: 1.05, transition: { duration: 0.3 } }, // Scale up slightly on hover
  };


  return (
    <motion.div
      className="flex items-center justify-center bg-teal-100 text-teal-600 p-2 rounded-lg shadow-md cursor-pointer"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover" // Apply hover animation to the entire container
    >
      {/* Icon with rotation animation on hover */}
      <motion.div>
        <FaClock className="mr-2 text-lg" />
      </motion.div>

      {/* Time Text */}
      <span className="text-2xl font-semibold">{time}</span>
    </motion.div>
  );
};

export default TimeDisplay;
