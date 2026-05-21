import React from "react"
import NewsLettersComponents from "@/src/components/newsletters"
import { pageMetadata } from "@/src/config/seo"

export const metadata = pageMetadata("/newsletters")

const Page = () => {
  return <NewsLettersComponents />
}

export default Page
