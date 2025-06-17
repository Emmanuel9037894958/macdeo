// import React from "react";
import { ArrowRight } from "lucide-react";

function Button() {
  return (
    <div className="flex gap-1 pt-5 w-40">
      {/* <button className='btn'>Learn More</button> */}
      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent animate-pulse ">
          Learn More
        </span>
      <ArrowRight  className="text-white"/>
      </button>
    </div>
  );
}

export default Button;
