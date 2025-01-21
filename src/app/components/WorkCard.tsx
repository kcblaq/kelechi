import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CiLocationArrow1 } from "react-icons/ci";


interface Props {
    icon: React.ReactNode;
    title: string;
    description: string;
}
export default function WorkCard({icon, description, title}: Props) {
  return (
        <Card className='w-full bg-[#F6F6F6] shadow-md'>
          <CardHeader>
            <CardTitle> {icon}  </CardTitle>
          </CardHeader>
          <CardHeader>
            <CardTitle> {title}  </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              {description}
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Link href={`#`} className="text-primary p-2 rounded-lg flex items-center justify-end gap-2 hover:bg-primary hover:text-white">Visit site  <CiLocationArrow1 /></Link>
          </CardFooter>
        </Card>
  )
}
