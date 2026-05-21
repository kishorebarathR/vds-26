import React from "react"
import "./globals.css"
import Header from "@/src/components/shared/header"
import Footer from "@/src/components/shared/footer"
import {
  absoluteUrl,
  defaultDescription,
  pageMetadata,
  siteName,
  siteUrl,
} from "@/src/config/seo"

export const metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  creator: siteName,
  publisher: siteName,
  keywords: [
    "V D Satheesan",
    "V. D. Satheesan",
    "VD Satheesan",
    "Kerala leader",
    "North Paravur",
    "Paravur MLA",
    "Kerala politics",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  ...pageMetadata("/"),
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteName,
  url: siteUrl,
  image: absoluteUrl("/home_images/vds-main.png"),
  description: defaultDescription,
  jobTitle: "Public servant and political leader",
  knowsAbout: [
    "Public service",
    "Social justice",
    "North Paravur",
    "Kerala politics",
  ],
}

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  description: defaultDescription,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Header />
        {children}
        <Footer /> 
      </body>
    </html>
  )
}
