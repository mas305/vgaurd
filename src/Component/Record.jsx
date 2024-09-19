/* eslint-disable */
import React, { useState } from "react";
import ConfidenceRating from "./ConfidenceRating";
import CalendarIcon from "./CalendarIcon";
import TimeDisplay from "./TimeDisplay";
import CameraCard from "./CameraCard";

function Record(props) {
  // State to handle modal visibility and selected image
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  // Function to open the modal with selected image
  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage("");
  };

  // Helper function to format time
  const formatTime = (dateString) => {
    const date = new Date(dateString);
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  return (
    <div className="grid grid-cols-7 gap-4">
      {/* Camera Card */}
      <div className="text-center font-bold flex justify-center items-center">
        <CameraCard cameraId={props.cameraId} />
      </div>

      {/* Car Image */}
      <div
        className="flex justify-center items-center cursor-pointer"
        onClick={() => openModal(props.carImage)}
      >
        <img
          src={props.carImage}
          alt="Car"
          className="w-full h-auto max-h-32 object-cover rounded-lg"
        />
      </div>
      {/* License Plate Image */}
      <div
        className="flex justify-center items-center cursor-pointer"
        onClick={() => openModal(props.lprImage)}
      >
        <img
          src={props.lprImage}
          alt="License Plate"
          className="w-full h-auto max-h-28 object-cover "
        />
      </div>

      {/* Plate Number */}
      <div className="text-center font-bold flex justify-center items-center text-xl my-5 border-black rounded-xl border-4">
        {props.plateNum}
      </div>
      {/* Confidence Rating */}
      <div className="text-center font-bold flex justify-center items-center">
        <ConfidenceRating score={props.score} />
      </div>

      {/* Time Display */}
      <div className="text-center font-bold flex justify-center items-center">
        <TimeDisplay time={formatTime(props.dateNtime)} />
      </div>

      {/* Calendar Icon */}
      <div className="text-center font-bold flex justify-center items-center">
        <CalendarIcon dateString={props.dateNtime} />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative w-auto max-w-3xl">
            <img
              src={modalImage}
              alt="Modal"
              className="rounded-lg shadow-lg w-full h-96"
            />
            <button
              className="absolute top-2 right-2 text-white bg-red-600 hover:bg-red-700 rounded-full p-2"
              onClick={closeModal}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Record;
