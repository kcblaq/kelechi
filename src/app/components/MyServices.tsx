/* eslint-disable @next/next/no-img-element */


import React from 'react';
import ServiceIcon from "../../../public/asset/service.svg"
import Image from "next/image"
import BG from "../../../public/asset/fenoclick.png";
import { BsArrowUpRightCircleFill } from "react-icons/bs";


interface ServiceCardProps {
    title: string;
    icon: string;
    onClick?: () => void;
}

const ServiceCard = () => {
    return (
    //   <div className="relative w-full h-64 bg-cover bg-center bg-no-repeat overflow-hidden rounded-lg shadow-md">
    //     <div className="absolute top-4 right-4 cursor-pointer">
    //       <BsArrowUpRightCircleFill className="text-white text-3xl cursor-pointer " />
    //     </div>
    //     <div className="absolute inset-0 bg-black/50 p-6 flex flex-col justify-end">
    //       <h3 className="text-white text-xl font-semibold">Service Title</h3>
    //       <p className="text-white/80 mt-2">Service description goes here</p>
    //     </div>
    //   </div>
    <div className='relative h-64 w-80 shadow-lg rounded-lg mt-10 bg-gray-400 p-6 pt-16'>
        <h1 className='text-primary font-bold text-3xl'> Frontend Engineering</h1>
        <div className="flex items-end justify-end w-full mt-14 hover:text-white text-5xl cursor-pointer hover:transition-transform translate ">
        <BsArrowUpRightCircleFill />
        </div>
    <div className='absolute rounded-full h-20 w-20 shadow-md left-1/2 -translate-x-1/2 -top-10 bg-gray-400'>
    </div>
</div>
    );
  };


export default function MyServices() {
    return (
        <div className="w-full p-2 md:p-20 bg-[#454545] -mt-24 rounded-3xl shadow-md bg-opacity-90 flex flex-col gap-3 md:gap-5">
            <h1 className="items-center gap-1 flex text-2xl md:text-3xl"> My <span className="text-primary"> Services  </span> <sup> <Image src={ServiceIcon} alt="icon image" height={10} width={10} /> </sup> </h1>
            <div className="grid grid-cols-1 md:grid-cols-3">
                <ServiceCard />

            </div>
        </div>
    )
}
