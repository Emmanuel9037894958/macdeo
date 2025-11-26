"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Search } from "lucide-react";

// Static imports from assets folder (webpack handled)
import image1 from "../assets/da346f29-dbdc-4e47-9ce0-95a68101f37b.jpg";
import image2 from "../assets/images__28_-removebg-preview.png";
import image3 from "../assets/download (1).jpeg";
import image4 from "../assets/download (4).jpeg";
import image5 from "../assets/images (12).jpeg";
import image6 from "../assets/images (19).jpeg";
import image8 from "../assets/myimage.png";

export default function Hero() {
  const heroImages = [
    { id: "image1", image: image1, description: "20mm Threaded Rod - Precision guaranteed!", keywords: ["fastener", "nut", "bolt"] },
    { id: "image2", image: image2, description: "Hex bolts and nuts all available!", keywords: ["fastener", "bolt"] },
    { id: "image3", image: image3, description: "Washers, Nuts & Bolts at Macdeo-Resources!", keywords: ["nut", "bolt"] },
    { id: "image4", image: image4, description: "10mm TMT Pushupati Iron Rods!", keywords: ["fastener"] },
    { id: "image5", image: image5, description: "Hexagonal stainless steel nuts!", keywords: ["nut"] },
    { id: "image6", image: image6, description: "Split lock washers available!", keywords: ["bolt"] },
    { id: "image8", image: image8, description: "Threaded shafts & bolts widely available!", keywords: ["fastener", "nut"] },

    { id: "image10", image: "/image10.jpg", description: "Angkur L Besi Beton HDG m19x30cm!", keywords: ["fastener", "nut"] },
    { id: "image11", image: "/image11.jpg", description: "Stud bolts and steel pipes!", keywords: ["fastener", "nut"] },
    { id: "image13", image: "/image13.jpg", description: "Hex socket countersunk screws!", keywords: ["fastener", "nut"] },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [flippedIds, setFlippedIds] = useState(new Set());

  const filteredImages = heroImages.filter((item) =>
    item.keywords.some((keyword) =>
      keyword.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleMouseEnter = (id) => {
    setFlippedIds((prev) => new Set(prev).add(id));
  };

  const handleMouseLeave = (id) => {
    setFlippedIds((prev) => {
      const newSet = new Set(prev);
      newSet.delete(id);
      return newSet;
    });
  };

  return (
    <section className="overflow-hidden relative bg-gradient-to-b from-gray-50 to-gray-100 pb-10">
      {/* Header Section */}
      <div className="p-6">
        <div className="flex gap-2 items-center">
          <h1 className="font-bold text-2xl tracking-wide">PRODUCTS</h1>
          <ArrowRight className="w-5 text-blue-600" />
        </div>

        <p className="text-gray-700 mt-1 text-lg font-semibold font-serif">
          Every Fastener You Need — All in One Place
        </p>

        {/* Search Bar */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex items-center gap-3 mt-4 bg-white shadow-lg rounded-full px-4 py-2 max-w-lg"
        >
          <Search className="text-gray-500" />
          <input
            type="text"
            placeholder="Search by keywords e.g. nut, bolt..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow outline-none"
          />
          <button className="px-4 py-1 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition font-semibold">
            Search
          </button>
        </form>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 mt-6">
        {filteredImages.length > 0 ? (
          filteredImages.map(({ id, image, description }) => (
            <div
              key={id}
              className="relative rounded-xl border border-green-300 shadow-green-300 bg-white p-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Flip Card */}
              <div
                className="flip-card w-full h-56"
                onMouseEnter={() => handleMouseEnter(id)}
                onMouseLeave={() => handleMouseLeave(id)}
              >
                <div className={`flip-card-inner ${flippedIds.has(id) ? "flipped" : ""}`}>
                  <div className="flip-card-front rounded-xl overflow-hidden relative w-full h-56">
                    <Image
                      src={image}
                      alt={description}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flip-card-back rounded-xl overflow-hidden relative w-full h-56 bg-gray-900">
                    <Image
                      src={image}
                      alt={description}
                      fill
                      className="object-cover opacity-70"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg px-3">
                      {description}
                    </div>
                  </div>
                </div>
              </div>

              {/* Under Card Description */}
              <p className="text-center mt-4 font-semibold text-gray-700 hover:text-blue-700 transition">
                {description}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center w-full col-span-full text-gray-500 text-lg mt-16">
            No products found
          </p>
        )}
      </div>

      {/* Flip Card CSS */}
      <style jsx>{`
        .flip-card {
          perspective: 1200px;
        }
        .flip-card-inner {
          width: 100%;
          height: 100%;
          position: relative;
          transition: transform 0.8s cubic-bezier(0.4, 0.2, 0.2, 1);
          transform-style: preserve-3d;
        }
        .flipped {
          transform: rotateY(180deg);
        }
        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}
