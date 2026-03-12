export function getContentData(data?: any[], key?: string) {
  if (!data?.length) return []

  const contents = data[0]

  if (key === "top_banner") {
    return contents?.top_banner ?? []
  }

  switch (contents?.content_type) {
    case "banner":
      return contents?.banner ?? []

    case "product":
      return contents?.products ?? []

    case "category":
      return contents?.categories ?? []

    case "brand":
      return contents?.brands ?? []

    case "prnews":
      return contents?.prnews ?? []

    case "blog":
      return contents?.blogposts ?? []

    default:
      return contents?.banner ?? []
  }
}
