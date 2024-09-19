/* eslint-disable */

import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion"; // Import Framer Motion
import Pagination from "./Pagination";
import CameraBtnGroup from "./CameraBtnGroup";
import RowHeader from "./RowHeader";
import Record from "./Record";

const DashboardData = (props) => {
  const [results, setResults] = useState([]); // All results
  const [recordNum, setRecordNum] = useState(0); // Total number of pages
  const [selectedPage, setSelectedPage] = useState(1); // Current page number
  const [selectedcamera, setSelectedcamera] = useState(null); // Selected camera ID
  const [nextPage, setNextPage] = useState();
  const [previousPage, setPreviousPage] = useState();
  const [cameraNum, setCameraNum] = useState([]);

  // Fetch data when component mounts or when selectedPage or selectedcamera changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/dashboard/lpralpha/?page=${selectedPage}${
            selectedcamera ? `&camera_id=${selectedcamera}` : ""
          }`
        );
        setResults(response.data.results); // Set the results from the API
        setRecordNum(Math.ceil(response.data.count / 5)); // Assuming 5 records per page
        setNextPage(response.data.next);
        setPreviousPage(response.data.previous);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [selectedPage, selectedcamera]);

  // Handle page click to update selected page
  const handlePageChange = (newPage) => {
    setSelectedPage(newPage);
  };

  // Handle filtering based on the selected camera ID
  const cameraResultsHandle = (cameraId) => {
    setSelectedcamera(cameraId); // Set the selected camera ID
    setSelectedPage(1);
  };

  // Show all results
  const showAllResults = () => {
    setSelectedcamera(null); // Reset the camera filter
  };

  return (
    <div>
      {/* Camera Btn Group */}
      <CameraBtnGroup
        cameraNum={cameraNum}
        cameraResultsHandle={cameraResultsHandle}
        showAllResults={showAllResults}
      />

      {/* Records */}
      <div className="flex flex-wrap -mx-3 mb-5">
        <motion.div
          className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-gray-100 text-black m-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
            {/* Card Body */}
            <div className="flex-auto block py-8 pt-6 px-9">
              {/* Grid Container */}
              <div className="grid grid-cols-1 gap-10 text-dark border-neutral-200">
                {/* Row Header */}
                <RowHeader />

                {/* If no records, display message */}
                {results.length === 0 ? (
                  <div className="text-center text-gray-500 text-xl mt-5">
                    No records available
                  </div>
                ) : (
                  /* Add more rows dynamically here */
                  (results || []).map((record, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Record
                        recordKey={index}
                        carImage={record.car_image}
                        cameraId={record.camera}
                        dateNtime={record.created_at}
                        score={record.confidence_score}
                        plateNum={record.plate_number}
                        lprImage={record.lpr_image}
                      />
                    </motion.div>
                  ))
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Pagination component */}
      <Pagination
        currentPage={selectedPage}
        recordNum={recordNum}
        onPageChange={handlePageChange}
        nextPage={nextPage}
        previousPage={previousPage}
      />
    </div>
  );
};

export default DashboardData;
