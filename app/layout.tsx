import { Geist, Geist_Mono, Public_Sans } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Toaster } from "@/components/ui/sonner"
import Navbar from "@/customComponents/Navbar"
import Footer from "@/customComponents/Footer"

const publicSans = Public_Sans({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        publicSans.variable
      )}
    >
      <body>
        <TooltipProvider>
          <ThemeProvider>
            <div className="">
              <Navbar />
              <main className="container-max min-h-screen py-4">
                {children}
              </main>
              <Footer />
            </div>
          </ThemeProvider>
        </TooltipProvider>
        <Toaster />
      </body>
    </html>
  )
}
