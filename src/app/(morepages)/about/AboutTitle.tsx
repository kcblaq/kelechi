import React from 'react';
import { FaStar } from "react-icons/fa";
import { IoStarOutline } from "react-icons/io5";



export default function AboutTitle() {
  return (
    <div className="text-justify">
        <h1 className="text-3xl lg:text-7xl text-justify w-full font-bold flex items-center gap-2 whitespace-nowrap flex-wrap">
        Welcome to my <sup className='text-primary flex items-center text-lg md:text-2xl'> <IoStarOutline/> </sup> little <sup className='text-lg md:text-2xl text-primary flex items-center'> <IoStarOutline/> </sup> 
        </h1>
        <h1 className='text-3xl lg:text-7xl text-justify w-full font-bold flex items-center gap-2'>corner of the internet.</h1>
    </div>
  )
}
