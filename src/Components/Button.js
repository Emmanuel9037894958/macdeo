"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

function Button() {
  const [errorMessage, setErrorMessage] = useState("");

  const handleClick = (e) => {
    e.preventDefault();

    // Optionally check connection
    if (!navigator.onLine) {
      setErrorMessage("⚠️ No internet connection. Please try again.");
    } else {
      setErrorMessage("🚫 Something went wrong. Please try again later.");
    }

    // Hide message after 4 seconds
    setTimeout(() => setErrorMessage(""), 3000);
  };

  return (
    <div className="flex flex-col items-start gap-3 pt-5 w-40">
      {/* Error Message */}
      {errorMessage && (
        <p className="text-red-500 text-sm font-bold animate-pulse">
          {errorMessage}
        </p>
      )}

      {/* Button */}
      <button
        onClick={handleClick}
        type="button"
        className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent animate-pulse">
          Learn More
        </span>
        <ArrowRight className="text-white ms-2" />
      </button>
    </div>
  );
}

export default Button;
