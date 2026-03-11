import { cookies } from "next/headers"

const BASE_URL = process.env.NEXT_PUBLIC_API_URL
const TIMEOUT = 60000 // 1 minute

type ApiOptions = {
  endpoint: string
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE"
  body?: any
  params?: Record<string, string | number>
  useToken?: boolean
}

export async function apiRequest({
  endpoint,
  method,
  body,
  params,
  useToken = false,
}: ApiOptions) {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), TIMEOUT)

  try {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
    }

    // Get token from cookie on server (SYNC!)
    if (useToken) {
      const cookieStore = cookies() // synchronous
      const token = (await cookieStore).get("emonostoken")?.value?.toString()
      if (token) headers["Authorization"] = `Bearer ${token}`
    }

    // Build query string if params exist
    const queryString = params
      ? "?" + new URLSearchParams(params as Record<string, string>).toString()
      : ""

    console.log(`${BASE_URL}${endpoint}${queryString}`)
    console.log(method)

    const res = await fetch(`${BASE_URL}${endpoint}${queryString}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
      signal: controller.signal,
    })

    // Parse JSON safely
    let data: any = null
    try {
      data = await res.json()
    } catch {
      data = null
    }

    if (!res.ok) {
      throw data || new Error("API Error")
    }

    return data
  } catch (error: any) {
    if (error.name === "AbortError") {
      throw new Error("Request timeout (1 minute)")
    }
    throw error
  } finally {
    clearTimeout(timeoutId)
  }
}
