/* eslint-disable */
import React from "react";
import { motion } from "framer-motion";

const Pagination = ({
  currentPage,
  recordNum,
  onPageChange,
  previousPage,
  nextPage,
}) => {
  // Define motion variants for buttons
  const buttonVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
  };

  // Render pagination buttons dynamically based on the recordNum
  if (recordNum) {
    return (
      <nav aria-label="Page navigation example" className="">
        <ul className="inline-flex -space-x-px text-sm">
          {/* Previous button */}
          <motion.li
            initial="initial"
            animate="animate"
            exit="exit"
            variants={buttonVariants}
          >
            <a
              href="#"
              className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight border border-e-0 rounded-s-lg ${
                previousPage === null
                  ? "text-gray-500 bg-gray-300 cursor-not-allowed"
                  : "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              }`}
              onClick={() =>
                previousPage !== null && onPageChange(currentPage - 1)
              } // Decrement current page
              disabled={previousPage === null} // Disable if previousPage is null
            >
              Previous
            </a>
          </motion.li>

          {/* Page numbers */}
          {recordNum &&
            Array.from({ length: recordNum }, (_, index) => {
              const isCurrentPage = currentPage === index + 1;

              return (
                <motion.li
                  key={index}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={buttonVariants}
                  transition={{ delay: index * 0.1 }} // Delay each page number
                >
                  <a
                    href="#"
                    className={`flex items-center justify-center px-3 h-8 leading-tight border border-gray-300 ${
                      isCurrentPage
                        ? "bg-gray-200 text-gray-500 cursor-not-allowed" // Disabled styling for current page
                        : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    }`}
                    onClick={() => !isCurrentPage && onPageChange(index + 1)} // Set current page, only if not the current page
                    disabled={isCurrentPage} // Disable current page button
                  >
                    {index + 1}
                  </a>
                </motion.li>
              );
            })}

          {/* Next button */}
          <motion.li
            initial="initial"
            animate="animate"
            exit="exit"
            variants={buttonVariants}
          >
            <a
              href="#"
              className={`flex items-center justify-center px-3 h-8 leading-tight border rounded-e-lg ${
                nextPage === null
                  ? "text-gray-500 bg-gray-300 cursor-not-allowed"
                  : "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              }`}
              onClick={() => nextPage !== null && onPageChange(currentPage + 1)} // Increment current page
              disabled={nextPage === null} // Disable if nextPage is null
            >
              Next
            </a>
          </motion.li>
        </ul>
      </nav>
    );
  }

  return null; // Return nothing if recordNum is 0 or undefined
};

export default Pagination;
