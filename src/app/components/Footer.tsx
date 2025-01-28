import React from 'react'
import FooterBG from "../../../public/asset/footerbg.png";
import Logo from "../../../public/asset/Logo.svg";
import Link from "next/link";
import Image from "next/image";
import { CiFaceSmile } from "react-icons/ci";
import WorkTogether from './WorkTogether';


export default function Footer() {
    
    return (
        <section className='border-t'>

        <div className=" w-full  grid px-3 lg:px-20 pb-2"
            style={{
                backgroundImage: `url(${FooterBG.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            {/* <WorkTogether /> */}

            <div className="grid grid-cols-1 md:grid-cols-2  min-h-[200px] mt-6 pb-24 md:pb-2 content-between justify-between w-full">

                <div className="col-span-1 flex justify-between  flex-col">
                    <div className="flex flex-col gap-2">
                        <Link href={`/`} className="transition-transform duration-300 hover:scale-110">
                            <Image src={Logo} alt="Kelechi Logo" height={40} width={40} />
                        </Link>
                        <p className="flex items-center gap-2"> Thank you for stopping by <span className="text-yellow-500"> <CiFaceSmile /> </span> </p>
                    </div>
                    <small className="col-span-1 hidden md:flex items-center">
                        &#169; {new Date().getFullYear()} Kelechi Ugwu. All rights reserved.
                    </small>
                </div>
                <div className={`col-span-1 grid  grid-col-1 md:grid-cols-2 w-full mt-2 justify-items-start md:justify-items-end h-full`}>
                    <ul className="flex flex-col justify-end gap-2">
                        <h2 className="font-bold text-xl my-3">
                            <Link href={`/`}>Links </Link>
                        </h2>
                        <li>
                            <Link href={`/about`}>About</Link>
                        </li>

                        <li>
                            <Link href={`/projects`}>Work</Link>
                        </li>
                        <li>
                            <Link href={`/tech-stack`}>Tech Stack</Link>
                        </li>
                        <li>
                            <Link href={`/contact`}>Contact</Link>
                        </li>
                    </ul>
                    <ul className="flex flex-col justify-end gap-2">
                        <h2 className="font-bold text-xl my-3">
                            <Link href={`/`}>Elsewhere </Link>
                        </h2>
                        <Link href="https://www.linkedin.com/in/kelechiugwu/" target='_blank'>
                            Linkedin
                        </Link>

                        <li>
                            <Link href={`https://github.com/kcblaq`} target='_blank'>Github</Link>
                        </li>
                        <li>
                            <Link href={`https://x.com/kcblaqdigital`}  target="_blank">X (Twitter) </Link>
                        </li>
                        <li>
                            <Link href={`https://drive.google.com/file/d/1le5HknoXbLBc9IdHixm025pjpRCl7coq/view?usp=sharing`} target="_blank">My Resume</Link>
                        </li>
                    </ul>
                    <small className="col-span-1 md:hidden mt-4 flex items-center">
                        &#169; {new Date().getFullYear()} Kelechi Ugwu. All rights reserved.
                    </small>
                </div>
            </div>
        </div>
        </section>
    )
}
