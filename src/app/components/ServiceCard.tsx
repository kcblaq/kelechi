import React from 'react';
import FE from "../../../public/asset/fe.png";
import Image, { StaticImageData } from 'next/image';
import CustomButton from './CustomButton';
import { BsArrowUpRightCircleFill } from "react-icons/bs";

interface Props {
    title: string,
    image: StaticImageData
}

export default function ServiceCard({ title, image }: Props) {
    console.log("@", FE.src)
    return (
        <div className='flex flex-col gap-3 rounded-2xl border drop-shadow-lg border-gray-400' >
            <h2 className="p-3 text-white text-semibold text-3xl"> {title} </h2>
            <hr  className='order drop-shadow-lg border-gray-400'/>
            {/* <div  style={{
        backgroundImage: `url(${FE.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    }}>
Hello
        </div> */}
            <div className='flex justify-center w-full p-3'>
                <Image src={image} alt="" width={300} height={300} />
            </div>
            <div className="p-3 w-full ">
                <CustomButton size='large' className='gap-2 w-full'>
                    See more <BsArrowUpRightCircleFill />
                </CustomButton>
            </div>
        </div>
    )
}




interface ServiceCardProps {
  title: string;
  icon: string;
  onClick?: () => void;
}

export function CardforService({ title, icon, onClick }: ServiceCardProps) {
  return (
    <div 
      className="relative bg-white rounded-3xl p-6 cursor-pointer transition-transform hover:scale-105"
      onClick={onClick}
    >
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="w-full aspect-square mb-4">
        <img 
          src={icon} 
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute bottom-4 right-4 bg-[#1a1b26] rounded-full p-2 transition-transform hover:scale-110">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
      </div>
    </div>
  );
}