/* eslint-disable */
import React from "react";
import { motion } from "framer-motion";

const CameraCard = ({ cameraId }) => {
  // Motion variants for animations
  const cardVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    hover: {
      scale: 1.1,
      backgroundColor: "#4A5568", // Changes background color on hover
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)", // Adds shadow effect on hover
      transition: {
        duration: 0.3, // Smooth transition
        ease: "easeInOut",
      },
    },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      className="flex w-32 h-32 justify-center items-center drop-shadow-xl"
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
    >
      <motion.div
        className="flex justify-center items-center w-full h-full bg-gray-600 text-white rounded-md text-6xl"
        whileHover={{ rotate: 5 }} // Slight rotation on hover
      >
        {cameraId}
      </motion.div>
    </motion.div>
  );
};

export default CameraCard;
