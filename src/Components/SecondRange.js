"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image"; // ✅ Import Next.js Image
import image1 from "../assets/images (37).jpeg";
import image2 from "../assets/download (7).jpeg";
import image3 from "../assets/download (5).jpeg";
import image4 from "../assets/download (4).jpeg";
import image5 from "../assets/download (3).jpeg";
import image6 from "../assets/myimage.png";
import image7 from "../assets/4363757a-f3c1-422c-85e6-2fa047c46f1c.jpg";

function SecondRange() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container mt-6">
        {[image1, image3, image2, image4, image6, image5, image7].map((img, index) => (
          <div key={index} className="embla__slide relative">
            <Image
              src={img}
              alt={`Product ${index + 1}`}
              className="object-cover brightness-50"
              style={{ width: "100%", height: "18rem" }} // 18rem = h-72
              width={800}
              height={288} // approx height for h-72
              priority={index === 0} // load first image eagerly
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SecondRange;
