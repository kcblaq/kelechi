import React from 'react'
import {
  Card
} from "@/components/ui/card"
import Image, { StaticImageData } from "next/image";
import { GoLinkExternal } from "react-icons/go";
import { generalTechData, frontendTechData, backendTechData } from './data';


export interface Props {
  name: string;
  icon: StaticImageData | any;
  link?: string;
  category: string
}



function StackCard({ name, icon, category }: Props) {
  return (
    <Card className="bg-[#EBEBEB] relative shadow-sm rounded-3xl p-2 w-full h-[86px] md:w-[330px] md:h-[300px] flex md:flex-col ">
      <span className='text-primary absolute top-3 hidden md:flex right-4 transition-all cursor-pointer'> < GoLinkExternal /> </span>
      <div className="flex items-center justify-between w-full ">
        <div className='flex items-center gap-2'>
          <Image src={icon} alt="Figma image" height={60} width={60} />
          <h3 className="text-base text-[#181818] font-semibold">
            {name}
          </h3>
        </div>
        <div className="bg-white p-2 rounded-3xl text-xs text-[#808080]">
          {category}
        </div>
      </div>

    </Card>
  )

}
function StackCardLg({ name, icon, link, category }: Props) {
  return (
    <Card className="bg-[#EBEBEB] group relative shadow-sm rounded-3xl p-4 gap-20 w-[330px] h-[300px] flex flex-col justify-end ">
      <a href={link} target='_blank' className='text-primary absolute top-4 rounded-full p-2 bg-gray-100  hidden group-hover:flex right-4 transition-all  duration-300 ease-in-out cursor-pointer' > < GoLinkExternal /> </a>
      <div className='flex items-center justify-center'>

        <Image src={icon} alt="Figma " width={114} height={114} />
      </div>
      <div className="flex items-center justify-between w-full">
        <h3 className=""> {name} </h3>
        <div className="bg-white p-2 rounded-3xl text-xs text-[#808080]">
          {category}
        </div>

      </div>
    </Card>
  )
}

function DisplayFrame({ name, data }: { name: string, data: Props[] }) {
  return (
    <div className={`grid gap-2 lg:gap-4`}>
      <h1 className="text-[#181818] text-2xl md:text-5xl font-semibold">{name} </h1>
      <div className=' grid-cols-1 gap-8 hidden md:grid md:grid-cols-2 lg:grid-cols-3'>

        {
          data.map(({ name, icon, link, category }) => (
            <StackCardLg name={name} icon={icon} link={link} category={category} key={name} />
          ))
        }
      </div>
      <div className='grid grid-cols-1  md:hidden w-full gap-3'>
        {
          data.map(({ name, icon, link, category }: Props) => (
            <StackCard name={name} icon={icon} link={link} category={category} key={name} />
          ))
        }
      </div>

    </div>
  )
}

export default function page() {
  return (
    <div className='w-full  grid px-3 lg:px-20 pb-2 py-10 mb:py-20 mb-20  gap-6 md:gap-12'>
      <DisplayFrame name={'General Tools'} data={generalTechData} />
      <DisplayFrame name={'Frontend Tools'} data={frontendTechData} />
      <DisplayFrame name={'Backend Tools'} data={backendTechData} />
    </div>
  )
}
