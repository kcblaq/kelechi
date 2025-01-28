import React from 'react';
import { LuArrowUpRight } from "react-icons/lu";


interface CarouselItemProps {
  title: string;
  subtitle: React.ReactNode;
  link?: string;
}

export function ReusableCarouselItem({
  title,
  subtitle,
  link = "/"
}: CarouselItemProps) {
  return (
<>
<main className=" w-fit absolute break-words md:hidden bottom-0 left-0.5 right-0.5 m-1 bg-gray-600 p-2 rounded-lg bg-opacity-90">
   <div className=''>
     <h2 className="text-2xl md:text-4xl shadow-lg p-3 text-white font-bold  rounded-lg group-hover:hidden">
       {title}
     </h2>
   </div>
   <p>{subtitle} </p>
  </main>
    <div className="hidden md:flex  flex-col justify-between h-full">
      <div className="flex justify-end md:p-4">
        <span className="rounded-full text-primary p-3 bg-white border-primary border cursor-pointer
                group-hover:bg-primary group-hover:text-white transition-colors duration-300 ease-in-out">
          <LuArrowUpRight className="text-4xl" />
        </span>
      </div>

      <div className="overflow-hidden">
        <h1 className="text-2xl md:text-4xl shadow-lg p-3 text-white font-bold mb-20  rounded-lg group-hover:hidden">
          {title}
        </h1>
      </div>


      <div className="absolute bottom-2 left-3 right-3
              invisible group-hover:visible
              opacity-0 group-hover:opacity-100 
              transform translate-y-2 group-hover:translate-y-0
              transition-all duration-300 ease-in-out 
              bg-gray-500/90 p-4 rounded-lg
              z-10 // Ensure it's above other elements
            ">
        <h2 className="text-2xl md:text-4xl text-[#E7DBF8] font-bold">{title} </h2>
        <div>
          {subtitle}
        </div>
      </div>
    </div>
</>
  );
}