"use client"
import React, { useState } from "react"
import Image from "next/image"
import TimeLine from "./TimeLine"
import Link from "next/link"
const Homepage = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false)

  const handleImageClick = () => {
    setIsVideoVisible(true)
  }
  return (
    <div>
      {!isVideoVisible ? (
        <div className="relative lg:h-[84vh] h-[60vh] w-full">
          <Image
            src="/home_images/home_banner.png"
            alt="V. D. Satheesan official website hero banner"
            priority
            fetchPriority="high"
            sizes="100vw"
            className="w-full lg:h-[84vh] h-[60vh] cursor-pointer bg-no-repeat object-cover"
            width={1000}
            height={1000}
            onClick={handleImageClick}
          />
          <div className="absolute inset-0 flex items-center justify-center h-full w-full">
            <Image
              src="/play-button1.svg"
              alt="Play Button"
              className="w-24 h-24 cursor-pointer rounded-full"
              width={1000}
              height={1000}
              onClick={handleImageClick}
            />
          </div>
        </div>
      ) : (
        <iframe
          width="100%"
          height="700"
          src="https://www.youtube-nocookie.com/embed/1DSQ3D0jpaE?autoplay=1"
          title="VDS Hero Banner V2"
          frameBorder="0"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="lg:h-lvh h-[60vh]"
        ></iframe>
      )}
      {/* </div> */}
      <TimeLine />
      <div className="  bg-[url('/home_images/about_satheesan_background.png')] mx-auto  w-full h-full ">
        <div className="grid lg:grid-cols-2 grid-flow-row gap-4 p-5  container mx-auto">
          <div className="flex justify-center mt-10 ">
            <Image
              width={400}
              height={350}
              src="/home_images/vds_img-home1.png"
              className="h-full  w-[89vh]"
              alt="V. D. Satheesan portrait"
              priority
              fetchPriority="high"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>

          <div className=" mt-10 border-2  border-[#033B5F]  text-center flex justify-center items-center  ">
            <div>
              <p className="text-[#035C96] lg:text-[34px] text-[24px] font-semibold merriweather-bold">
                Hello, I am
              </p>
              <h6 className="text-[#035C96] lg:text-[34px] text-[24px] font-semibold merriweather-bold mb-3">
                VD Satheesan…
              </h6>
              <Link
                href="/sincerely-me"
                className="border lg:border-2 border-sky-800 px-6   p-2 items-center justify-center bg-white rounded-sm text-[#035C96] text-[18px]  w-40 mb-5 merriweather-regular"
                target=""
                rel="noopener noreferrer"
              >
                Know Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
