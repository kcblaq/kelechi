import React from 'react';
import { WiStars } from "react-icons/wi";


export default function ProjectTitle() {
  return (
    <div className="flex flex-col gap-3">
        <h1 className="text-3xl lg:text-7xl text-justify w-full font-bold flex items-center gap-2 whitespace-nowrap flex-wrap"> 
            Projects <sup className='text-primary -rotate-12 opacity-50 flex items-center text-lg md:text-4xl'> <WiStars/> </sup>
            </h1>
            <p className="text-gray-500 text-lg lg:text-2xl">
            Projects and ideas I’ve worked on
            </p>
    </div>
  )
}
