import React from "react"
import HomeComponents from "@/src/components/home"
import { pageMetadata } from "@/src/config/seo"

export const metadata = pageMetadata("/")

const Page = () => {
  return <HomeComponents />
}

export default Page
