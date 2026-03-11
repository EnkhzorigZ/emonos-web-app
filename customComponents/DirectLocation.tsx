"use client"

import { ChevronDown, MapPin, Phone } from "lucide-react"
import { usePathname } from "next/navigation"
import LinkCard from "./LinkCard"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import LocationCard from "./LocationCard"

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
