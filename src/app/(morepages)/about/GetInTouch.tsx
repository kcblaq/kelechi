"use client"
import React from 'react';
import { Button } from '@/components/ui/button';
import { CiLocationArrow1 } from 'react-icons/ci';

export default function GetInTouch() {
  return (
    <Button size={`lg`} className="flex w-full md:w-auto mt-3 md:mt-1 items-center gap-2 bg-primary text-white hover:border border-primary hover:bg-white hover:text-primary"
    onClick={()=> window.location.href = "/contact"}
    >
        <CiLocationArrow1 /> Let&apos;s work together
    </Button>
  )
}
