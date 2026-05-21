import { absoluteUrl, siteUrl } from "@/src/config/seo"

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteUrl,
  }
}
