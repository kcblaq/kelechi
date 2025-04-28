import React from 'react'
import CustomButton from './CustomButton'
import Image from "next/image"
import Potrait from "../../../public/asset/Portrait.png";
import { MdOutlineWavingHand } from 'react-icons/md';

export default function Hero() {
  return (
    <div className="grid items-center justify-between grid-cols-1 md:grid-cols-3 h-full w-full">
    <div className="flex flex-col col-span-2 w-full gap-3 ">
      <h1 className="text-4xl space-y-2 font-bold flex items-center gap-2"><span className="text-yellow-500"> <MdOutlineWavingHand /></span> Hello there,</h1>
      <h1 className="text-4xl space-y-2 font-bold flex items-center gap-2">I&apos;m <span className="text-primary">Kelechi Ugwu</span> </h1>
      <p className="pt-2 ">
        A full-stack software engineer helping businesses turn their visions into a digital reality. I specialize in designing and building modern websites and web-based apps.
      </p>
      <div className="flex gap-3 py-2 w-full flex-col md:flex-row md:justify-start mt-0 md:mt-10 justify-between">
      <a href={`https://drive.google.com/file/d/1qE3QRMuFfIVjbx2CkEZ77wPlR-IUve2q/view?usp=sharing`} target="_blank">
      
        <CustomButton size="large">See my resume</CustomButton>
      </a>
      <a href={`/contact`}>

        <CustomButton size="large" variant="outline">Get in touch</CustomButton>
      </a>
      </div>
    </div>
    <div className="col-span-1 w-full hidden md:flex">
      <Image src={Potrait} width={300} height={500} alt="Kelechi image" />
    </div>
  </div>
  )
}
