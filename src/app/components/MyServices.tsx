/* eslint-disable @next/next/no-img-element */


import React from 'react';
import ServiceIcon from "../../../public/asset/service.svg"
import Image, { StaticImageData } from "next/image"
import BG from "../../../public/asset/service/frontendbg.svg";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import BE from "../../../public/asset/service/backend.png";
import SA from "../../../public/asset/service/architecture.svg";



interface ServiceCardProps {
    title: string;
    icon: StaticImageData;
}

const ServiceCard = ({title, icon}: ServiceCardProps) => {
    return (
        <div className='relative overflow-hidden group shadow-primary/50 transition-all duration-300 backdrop-blur-lg grid rounded-[50px] rounded-bl-[40px] rounded-br-[40px] shadow-md bg-[#4C4CAC] bg-opacity-70 mb-1 mr-1 cursor-pointer'>

            <div className=" transition-all p-3 md:p-5 group-hover:bg-primary border-b duration-500">
                <h3 className='text-2xl text-white text-center p-3 font-semibold group-hover:border-0'>{title} </h3>


            </div>
            <div className="relative gap-3 pt-10 overflow-hidden group-hover:bg-primary"
            >

                <Image
                    src={icon}
                    alt="service image"
                    className=" mt-4 w-full transition-transform transform duration-700 group-hover:scale-105"
                />
                {/* <div className=" mt-4 w-full transition-transform transform duration-700 group-hover:scale-105">
                    {icon}
                </div> */}
                <div className="absolute p-6 pl-10 pt-10 -right-4 border-none bottom-0 ">
                    <div className="rounded-full p-8 bg-white  shadow-lg flex justify-end  group-hover:bg-primary cursor-pointer duration-500">

                        <BsArrowUpRightCircleFill className="text-primary group-hover:text-white text-3xl duration-500" />
                    </div>
                </div>
            </div>

        </div>
    );
};

const FrontEndIcon = () => {
    return (
        <Image
            src={BG}
            fill
            alt="service image"
            className=" mt-4 w-full transition-transform transform duration-700 group-hover:scale-105"
        />
    );
}

export default function MyServices() {
    return (
        <div className="w-full p-2 md:p-20 bg-[#454545]  mt-1 md:-mt-24 rounded-3xl shadow-md flex flex-col gap-3 md:gap-5">
            <h1 className="items-center gap-1 flex text-3xl font-semibold md:text-5xl mb-4 md:mb-8"> My <span className="text-primary"> Services  </span> <sup> <Image src={ServiceIcon} alt="icon image" height={27} width={27} /> </sup> </h1>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
                <ServiceCard title='Front-end Development' icon={BE}  />
                <ServiceCard title='Back-end Development' icon={SA} />
                <ServiceCard title='Software Architecture' icon={BG} />


            </div>
        </div>
    )
}
