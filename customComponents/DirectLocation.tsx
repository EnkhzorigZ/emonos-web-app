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

interface DirectLocationProps {
  data: {
    name: string
    link: string
  }[]
}

export default function DirectLocation({ data }: DirectLocationProps) {
  const pathname = usePathname()

  if (pathname !== "/") return null

  const [openModal, setOpenModal] = useState<boolean>(false)

  return (
    <>
      <div className="bg-primaryOrange px-4 py-2 md:px-10">
        <div className="flex items-center justify-between">
          <Card
            className="cursor-pointer rounded-full border-2 border-orangeBorder p-1 py-0"
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
                <ChevronDown
                  size={18}
                  className="stroke-black dark:stroke-white"
                />
              </div>
            </CardContent>
          </Card>

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

      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogContent size="full">
          <DialogHeader>
            <DialogTitle>Title</DialogTitle>
            <DialogDescription>Descc</DialogDescription>
          </DialogHeader>
          <DialogBody>asdasdasd</DialogBody>
          <DialogFooter>Footer</DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
