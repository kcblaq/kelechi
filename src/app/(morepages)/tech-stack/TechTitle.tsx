import React from 'react';
import { SiPolestar } from "react-icons/si";


export default function TechTitle() {
  return (
   <div className="flex flex-col gap-3">
           <h1 className="text-3xl lg:text-7xl text-justify w-full font-bold flex items-center gap-2 whitespace-nowrap flex-wrap"> 
               Tech Stack <sup className='text-primary -rotate-12 opacity-50 flex items-center text-lg md:text-4xl'> <SiPolestar/> </sup>
               </h1>
               <p className="text-gray-500 text-lg lg:text-2xl">
               An overview of the technologies and tools I work with.
               </p>
       </div>
  )
}
