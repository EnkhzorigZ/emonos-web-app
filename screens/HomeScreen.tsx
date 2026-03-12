import { apiRequest } from "@/api/apiServerRequest"
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
export default async function HomeScreen() {
  const res = await getData()
  return (
    <div>
      <div>CAROUSEL</div>
      <IndexLayoutBuilder layouts={res?.data} />
    </div>
  )
}
