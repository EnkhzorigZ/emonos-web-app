import { apiRequest } from "@/api/apiServerRequest"
import CarouselBanner from "@/customComponents/CarouselBanner"
import IndexLayoutBuilder from "@/customComponents/IndexLayoutBuilder"

async function getData() {
  const res = await apiRequest({
    endpoint: "/api/site/v2/layout",
    method: "POST",
    body: {
      page_type: "home",
    },
    useToken: false,
  })
  return res
}

async function getBanner() {
  const res = await apiRequest({
    endpoint: "/api/site/v2/banner/home",
    method: "POST",
    body: {
      page_type: "home",
    },
    useToken: false,
  })
  return res
}
export default async function HomeScreen() {
  const res = await getData()
  const banner = await getBanner()
  return (
    <div className="space-y-4">
      <CarouselBanner data={banner?.data} />
      <div className="containers">
        <IndexLayoutBuilder layouts={res?.data} />
      </div>
    </div>
  )
}
