"use client"

import { toast } from "sonner"
import { getCookie } from "cookies-next"

const BASE_URL = process.env.NEXT_PUBLIC_API_URL
const TIMEOUT = 60000 // 1 minute

type ApiOptions = {
  endpoint: string
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE"
  body?: any
  params?: Record<string, string | number>
  useToken?: boolean
  showError?: boolean
}

export async function apiRequest({
  endpoint,
  method = "GET",
  body,
  params,
  useToken = false,
  showError = true,
}: ApiOptions) {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), TIMEOUT)

  try {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
    }

    // Get token from cookie if needed
    if (useToken) {
      const token = getCookie("emonostoken")?.toString()
      if (token) headers["Authorization"] = `Bearer ${token}`
    }

    // Build query string if params exist
    const queryString = params
      ? "?" + new URLSearchParams(params as Record<string, string>).toString()
      : ""

    const res = await fetch(`${BASE_URL}${endpoint}${queryString}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
      credentials: "include",
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
      if (showError) toast.error(data?.message || "API Error")
      throw data
    }

    return data
  } catch (error: any) {
    if (error.name === "AbortError") {
      if (showError) toast.error("Request timeout (1 minute)")
    } else {
      if (showError) toast.error(error?.message || "Network error")
    }
    throw error
  } finally {
    clearTimeout(timeoutId)
  }
}
