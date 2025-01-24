import React from 'react';
import Logo from "../../../public/asset/Logo.svg"
import Image from "next/image";
import Link from "next/link";

export default function MobileLogo() {
  return (
    <div className="flex md:hidden items-center justify-center w-full mt-10">
    <Link href={`/`} className="transition-transform duration-300 hover:scale-110">
      <Image src={Logo} alt="Kelechi Logo" height={40} width={40} />
    </Link>
  </div>
  )
}
