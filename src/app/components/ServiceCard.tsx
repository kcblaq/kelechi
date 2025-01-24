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
      Hey
    </div>
  );
}