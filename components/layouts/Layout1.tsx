"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { get_content_data } from "@/helper/GetContentData"
import { actionHandler } from "@/helper/ActionHelper"

export default function Layout1({ data }: { data: any }) {
  const router = useRouter()
  const items = get_content_data(data?.contents, "")

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items?.map((item: any, index: number) => (
        <Image
          src={`${process.env.MEDIA_URL}${item?.photo}`}
          alt={item?.title || "banner"}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          width={600}
          height={300}
          unoptimized
          onClick={() => {
            actionHandler(item, router)
          }}
          priority
          className="w-full transform cursor-pointer rounded-lg object-cover transition duration-500 hover:scale-102"
          key={index}
        />
      ))}
    </div>
  )
}
