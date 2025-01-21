import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/asset/Logo.svg";
import BG from "../../public/asset/background.png";
import { MdOutlineWavingHand } from "react-icons/md";
import Potrait from "../../public/asset/Portrait.png";
import CustomButton from "./components/CustomButton";
import Nav from "./components/Nav";
import MobileMenu from "./components/MobileMenu";
import Hero from "./components/Hero";
import MyServices from "./components/MyServices";
import { SelectedWorks } from "./components/SelectedWork";
import MobileLogo from "./components/MobileLogo";
import GetToKnoeMe from "./components/GetToKnoeMe";




export default function Home() {
  return (
    <main className="w-full grid gap-4 md:gap-24" >
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
      <div className="">
        <MobileMenu />
      </div>
    </main>
  );
}
