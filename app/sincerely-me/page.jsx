import React from "react"
import SincerelyMe from "@/src/components/sincerely-me"
import { pageMetadata } from "@/src/config/seo"

export const metadata = pageMetadata("/sincerely-me")

const Page = () => {
  return <SincerelyMe />
}

export default Page
