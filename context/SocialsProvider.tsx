"use client"

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
  useMemo,
} from "react"

interface Social {
  name: string
  link: string
}

interface SocialsContextProps {
  socials: Social[] | null
  setSocials: (data: Social[]) => void
}

const SocialsContext = createContext<SocialsContextProps>({
  socials: null,
  setSocials: () => {}, // default noop
})

export function useSocials() {
  return useContext(SocialsContext)
}

export function SocialsProvider({ children }: { children: ReactNode }) {
  const [socials, setSocialsState] = useState<Social[] | null>(null)

  const setSocials = useCallback((data: Social[]) => {
    setSocialsState(data)
  }, [])

  const value = useMemo(() => ({ socials, setSocials }), [socials, setSocials])

  return (
    <SocialsContext.Provider value={value}>{children}</SocialsContext.Provider>
  )
}
