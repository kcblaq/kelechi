import React from 'react'
import { Button } from '@/components/ui/button';
import { CiLocationArrow1 } from "react-icons/ci";

function WorkTogether() {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-center my-4 md:my-8 ">
    <div className=" gap-3 flex flex-col">
        <h2 className=" text-2xl md:text-5xl font-bold">
            Let&apos;s work together
        </h2>
        <p className=" text-sm max-w-md">
        Want to discuss an opportunity to create something great? I’m ready when you are.
        </p>
    </div>
    <Button size={`lg`} className="flex w-full md:w-auto mt-3 md:mt-1 items-center gap-2 bg-primary text-white hover:border border-primary hover:bg-white hover:text-primary">
        <CiLocationArrow1 /> Get in touch
    </Button>
</div>
  )
}

export default WorkTogether