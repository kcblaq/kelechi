"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
 
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
 
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
 


  return (
    <section className="grid gap-10 w-full md:px-20">
                  <h1 className="items-center gap-1 flex text-2xl md:text-3xl font-semibold"> Selected <span className="text-primary"> Work  </span> </h1>

    <div className="mx-auto max-w-xs">
      <Carousel setApi={setApi} opts={{
        loop: true,
      }} 
      plugins={
        [
          Autoplay({
            delay: 3000,
            stopOnMouseEnter: true,
            stopOnInteraction: false
          })
        ]
      }
      className="w-full ">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} >
              <Card className="p-10 w-full">
                <CardTitle> Here is my title for slide {index + 1}</CardTitle>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>
    </section>
  )
}