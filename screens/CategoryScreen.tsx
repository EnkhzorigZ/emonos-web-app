"use client"

import { parseAsInteger, useQueryState } from "nuqs"

export default function CategoryScreen() {
  const [categoryId, setCategoryId] = useQueryState("id")

  return <div>{categoryId}</div>
}
