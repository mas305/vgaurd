import { motion } from "framer-motion";

const headers = [
  { title: "Camera id", delay: 0.1 },
  { title: "Car Image", delay: 0.2 },
  { title: "Plate Image", delay: 0.3 },
  { title: "Plate Num", delay: 0.4 },
  { title: "Confidence Score", delay: 0.5 },
  { title: "Time", delay: 0.6 },
  { title: "Date", delay: 0.7 },
];

function RowHeader() {
  return (
    <motion.div
      className="grid grid-cols-7 gap-4 font-bold text-lg text-secondary-dark bg-gray-800 text-white p-5 rounded-br-2xl rounded-tl-2xl rounded-tr-md rounded-bl-md"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {headers.map((header, index) => (
        <motion.div
          key={index}
          className={
            index === 1 || index === 2 || index === 3 ? "text-center" : ""
          }
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: header.delay }}
        >
          {header.title}
        </motion.div>
      ))}
    </motion.div>
  );
}

export default RowHeader;
