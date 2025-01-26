"use client"
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";
import Logo from "../../../public/asset/Logo.svg"
import BG from "../../../public/asset/background.png";
import BGS from "../../../public/asset/bg.svg";
import { usePathname } from 'next/navigation';
import AboutTitle from '../(morepages)/about/AboutTitle';
import ProjectTitle from '../(morepages)/projects/ProjectTitle';
import ContactTitle from '../(morepages)/contact/ContactTitle';
import TechTitle from '../(morepages)/tech-stack/TechTitle';


export default function PagesNav() {


    const whatsappLink = "https://wa.me/2348032465303";
    const pathname = usePathname();

    return (

        <nav className="hidden  w-full md:flex items-center gap-14 justify-between min-h-60 flex-col border-b pb-3 lg:pb-10"
            style={{
                backgroundImage: `url(${BGS.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            <section className="flex items-center justify-between w-full lg:px-20 p-3 ">
                <div className="flex items-center justify-between w-full bg-opacity-10 lg:px-10 bg-gray-400 rounded-lg ">
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
                </div>

            </section>
            <section className="flex items-center justify-between w-full lg:px-20 p-3 ">
                {
                    pathname === "/about" && <AboutTitle />
                }
                {pathname === "/contact" && <ContactTitle />}
                {pathname === "/projects" && <ProjectTitle/> }
                {pathname === "/tech-stack" && <TechTitle/> }
            </section>
        </nav>
    )
}
