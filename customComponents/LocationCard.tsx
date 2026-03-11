import React, { useState } from "react"

import { ChevronDown, MapPin, Phone } from "lucide-react"
import { usePathname } from "next/navigation"
import LinkCard from "./LinkCard"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import ChangeLocationDialog from "./ChangeLocationDialog"

export default function LocationCard() {
  const [openModal, setOpenModal] = useState<boolean>(false)
  return (
    <>
      <Card
        className="cursor-pointer rounded-full border-2 border-orangeBorder p-1 py-0.5"
        onClick={() => {
          setOpenModal(true)
        }}
      >
        <CardContent className="flex items-center justify-center gap-2 overflow-hidden px-3">
          <div className="py-1 md:p-0">
            <MapPin color="#fd572f" size={24} />
          </div>
          <div className="hidden space-y-1 md:block">
            <p className="text-xs text-muted-foreground">Бүс сонгох</p>
            <div className="font-bold text-black dark:text-white">
              Улаанбаатар
            </div>
          </div>
          <div className="hidden md:block">
            <ChevronDown size={18} className="stroke-black dark:stroke-white" />
          </div>
        </CardContent>
      </Card>

      <ChangeLocationDialog openModal={openModal} setOpenModal={setOpenModal} />
    </>
  )
}
