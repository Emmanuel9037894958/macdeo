"use client";

import React from "react";
import Link from "next/link";

function Gallery() {
  return (
    <div className="p-6">
      {/* 
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {heroImages.map(({ id, image, description }) => (
          <div
            key={id}
            className="rounded-lg border border-gray-200 shadow-md p-3 hover:shadow-xl transition duration-300"
          >
            <div className="relative w-full h-48 rounded-md overflow-hidden">
              <Image
                src={image}
                alt={description || "Fastener product image"}
                fill
                className="object-cover rounded-md"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <p className="mt-3 text-center font-medium">{description}</p>
          </div>
        ))}
      </div>
      */}

      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-gray-700">Gallery Coming Soon</h2>
        <p className="mt-4 text-gray-500 max-w-xl mx-auto">
          We are currently preparing an amazing collection of images to showcase our products.  
          Stay tuned and visit us again soon!
        </p>
      </div>

      <div className="flex items-center justify-center w-full">
        <Link href="/">
          <button
            type="button"
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-black rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200 w-62 mt-20"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent font-bold text-lg">
              GO BACK!
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Gallery;
