import React from "react"
import Myjourney from "@/src/components/my-journey"
import { pageMetadata } from "@/src/config/seo"

export const metadata = pageMetadata("/my-journey")

const Page = () => {
  return <Myjourney />
}

export default Page
