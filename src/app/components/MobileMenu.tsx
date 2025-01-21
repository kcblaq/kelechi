import React from 'react'
import Link from "next/link"

export default function MobileMenu() {
  return (
    <div
    className={`flex md:hidden bottom-0 fixed shadow-lg justify-evenly items-center p-3 gap-2 border bg-gray-600 bg-opacity-50 rounded-2xl h-20 mx-4 left-0 right-0 max-w-[calc(100%-2rem)]`}
  >
    <div className="flex justify-evenly w-full">
      <Link href={`/`}>Home</Link>
      <Link href={`/`}>Home</Link>
      <Link href={`/`}>Home</Link>
      <Link href={`/`}>Home</Link>
    </div>
  </div>
  
  )
}
