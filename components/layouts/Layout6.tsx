import Image from "next/image"
import { useRouter } from "next/navigation"
import { getContentData } from "@/helper/GetContentData"
import { actionHandler } from "@/helper/ActionHelper"

export default function Layout6({ contents }: any) {
  const router = useRouter()
  const data = getContentData(contents)

  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
      {data.map((item: any) => (
        <div
          key={item.id}
          className="group cursor-pointer text-center"
          onClick={() => actionHandler(item, router)}
        >
          <div className="relative aspect-square">
            <Image
              src={`${process.env.NEXT_PUBLIC_API_MEDIA_URL}${item.photo}`}
              alt={item.name}
              fill
              className="object-contain"
            />
          </div>

          <p className="mt-2 text-sm font-medium group-hover:text-primary">
            {item.title || item.name}
          </p>
        </div>
      ))}
    </div>
  )
}
