"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"
import SelectedWorksCard, { ReusableCarouselItem } from "./works/SelectedWorksCard"
import SHORTCHASE from "../../../public/asset/works/shortchase.png";
import BG from "../../../public/asset/works/halo.png";
import ZUMMIT from "../../../public/asset/works/zummit.png";
import HALO from "../../../public/asset/works/halo.png";
import { LuArrowUpRight } from "react-icons/lu";

export function SelectedWorks() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const Halosubtitle = ()=> {
    return (
      <>
      
      <p>
        Halo is a platform for lending and borrowing money. We help people access credit, save money, and make money on their own.
      </p>
      <div className="p-6">
      <li> Lender&apos;s best place for all</li>
      <li> Lender&apos;s best place for all</li>
      <li> Lender&apos;s best place for all</li>
      </div>
      </>
    )
  }
  const Zummitsubtitle = ()=> {
    return (
      <>
      
      <p>
        
        Zummit Africa is an institution for building APIs and AI for businesses and organizations. It has two wings:
        </p>


      <div className="p-6">
      <li>  Training potential IT experts in various fields, and </li>
      <li>  Building applications.</li>
      </div>
      </>
    )
  }

  function Shortchasesubtitle(){
    return (
      <>
     <p>
     ShortChase is a comprehensive sports betting platform that provides innovative betting solutions and real-time sports analytics. Its core code services include:
     </p>
     <div className="p-6">
      <li>  Developing advanced betting algorithms and predictive models for accurate sports event outcomes </li>
      <li>  Creating secure, scalable microservices architecture for handling high-volume betting transactions</li>
      <li>  Implementing real-time data processing and live scoring integration for dynamic betting experiences</li>
      </div>
      </>
    )
  }

  return (
    <section className="grid gap-10 w-full md:px-20 overflow-hidden">
      <h1 className="items-center gap-1 flex text-3xl font-semibold md:text-5xl mb-4 md:mb-8">Selected <span className="text-primary">Work</span></h1>
      <div className="h-full w-full p-2 md:p-6">
        <Carousel
          setApi={setApi}
          opts={{ loop: true }}
          plugins={[Autoplay({ delay: 3000, stopOnMouseEnter: true, stopOnInteraction: false })]}
          className="relative mx-w-sm md:max-w-full md:w-full h-full"
        >
          {/* <CarouselContent className="flex">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className=" md:basis-1/2 lg:basis-1/3">
                <SelectedWorksCard
                  title="Here is my title for slide"
                  image="https://source.unsplash.com/random/800x600"
                  description="Here is my description for slide"
                  link="/"
                />
              </CarouselItem>
            ))}
          </CarouselContent> */}
          <CarouselContent className="flex gap-0 md:gap-6  ">

            <CarouselItem className="basis-full group md:basis-1/2 group lg:basis-1/2 h-[500px] md:ml-6 rounded-lg
            flex flex-col justify-between
            " style={{
                backgroundImage: `url(${SHORTCHASE.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }}>

              <ReusableCarouselItem title="Global Reformation" subtitle={<Shortchasesubtitle/>} />
            </CarouselItem>

            <CarouselItem className="basis-full md:basis-1/2 group lg:basis-1/2 h-[500px] rounded-lg" style={{
              backgroundImage: `url(${HALO.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}>
              <ReusableCarouselItem title="Halo" subtitle={<Halosubtitle/>} />
            </CarouselItem>

            <CarouselItem className="basis-full md:basis-1/2 group lg:basis-1/2 h-[500px] rounded-lg" style={{
              backgroundImage: `url(${ZUMMIT.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}>
              <ReusableCarouselItem title="Zummit" subtitle={<Zummitsubtitle/>} />

            </CarouselItem>
            
            <CarouselItem className="basis-full md:basis-1/2 group lg:basis-1/2 h-[500px] rounded-lg" style={{
              backgroundImage: `url(${SHORTCHASE.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}>
              <ReusableCarouselItem title="Shortchase" subtitle={<Shortchasesubtitle/>} />
            </CarouselItem>

          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
          <div className="py-2 text-center text-sm text-muted-foreground">
            Slide {current} of {count}
          </div>
        </Carousel>
      </div>
    </section>
  )
}
