"use client";
import React from 'react'
import Image from 'next/image'; 
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { MessageSquareIcon } from 'lucide-react';
import Link from 'next/link';


function Impact() {
      const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
    
  return (
    <div className='pt-6 bg-gray-700  h-500]'>
         <h1 className="text-center text-2xl font-bold text-white ">News & Articles</h1>
                <div className="embla relative " ref={emblaRef}>
                  <div className="embla__container">
                    <div className="embla__slide">
                        <h1 className='absolute pt-[310] font-bold pl-14 text-white text-2xl xl:pl-[630]'>CEO Macdeo-Resources</h1>
                      <Image
                        src='/ceoimage.jpg'
                        width ={100}
                        height ={100}
                        alt=""
                        className="h-[370px] w-80 mx-auto pt-3 box object-cover"
                      />
                    </div>
                    <div className="embla__slide">
                      <a href="https://abcnews.go.com/Business/rising-oil-prices-after-iran-strike-increase-us/story?id=114394795">
                        <Image
                          src='/tunibu1.jpeg'
                          alt=""
                           width ={100}
                         height ={100}
                          className="h-[370px] w-80 mx-auto pt-3 box object-cover"
                        />
                      </a>
                    </div>
                    <div className="embla__slide">
                      <Image
                        src='/nut1.jpg'
                         width ={100}
                        height ={100}
                        alt=""
                        className="h-[370px] w-90 mx-auto pt-3 box object-cover"
                      />
                    </div>
                    <div className="embla__slide">
                      <Image
                        src='/newspapper.jpeg'
                        width={100}
                        height={100}
                        alt=""
                        className="h-[370px] w-90 mx-auto pt-3 box object-cover"
                      />
                    </div>
                    <div className="embla__slide">
                      <Image
                        src='/tinubu2.jpeg'
                        width={100}
                        height={100}
                        alt=""
                        className="h-[370px] w-80 mx-auto pt-3 box object-cover"
                      />
                    </div>
                    <div className="embla__slide">
                      <Image
                        src='/logo.jpg'
                        width={100}
                        height={100}
                        alt=""
                        className="h-[370px] w-80 mx-auto pt-3 box object-cover"
                      />
                    </div>
                  </div>
                </div>
                  <div className="flex justify-center pb-">

                    	<a href="https://punchng.com/topics/top-stories/">

                    <button className="btn bg-orange-500 text-white mx-auto mt-3 flex gap-3 h-13 pt-3 rounded-lg w-63 pl-3 font-bold">
                      🕓 January 12, 2025
                      <MessageSquareIcon />
                      <p>123</p>
                    </button>
                      </a>
                
                  
                  </div>
    </div>
  )
}

export default Impact