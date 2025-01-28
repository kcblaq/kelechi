"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"
import { ReusableCarouselItem } from "./works/SelectedWorksCard"
import SHORTCHASE from "../../../public/asset/works/shortchase.png";
import ZUMMIT from "../../../public/asset/works/zummit.png";
import HALO from "../../../public/asset/works/halo.png";
import BUD from "../../../public/asset/works/budco.png";
import { Budsubtitle, GlobalReformation, Halosubtitle, Shortchasesubtitle, Zummitsubtitle } from "./works/Subtitles";
import { useRouter } from "next/navigation"

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

  function handleRoute(link: string){
    window.open(link, "_blank")
  }

  return (
    <section className="grid gap-10 w-full md:px-20 overflow-hidden">
      <h1 className="items-center gap-1 flex text-3xl font-semibold md:text-5xl mb-4 md:mb-8">Selected <span className="text-primary">Work</span></h1>
      <div className="h-full w-full p-2 md:p-6">
        <Carousel
          setApi={setApi}
          opts={{ loop: true }}
          plugins={[Autoplay({ delay: 3000, stopOnMouseEnter: true, stopOnInteraction: false })]}
          className="relative mx-w-sm md:max-w-full md:w-full h-full "
        >
          <CarouselContent className="flex md:gap-6">
            <CarouselItem
              className="group md:basis-1/2 lg:basis-1/2 h-[300px] md:h-[500px] rounded-lg relative md:ml-6 cursor-pointer"
              onClick={()=> handleRoute("https://www.haloasset.com/")}
              style={{
                backgroundImage: `
                linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%),
                url(${HALO.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }}
            >
              <ReusableCarouselItem title="Halo" subtitle={<Halosubtitle />} />
            </CarouselItem>

            <CarouselItem
              className="group md:basis-1/2 lg:basis-1/2 h-[500px] rounded-lg relative cursor-pointer"
              onClick={()=> handleRoute("https://www.shortchase.com/")}
              style={{
                backgroundImage: `
                linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%), 
                url(${SHORTCHASE.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }}
            >
              <ReusableCarouselItem title="Shortchase" subtitle={<Shortchasesubtitle />} />
            </CarouselItem>

            <CarouselItem
              className="group md:basis-1/2 lg:basis-1/2 h-[500px] rounded-lg relative cursor-pointer"
              onClick={()=> handleRoute("https://www.zummitafrica.com/")}
              style={{
                backgroundImage: `
                linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%),
                url(${ZUMMIT.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }}
            >
              <ReusableCarouselItem title="Zummit" subtitle={<Zummitsubtitle />} />
            </CarouselItem>

            <CarouselItem
              className="group md:basis-1/2 lg:basis-1/2 h-[500px] rounded-lg relative cursor-pointer"
              onClick={()=> handleRoute("https://globalreformationnetwork.org/")}
              style={{
                backgroundImage: `
                linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%),
                url(${SHORTCHASE.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }}
            >
              <ReusableCarouselItem title="Global Reformation" subtitle={<GlobalReformation />} />
            </CarouselItem>
            <CarouselItem
              className="group md:basis-1/2 lg:basis-1/2 h-[500px] rounded-lg relative cursor-pointer"
              onClick={()=> handleRoute("https://budhq.co/")}
              style={{
                backgroundImage: `
                linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%),
                url(${BUD.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }}
            >
              <ReusableCarouselItem title="Budco" subtitle={<Budsubtitle />} />
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
