"use client"
import React, { useState } from "react"
import Image from "next/image"

const MyConstituencyBanner = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false)

  const handleImageClick = () => {
    setIsVideoVisible(true)
  }
  return (
    <>
      <div className="">
        {!isVideoVisible ? (
          <div className="relative lg:h-[84vh] h-[60vh] w-full">
            <Image
              src="/home_images/home_banner.png"
              alt="V. D. Satheesan speaking about North Paravur constituency"
              priority
              sizes="100vw"
              className="w-full lg:h-[84vh] h-[60vh] cursor-pointer bg-no-repeat object-cover"
              width={1000}
              height={1000}
              onClick={handleImageClick}
            />
            <div className="absolute inset-0 flex items-center justify-center ">
              <Image
                src="/play-button1.svg"
                alt="Play Button"
                sizes="96px"
                className="w-24 h-24 cursor-pointer  rounded-full"
                width={1000}
                height={1000}
                onClick={handleImageClick}
              />
            </div>
          </div>
        ) : (
          <iframe
            width="100%"
            height="680"
            src="https://www.youtube-nocookie.com/embed/tZudcGhRg00"
            title="&#39;പൊന്നു ഷംസീറേ, എല്ലാത്തിലും കയറി അഭിപ്രായം പറയല്ലേ..&#39;&#39;: | VD Satheesan | Niyamasabha"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            
          ></iframe>
        )}
      </div>
    </>
  )
}

export default MyConstituencyBanner
