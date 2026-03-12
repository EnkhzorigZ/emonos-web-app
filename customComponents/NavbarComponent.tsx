"use client"

import { Button } from "@/components/ui/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import {
  Camera,
  Heart,
  InfoIcon,
  Menu,
  Search,
  ShoppingCart,
  User,
} from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function NavbarComponent() {
  const router = useRouter()

  return (
    <div className="sticky top-0 z-50 bg-white dark:bg-background">
      <div className="border-b">
        <div className="space-y-4 py-4">
          <div className="container-max">
            <div className="flex w-full items-center justify-between gap-4 lg:gap-20">
              <Image
                src="/logo.png"
                alt="Description"
                style={{ objectFit: "contain" }}
                className="cursor-pointer"
                width={130}
                height={40}
                priority
                onClick={() => {
                  router.push("/")
                }}
              />
              <div className="flex w-full items-center gap-2">
                <div className="hidden md:block">
                  <Button className="">
                    <Menu />
                    Бүх ангилал
                  </Button>
                </div>

                {/* THIS IS FOR WEB AND TABLET */}

                <InputGroup className="relative hidden w-full border border-primary md:flex">
                  <InputGroupInput
                    className="w-full border-primary"
                    placeholder="Та юу хайж байна вэ?"
                  />
                  <InputGroupAddon align="inline-end">
                    <Button size={"icon"}>
                      <Search size={12} />
                    </Button>
                    <Button size={"icon"}>
                      <Camera size={12} />
                    </Button>
                  </InputGroupAddon>
                </InputGroup>
              </div>

              <div className="flex items-center gap-2 md:gap-2">
                <Button variant={"outline"} size={"icon"}>
                  <Heart color="gray" size={18} />
                </Button>
                <Button variant={"outline"} size={"icon"}>
                  <ShoppingCart color="gray" size={18} />
                </Button>
                <Button variant={"outline"} size={"icon"}>
                  <User color="gray" size={18} />
                </Button>
                <Button className="h-8">Нэвтрэх</Button>
              </div>
            </div>
          </div>
        </div>

        {/* THIS IS FOR MOBILE */}
        <div className="block pb-2 md:hidden">
          <div className="container-max">
            <InputGroup className="relative border border-primary">
              <InputGroupInput
                className="w-full border-primary"
                placeholder="Та юу хайж байна вэ?"
              />
              <InputGroupAddon align="inline-end">
                <Button size={"icon"}>
                  <Search />
                </Button>
                <Button size={"icon"}>
                  <Camera />
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </div>
      </div>
    </div>
  )
}
