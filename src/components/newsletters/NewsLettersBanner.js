import React from "react"
import Image from "next/image"
const NewsLettersBanner = () => {
  return (
    <>
      <div className="relative merriweather-regular flex flex-col items-center justify-center w-full lg:h-[84vh] h-[60vh]">
        <Image
          width={800}
          height={700}
          className="w-full h-full object-cover"
          src="/news_letters/News-letter.png"
          alt="V. D. Satheesan newsletters"
          priority
          sizes="100vw"
        />
        <div className="flex items-center justify-center w-full h-full -mt-[60vh] lg:-mt-[84vh]">
          <h6 className="text-center lg:text-[50px] text-[40px]  text-white lg:ms-20">
            Newsletters
          </h6>
        </div>
      </div>
    </>
  )
}

export default NewsLettersBanner
