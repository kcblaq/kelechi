import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/asset/Logo.svg";
// import BG from "../../public/asset/background.png";
import BG from "../../../public/asset/background.png";
import { MdOutlineWavingHand } from "react-icons/md";
import Potrait from "../../../public/asset/Portrait.png";
import GetToKnoeMe from "../components/GetToKnoeMe";
import Hero from "../components/Hero";
import MobileLogo from "../components/MobileLogo";
import MobileMenu from "../components/MobileMenu";
import MyServices from "../components/MyServices";

import { SelectedWorks } from "../components/SelectedWork";
import Nav from "../components/Nav";
import WorkTogether from "../components/WorkTogether";





export default function Home() {
  return (
    <main className="w-full grid gap-12 md:gap-24" >
      <section className=" grid w-full  ">
        <div className=" w-full  relative px-3 md:px-36 "
          style={{
            backgroundImage: `url(${BG.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
          <Nav />
          <MobileLogo />

          <Hero />

        </div>
      </section>
      <MyServices />
      <SelectedWorks />
      <GetToKnoeMe/>
      <WorkTogether />
      <div className="">
        <MobileMenu />
      </div>
    </main>
  );
}
