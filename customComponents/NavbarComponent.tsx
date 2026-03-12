"use client"

import { Button } from "@/components/ui/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Heart, InfoIcon, Menu, ShoppingCart, User } from "lucide-react"
import Image from "next/image"

export default function NavbarComponent() {
  return (
    <div className="sticky top-0 z-50 bg-white dark:bg-background">
      <div className="border-b">
        <div className="space-y-4 py-4">
          <div className="container-max">
            <div className="flex w-full items-center justify-between gap-20">
              <Image
                src="/logo.png"
                alt="Description"
                style={{ objectFit: "contain" }}
                width={130}
                height={40}
                priority
              />
              <div className="flex w-full items-center gap-2">
                <Button>
                  <Menu />
                  Бүх ангилал
                </Button>

                <InputGroup className="relative border border-primary">
                  <InputGroupInput
                    className="w-full border-primary"
                    placeholder="Та юу хайж байна вэ?"
                  />
                  <InputGroupAddon align="inline-end">
                    <Button size={"icon"}>
                      <InfoIcon />
                    </Button>
                    <Button size={"icon"}>
                      <InfoIcon />
                    </Button>
                  </InputGroupAddon>
                </InputGroup>
              </div>
              <div className="flex items-center gap-4">
                <Heart />
                <ShoppingCart />
                <User />
                <Button>Login</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
