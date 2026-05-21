import React from "react"
import PressreleasesComponents from "@/src/components/press-releases"
import { pageMetadata } from "@/src/config/seo"

export const metadata = pageMetadata("/press-releases")

const Page = () => {
  return <PressreleasesComponents />
}

export default Page
