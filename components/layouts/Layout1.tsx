"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { getContentData } from "@/helper/GetContentData"

export default function Layout1({ data }: { data: any }) {
  const router = useRouter()
  const items = getContentData(data)

  return (
    <div className="w-full">
      <div className="grid gap-4">
        {items?.map((item: any, index: number) => (
          <div
            key={index}
            // onClick={() => actionHandler(item, router)}
            className="relative w-full cursor-pointer overflow-hidden rounded-xl"
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_API_MEDIA_URL}${item?.photo}`}
              alt={item?.title || "banner"}
              width={1200}
              height={400}
              className="h-auto w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
