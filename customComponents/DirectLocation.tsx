"use client"

import { Phone } from "lucide-react"
import { usePathname } from "next/navigation"

export default function DirectLocation() {
  const pathname = usePathname()

  if (pathname !== "/") return null

  return (
    <div className="bg-primaryOrange px-4 py-4 md:px-10">
      <div className="flex items-center justify-between">
        <h1>d</h1>
        <div>
          <div className="flex items-center gap-2">
            <Phone color="white" size={18} />
            <p>1800-1883</p>
          </div>
        </div>
      </div>
    </div>
  )
}
