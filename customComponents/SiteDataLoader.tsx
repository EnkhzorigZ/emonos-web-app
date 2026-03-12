"use client"

import { useEffect } from "react"
import { useSiteData } from "@/context/SiteDataProviders"
import DirectLocation from "./DirectLocation"
import NavbarComponent from "./NavbarComponent"
import CategoryList from "./CategoryList"

interface SiteDataLoaderProps {
  siteData: any
}

export default function SiteDataLoader({ siteData }: SiteDataLoaderProps) {
  const { setSiteData } = useSiteData()

  useEffect(() => {
    setSiteData(siteData)
  }, [siteData, setSiteData])

  return (
    <>
      <DirectLocation />
      <NavbarComponent />
      <CategoryList />
    </>
  )
}
