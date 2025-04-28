import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";
import Logo from "../../../public/asset/Logo.svg"
import { IoMenuSharp } from "react-icons/io5";


export default function Nav() {
  const whatsappLink = "https://wa.me/2348032454303";
  return (
  
      <nav className="hidden  w-full md:flex items-center justify-between">
        <div className="flex gap-3 md:gap-5 font-semibold items-center py-5">
          <Link href={`/`} className="transition-transform duration-300 hover:scale-110">
            <Image src={Logo} alt="Kelechi Logo" height={30} width={30} />
          </Link>
          <a href="/about" className="text-gray-600 hover:text-gray-900 transition-transform duration-100 hover:scale-110">About</a>
          <a href="/projects" className="text-gray-600 hover:text-gray-900 transition-transform duration-100 hover:scale-110">Projects</a>
          <a href="/tech-stack" className="text-gray-600 hover:text-gray-900 transition-transform duration-100 hover:scale-110">Tech Stack</a>
          <a href="/contact" className="text-gray-600 hover:text-gray-900 transition-transform duration-100 hover:scale-110">Contact</a>
        </div>
        <div className="flex gap-3 md:gap-5 font-semibold items-center py-5">
          <Link href={whatsappLink} target='_blank' className="text-gray-600 hover:text-gray-900 transition-transform duration-200 hover:scale-110">
            <FaWhatsapp />
          </Link>
          <Link href={`https://www.linkedin.com/in/kelechiugwu`} target="_blank" className="text-gray-600 hover:text-gray-900 transition-transform duration-200 hover:scale-110 hover:shadow-sm">
            <CiLinkedin />
          </Link>
          <Link href={`https://github.com/kcblaq`} target="_blank" className="text-gray-600 hover:text-gray-900 transition-transform duration-200 hover:scale-110 hover:shadow-sm">
            <VscGithub />
          </Link>
          <Link href={`https://x.com/kcblaqdigital`} target="_blank" className="text-gray-600 hover:text-gray-900 transition-transform duration-200 hover:scale-110 hover:shadow-sm">
            <FaXTwitter />
          </Link>
        </div>
      </nav>


  )
}
