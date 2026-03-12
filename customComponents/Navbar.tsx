import { apiRequest } from "@/api/apiServerRequest"
import SiteDataLoader from "./SiteDataLoader"

async function fetchSiteData() {
  try {
    // Run all requests in parallel
    const [
      homeRes,
      bannerRes,
      categoriesRes,
      socialsRes,
      headerlogosRes,
      loginbgRes,
      catbannersRes,
      cartSuggestRes,
      headerbgRes,
      searchbgRes,
      commentbgRes,
      basketadRes,
      trackorderbgRes,
    ] = await Promise.all([
      apiRequest({
        endpoint: "/api/site/v2/layout",
        method: "POST",
        body: { page_type: "home" },
      }),
      apiRequest({ endpoint: "/api/site/v2/banner/home", method: "POST" }),
      apiRequest({ endpoint: "/api/product/category", method: "POST" }),
      apiRequest({ endpoint: "/api/site/social", method: "POST" }),
      apiRequest({ endpoint: "/api/site/logo", method: "POST" }),
      apiRequest({ endpoint: "/api/site/v2/banner/login", method: "POST" }),
      apiRequest({
        endpoint: "/api/site/v2/specialcontents",
        method: "POST",
        body: { keyword: "cat_topbrands" },
      }),
      apiRequest({
        endpoint: "/api/site/v2/specialcontents",
        method: "POST",
        body: { keyword: "cart_suggest" },
      }),
      apiRequest({
        endpoint: "/api/site/v2/banner/headerback",
        method: "POST",
      }),
      apiRequest({ endpoint: "/api/site/v2/banner/searchbg", method: "POST" }),
      apiRequest({ endpoint: "/api/site/v2/banner/prodfaq", method: "POST" }),
      apiRequest({
        endpoint: "/api/site/v2/banner/checkoutads",
        method: "POST",
      }),
      apiRequest({
        endpoint: "/api/site/v2/banner/trackorder",
        method: "POST",
      }),
    ])

    // Prepare cart_suggest safely
    const cart_suggest = cartSuggestRes?.success
      ? cartSuggestRes?.data?.products || []
      : []

    return {
      homeLayout: homeRes?.data,
      banners: bannerRes?.data,
      categories: categoriesRes,
      socials: socialsRes?.data,
      headerlogos: headerlogosRes?.data,
      loginbg: loginbgRes?.data,
      catbanners: catbannersRes?.data,
      cart_suggest,
      headerbg: headerbgRes?.data,
      searchbg: searchbgRes?.data,
      commentbg: commentbgRes?.data,
      basketad: basketadRes?.data,
      trackorderbg: trackorderbgRes?.data,
    }
  } catch (error) {
    console.error("Error fetching site data:", error)
    return {}
  }
}

export default async function Navbar() {
  const siteData = await fetchSiteData()

  return <SiteDataLoader siteData={siteData} />
}
