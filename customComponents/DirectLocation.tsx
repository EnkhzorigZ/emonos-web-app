"use client"

import { Phone } from "lucide-react"
import { usePathname } from "next/navigation"
import LinkCard from "./LinkCard"
import LocationCard from "./LocationCard"
import { useEffect } from "react"
import { useSocials } from "@/context/SocialsProvider"

interface DirectLocationProps {
  data: {
    name: string
    link: string
  }[]
}

export default function DirectLocation({ data }: DirectLocationProps) {
  const pathname = usePathname()

  if (pathname !== "/") return null

  const { socials, setSocials } = useSocials()

  useEffect(() => {
    setSocials(data)
  }, [data, setSocials])

  return (
    <>
      <div className="bg-primaryOrange px-4 py-2 md:px-10">
        <div className="flex items-center justify-between">
          <LocationCard />
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-white">
              <div>
                <Phone color="white" size={18} />
              </div>
              <p>1800-1883</p>
            </div>

            <div className="flex items-center gap-2">
              {data?.map((item, index) => (
                <LinkCard key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
