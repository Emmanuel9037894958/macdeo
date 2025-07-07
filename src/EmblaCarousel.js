"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import image1 from "./assets/4f18c93a-a764-4bd8-8d45-c4f51eac07dc.jpg";  
import image2 from "./assets/45026ed8-ca6d-4b83-9a3a-aaf90a9d7343.jpg";  
import image3 from "./assets/images (30).jpeg";  
import image4 from "./assets/5fe16a24-1d28-4bda-850d-2a1d2e169cc3.jpg";  
import image5 from "./assets/images (19).jpeg";  
import image6 from "./assets/images (29).jpeg";  

import Button from "./Components/Button"; ``

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const slides = [  
    { image: image2, title: "MACDEO-RESOURCES", description: "One stop Solution for Threaded Rods" },  
    { image: image4, title: "MACDEO-RESOURCES", description: "The strength you need, the quality you deserve. Nutty about quality, fastening solutions" },  
    { image: image1, title: "MACDEO-RESOURCES", description: "We Provide High-Quality Products." },  
    { image: image3, title: "MACDEO-RESOURCES", description: "Tightening the standards of quality, reliability, and performance, with every nut and bolt that leaves our facility." },  
    { image: image5, title: "MACDEO-RESOURCES", description: "The foundation of strength, reliability, and performance, in every nut, bolt, and fastening solution, for a stronger, safer, and more secure world." },  
    { image: image6, title: "MACDEO-RESOURCES", description: "Where every thread counts, and every bolt matters, in the pursuit of excellence and precision." },  
  ];

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {slides.map((item, index) => (
          <div className="embla__slide relative" key={index}>
            <div className="relative w-full h-[400px]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover brightness-50"
                priority={index === 0}
              />
              <div className="absolute z-50 inset-0 text-white pt-40 pl-5">
                <p className="font-bold text-3xl">{item.title}</p>
                <p>{item.description}</p>
                <Button />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
