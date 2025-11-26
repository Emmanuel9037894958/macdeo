"use client";

import React from "react";
import { Leaf } from "lucide-react";

export default function Sustainability() {
  const points = [
    "We prioritize eco-friendly materials and sustainable sourcing for all nuts, bolts, and fasteners.",
    "Our manufacturing processes minimize waste and energy consumption.",
    "Packaging is designed to be recyclable and reduce environmental impact.",
    "We actively engage in initiatives that support local communities and green practices.",
    "Continuous improvement programs ensure compliance with international environmental standards."
  ];

  return (
    <section className="p-6 md:p-12 bg-gray-50 min-h-screen py-32">
      {/* Heading */}
      <div className="text-center md:text-left mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Sustainability</h1>
        <p className="text-green-700 text-lg md:text-xl mt-2 font-semibold">
          Our Commitment to a Greener Future
        </p>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto space-y-6">
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          At <strong>MACDEO-RESOURCES</strong>, we believe in combining high-quality manufacturing with environmental responsibility. Sustainability is not just a policy but a key part of our operational ethos.
        </p>

        {/* List of Sustainability Points */}
        <div className="space-y-4">
          {points.map((point, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 flex-shrink-0 shadow-md">
                <Leaf size={18} className="text-white" />
              </div>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">{point}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-6">
          By maintaining eco-conscious practices, we aim to reduce our carbon footprint while ensuring that our customers receive the highest quality fasteners and materials. Together with our partners, we contribute to a more sustainable and responsible industry.
        </p>
      </div>
    </section>
  );
}
