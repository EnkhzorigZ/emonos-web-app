"use client"

import { Phone } from "lucide-react"
import { usePathname } from "next/navigation"
import LinkCard from "./LinkCard"
import LocationCard from "./LocationCard"
import { Suspense, useEffect } from "react"
import { useSiteData } from "@/context/SiteDataProviders"

export default function DirectLocation() {
  const pathname = usePathname()

  if (pathname !== "/") return null

  const { siteData } = useSiteData()

  return (
    <>
      <div className="bg-primaryOrange px-4 py-2 md:px-10">
        <div className="flex items-center justify-between">
          <LocationCard />
          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-2 text-white [@media(min-width:374px)]:flex">
              <div>
                <Phone color="white" size={18} />
              </div>
              <p>1800-1883</p>
            </div>

            <div className="flex items-center gap-2">
              {siteData?.socials?.map((item, index) => (
                <LinkCard key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
