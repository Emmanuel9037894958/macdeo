// import React from 'react'
"use client";

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import image1 from '../assets/images (37).jpeg'
import image2 from '../assets/download (7).jpeg'
import image3 from '../assets/download (5).jpeg'
import image4 from '../assets/download (4).jpeg'
import image5 from '../assets/download (3).jpeg'
import image6 from '../assets/myimage.png'
import image7 from '../assets/4363757a-f3c1-422c-85e6-2fa047c46f1c.jpg'

function SecondRange() {

   const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])
    
  return (
    <div className="embla" ref={emblaRef}>
    <div className="embla__container mt-6">
     <div className="embla__slide relative">
        <img src={image1.src} alt="Products"  className='w-full object-cover h-72 brightness-50'/>
     </div>
     <div className="embla__slide relative">
        <img src={image3.src} alt="Products"  className='w-full object-cover h-72'/>
     </div>
     <div className="embla__slide relative">
        <img src={image2.src} alt="Products"  className='w-full object-cover h-72 '/>
     </div>
     <div className="embla__slide relative">
        <img src={image4.src} alt="Products"  className='w-full object-cover h-72'/>
     </div>
     <div className="embla__slide relative">
        <img src={image6.src} alt="Products"  className='w-full object-cover h-72 brightness-50'/>
     </div>
     <div className="embla__slide relative">
        <img src={image5.src} alt="Products"  className='w-full object-cover h-72 brightness-50'/>
     </div>
     <div className="embla__slide relative">
        <img src={image7.src} alt="Products"  className='w-full object-cover h-72'/>
     </div>
    </div>
    </div>
  )
}

export default SecondRange