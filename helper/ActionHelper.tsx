export const actionHandler = (item: any, router: any) => {
  switch (item?.action_type) {
    case "category":
      return router.push(`/category?id=${item?.action_id}`)

    case "product":
      return router.push(`/product?id=${item?.action_id}`)

    case "brand":
      return router.push(`/brand?id=${item?.action_id}`)

    case "url":
      return (window.location.href = item?.url)

    default:
      return
  }
}
