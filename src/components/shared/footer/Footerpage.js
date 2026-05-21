"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import FormComponents from '@/src/components/form/Contactform'
const currentYear = new Date().getFullYear()
const Footerpage = () => {
  const pathname = usePathname()

  if (pathname === "/get-in-touch") {
    return null
  }

  return (
    <div>
      <div
        className="grid lg:grid-cols-3 p-5 shadow"
        style={{
          backgroundImage: "url('/footer_images/Get-in-touch-background.png')",
        }}
      >
        {/* Related Websites Section */}
        <div className="text-white ">
          <h3 className=" lg:text-[30px] text-[28px] font-semibold p-5">Related Websites</h3>
          <div className="lg:text-[20px] text-[18px]">
            <Link href="https://www.inc.in/">
              <p className="p-5">Indian National Congress</p>
            </Link>
            <Link href="https://www.kpcc.org.in/">
              <p className="p-5">Kerala Pradesh Congress Committee</p>
            </Link>
            <Link href="https://iyc.in/">
              <p className="p-5">Indian Youth Congress</p>
            </Link>
            <Link href="https://niyamasabha.nic.in/">
              <p className="p-5">Kerala Legislative Assembly</p>
            </Link>
          </div>
        </div>

        {/* Be My Friend Form Section */}
       <FormComponents />


        <div className="fixed bottom-5 right-5 z-50">
          <Link href="/get-in-touch">
            <Image
              width={400}
              height={100}
              className="bounce-in w-44"
              src="/footer_images/ask-me-footer.png"
              alt="Ask Me Footer"
            />
          </Link>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-gradient-to-b from-[#035C96] to-[#022E4B] py-5 text-center text-white text-[16px]  shadow-t ">
        Copyright © {currentYear}  All rights reserved.
      </div>
    </div>
  )
}

export default Footerpage
