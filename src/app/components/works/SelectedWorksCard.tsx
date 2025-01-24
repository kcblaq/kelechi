import React from 'react';

import { Card, CardContent, CardTitle } from "@/components/ui/card"
import BG from "../../../../public/asset/works/zummit.png";
import SHORTCHASE from "../../../../public/asset/works/shortchase.png";
import { LuArrowUpRight } from "react-icons/lu";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"




interface Props {
    title: string;
    image: string;
    description: React.ReactNode;
    link: string;
}


interface CarouselItemProps {
    title: string;
    subtitle: React.ReactNode;
    link?: string;
  }

export default function SelectedWorksCard({ title, image, description, link }: Props) {
    return (
        <div className=" relative p-4 md:p-5 group h-[400px] md:h-[500px] rounded-lg shadow-xl  transition-all duration-500 ease-in-out bg-gray-600 bg-opacity-50"
            style={{
                // backgroundImage: `url(${SHORTCHASE.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            {/* <CardTitle >  </CardTitle> */}
            {/* <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-4xl font-semibold"></span>
            </CardContent> */}
            <div className=" flex flex-col justify-between h-full">
                <div className="flex justify-end">
                    <span className="rounded-full text-primary p-3 bg-white border-primary border cursor-pointer
                    group-hover:bg-primary group-hover:text-white transition-colors duration-300 ease-in-out
                    ">
                        <LuArrowUpRight className=" text-4xl" />
                    </span>
                </div>
                {/* <div className="flex justify-start text-2xl font-semibold overflow-hidden whitespace-nowrap text-ellipsis">
                    <a href={link} className="text-white"> Global Reformation</a>
                </div> */}
                <div className="overflow-hidden">

                    <h1 className=" text-lg md:text-xl text-white font-bold mb-5 rounded-lg"> Global Reformation</h1>
                </div>

                <div className="absolute bottom-5 left-5 right-5
                    opacity-0 group-hover:opacity-100 
                    transform translate-y-2 group-hover:translate-y-0
                    transition-all duration-300 ease-in-out 
                    bg-gray-500/80 p-4 rounded-lg">
                    <a href={link} className="text-white text-2xl font-semibold">
                        Sports Betting
                    </a>
                </div>
            </div>

        </div>

    )
}


export  function ReusableCarouselItem({
    title, 
    subtitle, 
    link = "/"
  }: CarouselItemProps) {
    return (
    //   <CarouselItem 
    //     className="basis-full group md:basis-1/2 lg:basis-1/2 h-[500px] ml-0 md:ml-6 rounded-lg flex flex-col justify-between" 
    //     style={{
    //       backgroundImage: `url(${backgroundImage})`,
    //       backgroundSize: "cover",
    //       backgroundPosition: "center",
    //       backgroundRepeat: "no-repeat"
    //     }}
    //   >
        <div className="flex flex-col justify-between h-full">
          <div className="flex justify-end p-4">
            <span className="rounded-full text-primary p-3 bg-white border-primary border cursor-pointer
              group-hover:bg-primary group-hover:text-white transition-colors duration-300 ease-in-out">
              <LuArrowUpRight className="text-4xl" />
            </span>
          </div>
          
          <div className="overflow-hidden p-4 mb-7">
            <h1 className="text-2xl md:text-4xl shadow-2xl text-white font-bold mb-5 rounded-lg">
              {title}
            </h1>
          </div>
          
          <div className="absolute bottom-5 left-5 right-5
            opacity-0 group-hover:opacity-100 
            transform translate-y-2 group-hover:translate-y-0
            transition-all duration-300 ease-in-out 
            bg-gray-500/90 p-4 rounded-lg">
            {subtitle}
          </div>
        </div>
    //   </CarouselItem>
    );
  }