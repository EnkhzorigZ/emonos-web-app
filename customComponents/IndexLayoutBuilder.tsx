"use client"

import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"
import Layout1 from "@/components/layouts/Layout1"
import Layout2 from "@/components/layouts/Layout2"
import Layout3 from "@/components/layouts/Layout3"
import Layout4 from "@/components/layouts/Layout4"
import Layout5 from "@/components/layouts/Layout5"
import Layout6 from "@/components/layouts/Layout6"
import Layout7 from "@/components/layouts/Layout7"
import Layout8 from "@/components/layouts/Layout8"
import Layout9 from "@/components/layouts/Layout9"
import Layout10 from "@/components/layouts/Layout10"
import Layout11 from "@/components/layouts/Layout11"
import Layout12 from "@/components/layouts/Layout12"
import Layout13 from "@/components/layouts/Layout13"
import Layout14 from "@/components/layouts/Layout14"
import Layout15 from "@/components/layouts/Layout15"
import ProductLayout from "@/components/layouts/ProductLayout"
import BlogLayout from "@/components/layouts/BlogLayout"
import NewsLayout from "@/components/layouts/NewsLayout"

type LayoutDetail = {
  type_code: string
  contents?: any[]
  is_reverse?: boolean
  title?: string
  title_type?: "text" | "image"
  title_image?: string
  title_url?: string
}

type Section = {
  ordering_value: number
  layout_detail: LayoutDetail
}

interface Props {
  layouts?: Section[]
}

export default function IndexLayoutBuilder({ layouts }: Props) {
  const router = useRouter()

  if (!layouts?.length) {
    return (
      <div className="flex justify-center py-20">
        <Loader2 className="animate-spin" />
      </div>
    )
  }

  const renderTitle = (layout: LayoutDetail) => {
    if (layout.title_type === "text") {
      return (
        <h2
          className="mb-6 cursor-pointer text-xl font-semibold"
          onClick={() => layout.title_url && router.push(layout.title_url)}
        >
          {layout.title}
        </h2>
      )
    }

    if (layout.title_type === "image") {
      return (
        <img
          src={layout.title_image}
          className="mb-6 cursor-pointer"
          onClick={() => layout.title_url && router.push(layout.title_url)}
        />
      )
    }

    return null
  }

  const renderLayout = (detail: LayoutDetail) => {
    switch (detail.type_code) {
      case "em_layout1":
        return <Layout1 data={detail} />

      case "em_layout2":
        return <Layout2 data={detail} />

      case "em_layout3":
        return <Layout3 data={detail} />

      case "em_layout4":
        return <Layout4 data={detail} />

      case "em_layout5":
        return <Layout5 data={detail} />

      case "em_layout6":
        return <Layout6 data={detail} />

      case "em_layout7":
        return <Layout7 data={detail} />

      case "em_layout8":
        return <Layout8 data={detail} />

      case "em_layout9":
        return <Layout9 data={detail} />

      case "em_layout10":
        return <Layout10 data={detail} />

      case "em_layout11":
        return <Layout11 data={detail} />

      case "em_layout12":
        return <Layout12 data={detail} />

      case "em_layout13":
        return <Layout13 data={detail} />

      case "em_layout14":
        return <Layout14 data={detail} />

      case "em_layout15":
        return <Layout15 data={detail} />

      case "product_layout":
        return <ProductLayout data={detail} />

      case "blog_layout":
        return <BlogLayout data={detail} />

      case "news_layout":
        return <NewsLayout data={detail} />

      default:
        return null
    }
  }

  return (
    <div className="space-y-12">
      {layouts
        .sort((a, b) => a.ordering_value - b.ordering_value)
        .map((section, index) => {
          const detail = section.layout_detail

          return (
            <section key={index} className="container mx-auto px-4">
              {renderTitle(detail)}
              {renderLayout(detail)}
            </section>
          )
        })}
    </div>
  )
}
