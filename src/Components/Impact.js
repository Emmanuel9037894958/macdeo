"use client";

import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { MessageSquareIcon } from "lucide-react";

function Impact() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="pt-6 bg-gray-700 h-[500px]">
      <h1 className="text-center text-2xl font-bold text-white mb-4">
        News & Articles
      </h1>

      <div className="embla relative" ref={emblaRef}>
        <div className="embla__container flex space-x-4">
          {/* Slide 1 */}
          <div className="embla__slide relative w-80">
            <h1 className="absolute top-[310px] left-14 font-bold text-white text-2xl xl:left-[630px] z-10">
              CEO Macdeo-Resources
            </h1>
            <div className="relative h-[370px] w-full">
              <Image
                src="/ceoimage.jpg"
                alt="CEO Macdeo-Resources"
                fill
                className="object-cover rounded"
                priority
              />
            </div>
          </div>

          {/* Slide 2 */}
          <div className="embla__slide w-80">
            <a href="https://abcnews.go.com/Business/rising-oil-prices-after-iran-strike-increase-us/story?id=114394795" target="_blank" rel="noopener noreferrer">
              <div className="relative h-[370px] w-full">
                <Image
                  src="/tunibu1.jpeg"
                  alt="News article image"
                  fill
                  className="object-cover rounded"
                  priority
                />
              </div>
            </a>
          </div>

          {/* Slide 3 */}
          <div className="embla__slide w-80">
            <div className="relative h-[370px] w-full">
              <Image
                src="/nut1.jpg"
                alt="Nut image"
                fill
                className="object-cover rounded"
                priority
              />
            </div>
          </div>

          {/* Slide 4 */}
          <div className="embla__slide w-80">
            <div className="relative h-[370px] w-full">
              <Image
                src="/newspapper.jpeg"
                alt="Newspaper"
                fill
                className="object-cover rounded"
                priority
              />
            </div>
          </div>

          {/* Slide 5 */}
          <div className="embla__slide w-80">
            <div className="relative h-[370px] w-full">
              <Image
                src="/tinubu2.jpeg"
                alt="Tinubu"
                fill
                className="object-cover rounded"
                priority
              />
            </div>
          </div>

          {/* Slide 6 */}
          <div className="embla__slide w-80">
            <div className="relative h-[370px] w-full">
              <Image
                src="/logo.jpg"
                alt="Logo"
                fill
                className="object-cover rounded"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6 pb-4">
        <a
          href="https://punchng.com/topics/top-stories/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn bg-orange-500 text-white flex gap-3 items-center px-6 py-3 rounded-lg font-bold">
            🕓 January 12, 2025
            <MessageSquareIcon />
            <span>123</span>
          </button>
        </a>
      </div>
    </div>
  );
}

export default Impact;
