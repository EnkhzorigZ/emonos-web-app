import React, { useState } from "react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { useSiteData } from "@/context/SiteDataProviders"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface CategorySheetProps {
  open: boolean
  setOpen: (open: boolean) => void
}
export default function CategorySheet({ open, setOpen }: CategorySheetProps) {
  const { siteData } = useSiteData()
  const categories = siteData?.categories || []

  const [activeTab, setActiveTab] = useState<number | null>(
    categories[0]?.id || null
  )

  const activeCategory = categories.find((c: any) => c.id === activeTab)

  const router = useRouter()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* 1. Change to h-auto and remove overflow-hidden to let it shrink */}
      <SheetContent side="top" className="h-auto w-full p-0">
        <SheetHeader className="sr-only">
          <SheetTitle>Categories</SheetTitle>
        </SheetHeader>

        {/* 2. max-h here prevents it from going off-screen, but h-auto lets it be small */}
        <div className="flex h-auto max-h-[85vh] w-full">
          {/* LEFT SIDEBAR */}
          <div className="w-72 shrink-0 overflow-y-auto border-r p-4">
            <div className="flex flex-col gap-2">
              {categories.map((cat: any) => (
                <Button
                  variant="outline"
                  key={cat.id}
                  onMouseEnter={() => setActiveTab(cat.id)}
                  className={cn(
                    "flex w-full items-center justify-start p-4 text-sm font-medium transition-all",
                    activeTab === cat.id
                      ? "bg-white text-orange-600"
                      : "text-gray-600 hover:bg-gray-100"
                  )}
                >
                  <span className="truncate uppercase">{cat.name}</span>
                  <ChevronRight
                    className={cn(
                      "h-4 w-4 shrink-0 transition-transform",
                      activeTab === cat.id
                        ? "translate-x-1 opacity-100"
                        : "opacity-30"
                    )}
                  />
                </Button>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          {/* 3. overflow-y-auto here ensures that if children are many, only this side scrolls */}
          <div className="flex-1 overflow-y-auto p-4">
            {activeCategory && activeCategory.children.length > 0 ? (
              <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
                {activeCategory.children.map((sub: any) => (
                  <div key={sub.id} className="space-y-3">
                    {/* Subcategory heading links to subcategory page */}
                    <p
                      onClick={() => {
                        setOpen(false)
                        router.push(`/category?id=${sub.id}`)
                      }}
                      className="block cursor-pointer text-[14px] font-bold tracking-tight uppercase hover:text-orange-600"
                    >
                      {sub.name}
                    </p>

                    {/* Children links */}
                    {sub.children && sub.children.length > 0 && (
                      <ul className="space-y-2">
                        {sub.children.map((child: any) => (
                          <li key={child.id}>
                            <p
                              onClick={() => {
                                setOpen(false)
                                router.push(`/category?id=${child.id}`)
                              }}
                              className="block cursor-pointer text-[13px] text-gray-500 transition-colors hover:text-orange-500 dark:text-white"
                            >
                              {child.name}
                            </p>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex h-full items-center justify-center text-gray-400 dark:text-gray-200">
                Ангилал байхгүй байна...
              </div>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
