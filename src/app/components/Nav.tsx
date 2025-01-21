import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";
import Logo from "../../../public/asset/Logo.svg"
import { IoMenuSharp } from "react-icons/io5";


export default function Nav() {
  return (
  
      <nav className="hidden  w-full md:flex items-center justify-between">
        <div className="flex gap-3 md:gap-5 font-semibold items-center py-5">
          <Link href={`/`} className="transition-transform duration-300 hover:scale-110">
            <Image src={Logo} alt="Kelechi Logo" height={30} width={30} />
          </Link>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-transform duration-100 hover:scale-110">About</a>
          <a href="/about" className="text-gray-600 hover:text-gray-900 transition-transform duration-100 hover:scale-110">Projects</a>
          <a href="/projects" className="text-gray-600 hover:text-gray-900 transition-transform duration-100 hover:scale-110">Tech Stack</a>
          <a href="/contact" className="text-gray-600 hover:text-gray-900 transition-transform duration-100 hover:scale-110">Contact</a>
        </div>
        <div className="flex gap-3 md:gap-5 font-semibold items-center py-5">
          <Link href={`/`} className="text-gray-600 hover:text-gray-900 transition-transform duration-200 hover:scale-110">
            <FaWhatsapp />
          </Link>
          <Link href={`/`} className="text-gray-600 hover:text-gray-900 transition-transform duration-200 hover:scale-110 hover:shadow-sm">
            <CiLinkedin />
          </Link>
          <Link href={`/`} className="text-gray-600 hover:text-gray-900 transition-transform duration-200 hover:scale-110 hover:shadow-sm">
            <VscGithub />
          </Link>
          <Link href={`/`} className="text-gray-600 hover:text-gray-900 transition-transform duration-200 hover:scale-110 hover:shadow-sm">
            <FaXTwitter />
          </Link>
        </div>
      </nav>
  )
}



//  <Sheet>
//         <SheetTrigger className='flex md:hidden'>
//           <IoMenuSharp />
//         </SheetTrigger>
//         <SheetContent>
//           <SheetHeader>
//             {/* <SheetTitle>Are you absolutely sure?</SheetTitle> */}
//             <SheetDescription className="flex flex-col gap-3">
//               <Link href={`/`} className="transition-transform duration-300 hover:scale-110">
//                 <Image src={Logo} alt="Kelechi Logo" height={30} width={30} />
//               </Link>
//               <Link href={'/about'} className="hover:bg-primary hover:text-white w-full p-2 rounded-lg text-left"> About</Link>
//               <Link href={'/projects'} className="hover:bg-primary hover:text-white w-full p-2 rounded-lg text-left"> Projects</Link>
//               <Link href={'/teck-stacks'} className="hover:bg-primary hover:text-white w-full p-2 rounded-lg text-left"> Tech Stacks</Link>
//               <Link href={'/contacts'} className="hover:bg-primary hover:text-white w-full p-2 rounded-lg text-left"> Contacts</Link>

//             </SheetDescription>
//           </SheetHeader>
//         </SheetContent>
//       </Sheet>