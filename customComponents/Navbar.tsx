import { apiRequest } from "@/api/apiServerRequest"
import DirectLocation from "./DirectLocation"
import NavbarComponent from "./NavbarComponent"
import { Suspense } from "react"
import { cacheLife } from "next/cache"

async function fetchSocials() {
  "use cache"
  cacheLife({ stale: 300 })

  const res = await apiRequest({
    endpoint: "/api/site/social",
    method: "POST",
    body: null,
  })
  return res
}

export default async function Navbar() {
  const socials = await fetchSocials()

  return (
    <>
      <Suspense fallback={<div>...</div>}>
        <DirectLocation data={socials?.data} />
      </Suspense>
      <NavbarComponent />
    </>
  )
}
