"use client"

import { useSiteData } from "@/context/SiteDataProviders"
import { categories, userActions } from "@/helper/constValue"
import { useRouter } from "next/navigation"

export default function CategoryList() {
  const { siteData } = useSiteData()
  const router = useRouter()

  const handleNavigate = (path: string) => router.push(path)

  return (
    <div className="mini-container">
      <div className="flex flex-wrap items-center justify-between gap-2">
        {/* Categories */}
        <div className="flex flex-wrap items-center gap-4">
          {categories.map((cat: { label: string; path: string }) => (
            <span
              key={cat.path}
              onClick={() => handleNavigate(cat.path)}
              className="hover-text-sm cursor-pointer"
            >
              {cat.label}
            </span>
          ))}
        </div>

        {/* User Actions */}
        <div className="flex flex-wrap items-center gap-4">
          {userActions.map((action: { label: string; path: string }) => (
            <span
              key={action.path}
              onClick={() => handleNavigate(action.path)}
              className="hover-text-sm cursor-pointer"
            >
              {action.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
