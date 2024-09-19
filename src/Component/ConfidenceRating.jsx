/* eslint-disable */
import React, { useEffect, useState } from "react";

const ConfidenceRating = ({ score }) => {
  const [displayedScore, setDisplayedScore] = useState(0); // For animating the number
  const normalizedScore = Math.min(Math.max(score, 0), 1); // Ensure score is between 0 and 1

  useEffect(() => {
    // Animation for counting the number
    let start = 0;
    const end = Math.round(normalizedScore * 100); // Final score in percentage

    if (start === end) return;

    const duration = 1000; // Duration of the number animation in milliseconds
    const incrementTime = Math.abs(Math.floor(duration / (end - start))); // Time for each step of the increment

    const timer = setInterval(() => {
      start += 1;
      setDisplayedScore(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [normalizedScore]);

  // Set the radius for the circle
  const radius = 40; // Radius as a percentage of the viewbox
  const circumference = 2 * Math.PI * radius; // Calculate the circle's circumference

  // Calculate the stroke offset based on the normalized score (0 to 1)
  const strokeDashoffset = circumference * (1 - normalizedScore);

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Circle Container */}
      <div className="relative w-28 h-28">
        <svg className="w-full h-full transform -rotate-90">
          {" "}
          {/* Rotate to start from top */}
          {/* Background Circle */}
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            stroke="gray"
            strokeWidth="6"
            fill="transparent"
          />
          {/* Foreground Circle for the progress */}
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            stroke="teal"
            strokeWidth="6"
            strokeDasharray={circumference} // Set the circumference
            strokeDashoffset={strokeDashoffset} // Adjust the offset based on the score
            strokeLinecap="round"
            fill="transparent"
            className="stroke-teal-500 transition-all duration-1000" // Smooth stroke animation
          />
        </svg>
        {/* Score Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold animate-pulse">
            {displayedScore}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default ConfidenceRating;
