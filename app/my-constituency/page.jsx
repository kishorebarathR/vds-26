import React from "react"
import MyConstituency from "@/src/components/my-constituency"
import { pageMetadata } from "@/src/config/seo"

export const metadata = pageMetadata("/my-constituency")

const Page = () => {
  return <MyConstituency />
}

export default Page
