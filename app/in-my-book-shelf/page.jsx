import React from "react"
import InmyBookShelfComponents from "@/src/components/in-my-book-shelf"
import { pageMetadata } from "@/src/config/seo"

export const metadata = pageMetadata("/in-my-book-shelf")

const Page = () => {
  return <InmyBookShelfComponents />
}

export default Page
