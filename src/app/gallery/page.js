"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

function Gallery() {
  const [invertedDarkMode, setInvertedDarkMode] = useState(false);

  useEffect(() => {
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setInvertedDarkMode(!systemPrefersDark);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => setInvertedDarkMode(!e.matches);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div
      className={`p-6 min-h-screen transition-colors duration-300 ${
        invertedDarkMode ? "bg-white text-gray-800" : "bg-gray-900 text-white"
      }`}
    >
      {/* Placeholder for future gallery grid */}
      <div className="text-center py-32">
        <h2 className="text-2xl font-semibold">Gallery Coming Soon</h2>
        <p className="mt-4 max-w-xl mx-auto">
          We are currently preparing an amazing collection of images to showcase our products.  
          Stay tuned and visit us again soon!
        </p>
      </div>

      {/* Go Back Button */}
      <div className="flex items-center justify-center w-full">
        <Link href="/">
          <button
            type="button"
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200 w-62 mt-20"
          >
            <span
              className={`relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-transparent font-bold text-lg ${
                invertedDarkMode ? "bg-white text-gray-900" : "bg-gray-900 text-white"
              }`}
            >
              GO BACK!
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Gallery;
