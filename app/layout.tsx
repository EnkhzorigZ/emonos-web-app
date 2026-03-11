import { Geist_Mono, Inter } from "next/font/google"
import "./globals.css"

import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Toaster } from "@/components/ui/sonner"

import Navbar from "@/customComponents/Navbar"
import Footer from "@/customComponents/Footer"
import { SocialsProvider } from "@/context/SocialsProvider"

import { cn } from "@/lib/utils"
import { Metadata } from "next"

const inter = Inter({
  subsets: ["latin", "cyrillic"], // supports Mongolian
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "eMonos",
  description: "",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="mn" suppressHydrationWarning>
      <body
        className={cn(
          "font-sans antialiased",
          inter.variable,
          fontMono.variable
        )}
      >
        <TooltipProvider>
          <SocialsProvider>
            <ThemeProvider>
              <div>
                <Navbar />

                <main className="container-max min-h-screen py-4">
                  {children}
                </main>

                <Footer />
              </div>
            </ThemeProvider>
          </SocialsProvider>
        </TooltipProvider>

        <Toaster />
      </body>
    </html>
  )
}
