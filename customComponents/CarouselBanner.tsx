"use client"
import React, { useRef } from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function CarouselBanner({ data }: { data: any }) {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }))

  return (
    // <Carousel plugins={[plugin.current]} className="">
    <Carousel className="">
      <CarouselContent>
        {data?.map((item: any, index: number) => (
          <CarouselItem key={index}>
            <Image
              src={`${process.env.MEDIA_URL}${item.photo}`}
              alt="Banner Image"
              priority={index === 0}
              unoptimized
              width={3000}
              height={1000}
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="ml-14" variant="ghost" />
      <CarouselNext className="mr-14" variant="ghost" />
    </Carousel>
  )
}
