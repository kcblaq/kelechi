import React from 'react';
import { WiStars } from "react-icons/wi";
import { FaRegSmileWink } from "react-icons/fa";
import { CiFaceSmile } from "react-icons/ci";




export default function ContactTitle() {
  return (
    <div className="flex flex-col gap-3">
            <h1 className="text-3xl lg:text-7xl text-justify w-full font-bold flex items-center gap-2 whitespace-nowrap flex-wrap"> 
                Get in touch <sup className='text-primary -rotate-12 opacity-50 flex items-center text-lg md:text-4xl'> <CiFaceSmile/> </sup>
                </h1>
                
        </div>
  )
}
