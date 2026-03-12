"use client"

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
  useMemo,
} from "react"

interface SiteData {
  socials?: any[] | null
  headerlogos?: any
  loginbg?: any
  catbanners?: any
  cart_suggest?: any[]
  headerbg?: any
  searchbg?: any
  commentbg?: any
  basketad?: any
  trackorderbg?: any
}

interface SiteDataContextProps {
  siteData: SiteData
  setSiteData: (data: SiteData) => void
}

const SiteDataContext = createContext<SiteDataContextProps>({
  siteData: {},
  setSiteData: () => {},
})

export function useSiteData() {
  return useContext(SiteDataContext)
}

export function SiteDataProvider({ children }: { children: ReactNode }) {
  const [siteData, setSiteDataState] = useState<SiteData>({})

  const setSiteData = useCallback((data: SiteData) => {
    setSiteDataState(data)
  }, [])

  const value = useMemo(
    () => ({ siteData, setSiteData }),
    [siteData, setSiteData]
  )

  return (
    <SiteDataContext.Provider value={value}>
      {children}
    </SiteDataContext.Provider>
  )
}
