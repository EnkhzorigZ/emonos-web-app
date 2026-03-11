"use client"

import { usePathname } from "next/navigation"

export default function DirectLocation() {
  const pathname = usePathname()

  if (pathname !== "/") return null

  return <div className="container-max">DirectLocation</div>
}
