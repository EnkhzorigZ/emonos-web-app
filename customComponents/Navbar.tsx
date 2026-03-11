import { apiRequest } from "@/api/apiServerRequest"
import DirectLocation from "./DirectLocation"
import NavbarComponent from "./NavbarComponent"

async function fetchSocials() {
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
      <DirectLocation data={socials?.data} />
      <NavbarComponent />
    </>
  )
}
