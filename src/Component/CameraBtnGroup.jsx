/* eslint-disable */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion

const CameraBtnGroup = ({ cameraResultsHandle, showAllResults }) => {
  const [cameraNum, setCameraNum] = useState([]);

  // Fetch data of the selected camera
  useEffect(() => {
    axios
      .get(`http://localhost:8000/dashboard/camera`)
      .then((response) => {
        setCameraNum(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <motion.div
      className="inline-flex rounded-br-2xl rounded-tl-2xl rounded-tr-sm rounded-bl-sm shadow-sm gap-x-3 bg-gray-100 p-3"
      role="group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* camera Button */}
      {cameraNum &&
        cameraNum.map((camera) => (
          <motion.button
            key={camera.id}
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            onClick={() => cameraResultsHandle(camera.id)} // Pass the camera ID to the handler
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: camera.id * 0.05 }}
          >
            {camera.name}
          </motion.button>
        ))}
        
      {/* All camera Button */}
      <motion.button
        type="button"
        className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
        onClick={showAllResults} // Show all results
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        All Cameras
      </motion.button>
    </motion.div>
  );
};

export default CameraBtnGroup;
