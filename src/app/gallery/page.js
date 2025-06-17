"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const heroImages = [
  {
    id: "image10",
    image: "/image10.jpg",
    description: "Every fastener you need — we&apos;re here to help!",
    keywords: ["fastener", "nut"],
  },
  {
    id: "image11",
    image: "/image11.jpg",
    description: "Don&apos;t miss out on our premium selection of fasteners.",
    keywords: ["fastener", "nut"],
  },
  {
    id: "image13",
    image: "/image13.jpg",
    description: "We&apos;ve got what you&apos;re looking for in bulk hardware.",
    keywords: ["fastener", "nut"],
  },
];

function Gallery() {
  return (
    <div className="p-6">
      {heroImages.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold text-gray-700">Gallery Coming Soon</h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            We are currently working on adding high-quality images of our fasteners and projects.
            Check back soon to explore our complete collection!
          </p>
        </div>
      ) : (
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
      )}
      <div className="flex items-center justify-center w-full">
        <Link href="/">
          <button
            type="button"
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200 w-62 mt-20 animate-pulse"
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
