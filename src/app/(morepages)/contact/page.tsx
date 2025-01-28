import React from 'react'
import { GoDotFill } from "react-icons/go";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import ContactForm from './ContactForm';


export default function page() {
  return (
    <div className='w-full  grid px-3 lg:px-20 pb-2 py-10 md:py-20  gap-4'>
      <section className="w-full grid p-3 gap-4 bg-[#F6F6F6] my-10 rounded-xl shadow-sm">
        <div className="flex justify-between w-full items-center p-3">
          <div className="flex items-center gap-0 text-xl">
            <GoDotFill className="text-red-500" />
            <GoDotFill className="text-yellow-500" />
            <GoDotFill className="text-green-500" />
          </div>
          <p className="font-semibold"> New Message</p>
          <div> </div>
        </div>

        {/* <div className="flex w-full items-center gap-1 border-b p-2">
          <Label htmlFor='email'>Email:</Label>
          <Input
            type="text"
            className='border-none outline-none ring-0 shadow-none focus-visible:ring-0 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:shadow-primary'
            placeholder="Enter your email address"
          />
        </div>
        <div className="flex w-full items-center gap-1 border-b p-2">
          <Label htmlFor='email'>Name:</Label>
          <Input
            type="text"
            className='border-none outline-none ring-0 shadow-none focus-visible:ring-0 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:shadow-primary focus:ring-offset-primary'
            placeholder="Enter your name"
          />
        </div>
        <div className="flex w-full items-center gap-1 border-b p-2">
          <Label htmlFor='email'>Subject:</Label>
          <Input
            type="text"
            className='border-none outline-none ring-0 shadow-none focus-visible:ring-0 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:shadow-primary'
            placeholder="Enter subject"
          />
        </div>
        <div className="grid w-full gap-2 bg-[#F3F3F3] rounded-lg p-3">
          <Textarea placeholder="Write your message here." />
        </div>
        <Button size={`lg`}> Send</Button> */}

        <ContactForm />
      </section>

    </div>
  )
}
