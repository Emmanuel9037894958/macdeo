"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

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
    { id: "image1", image: image1, description: " 20mm Threaded Rod-Precision, Every fastener you need right here on us!", keywords: ["fastener", "nut", "bolt"] },
    { id: "image2", image: image2, description: " Hex bolts and nuts all available,Every fastener you need right here on us!", keywords: ["fastener", "bolt"] },
    { id: "image3", image: image3, description: " WASHERS ,NUT AND BOLT all available ,Every fastener you need right here on Macdeo-Resources", keywords: ["nut", "bolt"] },
    { id: "image4", image: image4, description: "  10mm TMT Pushupati Iron Rods,Every fastener you need right here on us!", keywords: ["fastener"] },
    { id: "image5", image: image5, description: " Close-up of hexagonal stainless steel nuts,Every fastener you need right here on Macdeo-Resources. ", keywords: ["nut"] },
    { id: "image6", image: image6, description: " Split lock washers,Every fastener you need right here rely on us!", keywords: ["bolt"] },
    { id: "image8", image: image8, description: "Threaded shaft and bolt all available at Macdeo-Resources ,Every fastener you need right here  on us!", keywords: ["fastener", "nut"] },

    { id: "image10", image: "/image10.jpg", description: " Angkur L Besi Beton HDG m19x30cm, Every fastener you need right now Macdeo-Resources get you covered", keywords: ["fastener", "nut"] },
    { id: "image11", image: "/image11.jpg", description: " Stud bolts and steel pipes ,Every fastener you need right here rely on us!", keywords: ["fastener", "nut"] },
    { id: "image13", image: "/image13.jpg", description: " Hex socket countersunk screws,Every fastener you need right here on us!", keywords: ["fastener", "nut"] },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [flippedIds, setFlippedIds] = useState(new Set());

  const filteredImages = heroImages.filter((item) =>
    item.keywords.some((keyword) =>
      keyword.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  function handleMouseEnter(id) {
    setFlippedIds((prev) => new Set(prev).add(id));
  }

  function handleMouseLeave(id) {
    setFlippedIds((prev) => {
      const newSet = new Set(prev);
      newSet.delete(id);
      return newSet;
    });
  }

  return (
    <section className="overflow-hidden relative">
      <div className="bg-gray-100 p-5">
        <div className="flex gap-2 items-center">
          <h1 className="pl-5 font-bold text-xl">PRODUCTS</h1>
          <ArrowRight className="w-4" />
        </div>
        <p className="pl-5 pb-3 pt-3 font-bold font-serif">
          Every Fastener You Need Right Here
        </p>
        <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2 pl-3 bg-white max-w-md rounded-full shadow-md">
          <input
            type="text"
            placeholder="Please enter keyword"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="rounded-l-full pl-4 border border-gray-400 flex-grow h-10 outline-none border-none"
          />
          <button
            type="submit"
            className="rounded-r-full bg-blue-500 text-white px-4 hover:bg-green-600 h-10 font-semibold"
          >
            Search
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
        {filteredImages.length > 0 ? (
          filteredImages.map(({ id, image, description }) => (
            <div
              key={id}
              className="cursor-pointer rounded-lg border border-gray-300 shadow-md p-2 transition-transform duration-300 ease-in-out hover:shadow-xl hover:scale-[1.03]"
            >
              <div
                className="flip-card w-full h-48"
                onMouseEnter={() => handleMouseEnter(id)}
                onMouseLeave={() => handleMouseLeave(id)}
              >
                <div className={`flip-card-inner ${flippedIds.has(id) ? "flipped" : ""}`}>
                  <div className="flip-card-front rounded-lg overflow-hidden relative w-full h-48">
                    <Image
                      src={image}
                      alt={description}
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flip-card-back rounded-lg overflow-hidden relative w-full h-48">
                    <Image
                      src={image}
                      alt={description}
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
              </div>
              <p className="text-center mt-3 font-semibold">{description}</p>
            </div>
          ))
        ) : (
          <p className="text-center w-full col-span-full mt-10 text-gray-500">
            No products found
          </p>
        )}
      </div>

      {/* Flip card CSS */}
      <style jsx>{`
        .flip-card {
          perspective: 1000px;
          width: 100%;
          height: 12rem;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.6s ease-in-out;
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
          border-radius: 0.5rem;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}
