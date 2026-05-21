import React from "react"
import Image from "next/image"

const PressReleasesBanner = () => {
  return (
    <>
      <div className="relative">
        <Image
          className="w-full lg:h-[84vh] h-[60vh]"
          width={1050}
          height={850}
          src="/press_release/press.jpeg"
          alt="V. D. Satheesan press releases"
          priority
          sizes="100vw"
        />
        <h1 className="absolute top-1/2 lg:left-28 transform -translate-y-1/2 text-center lg:text-[50px] text-[40px] px-3  text-[#033B5F] merriweather-regular">
          Press Releases
        </h1>
      </div>
    </>
  )
}

export default PressReleasesBanner
