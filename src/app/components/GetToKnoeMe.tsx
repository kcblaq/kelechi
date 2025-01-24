"use client";
import React from 'react';
import Image from 'next/image';
import Me from "../../../public/asset/abtme.png";
import Stack from "../../../public/asset/stack.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';

interface Props {
  title: string;
  image: StaticImageData;
  description: string;
  width?: number;
  height?: number;
  link?: string;
  
}
function AboutMe({title, image, description, link, width=150, height=200} : Props){
  const route = useRouter()

  const handleClick = () => {
    route.push(`${link}`)
  }
  return (
    <Card className="rounded-3xl shadow-xl p-8 flex flex-col items-center gap-3 cursor-pointer" onClick={handleClick}>
      <CardHeader>
        <CardTitle className="text-center">{title} </CardTitle>
      </CardHeader>
      {/* <CardContent> */}
        <CardDescription className='text-center'>
          {description}
     </CardDescription>
        <Image src={image} alt="Description of the image" width={width} height={height} />
  
    {/* </CardContent> */}
    </Card>
   
  )
}

export default function GetToKnoeMe() {
  return (
    <div className="w-full p-2 md:p-20 bg-[#454545] rounded-[50px] shadow-md flex flex-col gap-3 md:gap-5">
    {/* <h1 className="items-center text-white gap-1 font-semibold flex text-2xl md:text-3xl"> Get to  <span className="text-primary"> Know me  </span>  </h1> */}
    <h1 className="items-center gap-1 flex text-3xl font-semibold md:text-5xl mb-4 md:mb-8 text-white"> Get to <span className="text-primary"> know me  </span>  </h1>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 ">
      <AboutMe title='About Me' description='Who I am and what I do' image={Me} link='/about'/>
      <AboutMe link='/tech-stack' title='Tech Stack' description='An overview of the technologies and tools I work with.' image={Stack} width={647} height={417} />

    </div>
</div>
  )
}
