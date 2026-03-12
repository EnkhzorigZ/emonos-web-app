"use client"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { MapPin, ChevronDown } from "lucide-react"

import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import { Label } from "@/components/ui/label"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function ChangeLocationDialog({
  openModal,
  setOpenModal,
}: {
  openModal: boolean
  setOpenModal: (open: boolean) => void
}) {
  const router = useRouter()
  const pathname = usePathname()

  const [region, setRegion] = useState("")
  const [selectedArea, setSelectedArea] = useState("")
  const [currentLocation, setCurrentLocation] = useState("Улаанбаатар")

  const getCurrentLocation = () => {
    const api = process.env.NEXT_PUBLIC_API_URL || ""

    if (api.includes("darkhan")) {
      setCurrentLocation("Дархан")
    } else if (api.includes("erdenet")) {
      setCurrentLocation("Эрдэнэт")
    } else if (api.includes("ulgii")) {
      setCurrentLocation("Баян-Өлгий")
    } else {
      setCurrentLocation("Улаанбаатар")
    }
  }

  useEffect(() => {
    getCurrentLocation()
  }, [pathname])

  const reset = () => {
    setRegion("")
    setSelectedArea("")
    setOpenModal(false)
  }

  const handleSave = () => {
    if (region === "Улаанбаатар") {
      router.push("https://emonos.mn/login")
    }

    if (region === "Орон нутаг") {
      switch (selectedArea) {
        case "Дархан":
          router.push("https://darkhan.emonos.mn/login")
          break
        case "Эрдэнэт":
          router.push("https://erdenet.emonos.mn/login")
          break
        case "Баян-Өлгий":
          router.push("https://ulgii.emonos.mn/login")
          break
      }
    }

    reset()
  }

  return (
    <Dialog open={openModal} onOpenChange={setOpenModal}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Бүс сонгох</DialogTitle>
          <DialogDescription>Та өөрийн байршлыг сонгоно уу.</DialogDescription>
        </DialogHeader>

        <DialogBody className="space-y-4">
          {/* Region Radio */}
          <RadioGroup
            value={region}
            onValueChange={(value) => setRegion(value)}
            className="flex gap-6"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Улаанбаатар" id="ub" />
              <Label htmlFor="ub">Улаанбаатар</Label>
            </div>

            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Орон нутаг" id="province" />
              <Label htmlFor="province">Орон нутаг</Label>
            </div>
          </RadioGroup>

          {/* Province Select */}
          {region === "Орон нутаг" && (
            <Select value={selectedArea} onValueChange={setSelectedArea}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Аймаг сонгох" />
              </SelectTrigger>

              <SelectContent align="center">
                <SelectItem value="Дархан">Дархан</SelectItem>
                <SelectItem value="Эрдэнэт">Эрдэнэт</SelectItem>
                <SelectItem value="Баян-Өлгий">Баян-Өлгий</SelectItem>
              </SelectContent>
            </Select>
          )}
        </DialogBody>

        <DialogFooter>
          <Button onClick={handleSave} className="w-full">
            Үргэлжлүүлэх
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
