"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";

function MediaPage() {
  const [invertedDarkMode, setInvertedDarkMode] = useState(false);

  useEffect(() => {
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    // Invert the theme
    setInvertedDarkMode(!systemPrefersDark);

    // Optional: respond to system changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => setInvertedDarkMode(!e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <section
      className={`flex flex-col items-center justify-start px-4 
        ${invertedDarkMode ? "bg-white text-gray-800" : "bg-gray-900 text-white"}`}
    >
      {/* Image section with overlaid text */}
      <div className="relative w-full h-[300px]">
        <Image
          src="/media.jpeg"
          alt="Media Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h2 className="text-white text-2xl sm:text-3xl font-bold text-center">
            <Typewriter
              words={["Media Gallery Coming Soon!"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
        </div>
      </div>

      {/* Description section */}
      <div className="mt-6 max-w-md text-center text-base sm:text-lg">
        <p>
          We are working hard to gather the best images and videos of our nuts,
          bolts, and fasteners. Check back soon to see our products in action
          and behind the scenes at{" "}
          <span className="text-green-600 font-semibold">
            Macdeo-Resources Industries
          </span>
          !
        </p>
      </div>

      {/* Go back button */}
      <div className="flex items-center justify-center">
        <Link href="/">
          <button
            type="button"
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200 w-62 mt-20 animate-pulse"
          >
            <span className={`relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-transparent font-bold text-lg 
              ${invertedDarkMode ? "bg-white text-gray-900" : "bg-gray-900 text-white"}`}>
              GO BACK!
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
}

export default MediaPage;
