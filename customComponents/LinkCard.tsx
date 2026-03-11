import Image from "next/image"
import Link from "next/link"

export default function LinkCard({
  item,
}: {
  item: { name: string; link: string }
}) {
  return (
    <Link href={item.link} target="_blank">
      <div className="rounded-full bg-white p-1 md:p-2">
        <Image
          src={`/social/${item.name.toLowerCase()}.png`}
          width={14}
          height={14}
          alt={item.name}
        />
      </div>
    </Link>
  )
}
