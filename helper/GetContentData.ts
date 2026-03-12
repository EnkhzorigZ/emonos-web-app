export const get_content_data = (data: any, key: any) => {
  if (data?.length > 0) {
    const contents = data[0]
    if (key == "top_banner") {
      return contents && contents?.top_banner?.length > 0
        ? contents?.top_banner
        : []
    }

    const type = contents?.content_type
    switch (type) {
      case "banner":
        return contents?.banner

      case "product":
        return contents?.products

      case "category":
        return contents?.categories

      case "brand":
        return contents?.brands

      case "prnews":
        return contents?.prnews

      case "blog":
        return contents?.blogposts

      default:
        return contents?.banner
    }
  } else {
    return []
  }
}
