import React from "react"
import "./globals.css"
import { Merriweather } from "next/font/google"
import Script from "next/script"
import Header from "./Components/SharedComponents/Header"
import Footer from "./Components/SharedComponents/Footer"

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"], 
  variable: "--font-merriweather",
  display: "swap",
})

export const metadata = {
  title: "V. D. Satheesan: Dedicated Public Servant and Leader for Change",
  description: "Explore the journey and achievements of V. D. Satheesan, a committed leader dedicated to social justice and community welfare.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={merriweather.variable}>
      <body className={`${merriweather.className} font-sans`}>
        <Header />
        {children}
        <Footer /> 
        <Script async src="third-party.js" />
      </body>
    </html>
  )
}
