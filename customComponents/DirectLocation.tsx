"use client"

import { Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface DirectLocationProps {
  data: {
    name: string
    link: string
  }[]
}

export default function DirectLocation({ data }: DirectLocationProps) {
  const pathname = usePathname()

  if (pathname !== "/") return null

  return (
    <div className="bg-primaryOrange px-4 py-4 md:px-10">
      <div className="flex items-center justify-between">
        <h1>d</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-white">
            <Phone color="white" size={18} />
            <p>1800-1883</p>
          </div>

          <div className="flex items-center gap-2">
            {data?.map((item, index) => (
              <Link key={index} href={item.link} target="_blank">
                <div className="rounded-full bg-white p-2">
                  <Image
                    src={`/social/${item.name.toLowerCase()}.png`}
                    width={14}
                    height={14}
                    alt={item.name}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
