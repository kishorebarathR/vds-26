"use client"
import React, { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"

const timelineData = [
  { year: 1980, path: "/my-journey/carousel-img-2.png", alt: "Journey event 1980" },
  { year: 1985, path: "/my-journey/carousel-img-6.png", alt: "Journey event 1985" },
  { year: 1990, path: "/my-journey/carousel-img-8.png", alt: "Journey event 1990" },
  { year: 1995, path: "/my-journey/carousel-img-10.png", alt: "Journey event 1995" },
  { year: 2000, path: "/my-journey/carousel-img-14.png", alt: "Journey event 2000" },
  { year: 2005, path: "/my-journey/carousel-img-16.png", alt: "Journey event 2005" },
  { year: 2010, path: "/my-journey/carousel-img-20.png", alt: "Journey event 2010" },
  { year: 2015, path: "/my-journey/carousel-img-24.png", alt: "Journey event 2015" },
  { year: 2020, path: "/my-journey/carousel-img-26.png", alt: "Journey event 2020" },
  { year: 2022, path: "/my-journey/carousel-img-27.png", alt: "Journey event 2022" },
]

const Timeline = () => {
  const [hovered, setHovered] = useState({ year: null, x: 0 })
  const timeoutRef = useRef(null)

  const handleMouseEnter = (year, e) => {
    clearTimeout(timeoutRef.current)
    const rect = e.currentTarget.getBoundingClientRect()
    setHovered({ year, x: rect.left + rect.width / 2 })
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHovered({ year: null, x: 0 })
    }, 200)
  }

  const hoveredItem = timelineData.find(item => item.year === hovered.year)

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Hover Image */}
      {hoveredItem && (
        <div
          className="w-24 absolute z-50 p-1 bg-white rounded-lg shadow-xl transition-opacity duration-300"
          onMouseEnter={() => clearTimeout(timeoutRef.current)}
          onMouseLeave={handleMouseLeave}
          style={{
            left: hovered.x,
            transform: "translateX(-50%)",
            top: "calc(50% - 150px)",
          }}
        >
          <Link href={`/my-journey?year=${hoveredItem.year}`}>
            <Image
              src={hoveredItem.path}
              alt={hoveredItem.alt}
              width={1040}
              height={1000}
              className="w-24 h-24 transition-transform duration-300 hover:scale-105 cursor-pointer"
            />
          </Link>
        </div>
      )}

      {/* Timeline */}
      <div className="w-full ">
        <div className="relative lg:pt-5 pt-1   bg-[#035C96] shadow-md pb-5">
          {/* Minor Ticks */}
          <div className="absolute top-12 lg:top-19 left-0 w-full h-full z-0 flex justify-between">
            {Array.from({ length: 100 }).map((_, i) => (
              <div key={i} className="h-[16px] w-[2px] bg-white opacity-50"></div>
            ))}
          </div>

          {/* Year Markers */}
          <div className="relative z-10">
            {/* Desktop View */}
            <div className="sm:flex hidden items-end justify-between">
              {timelineData.map((item) => (
                <div
                  key={item.year}
                  className="relative flex flex-col items-center cursor-pointer group"
                  onMouseEnter={(e) => handleMouseEnter(item.year, e)}
                  onMouseLeave={handleMouseLeave}
                  style={{ width: `${100 / timelineData.length}%` }}
                >
                  <Link href={`/my-journey?year=${item.year}`} className="absolute inset-0" />
                  <span className="text-white text-sm md:text-[20px] font-extrabold group-hover:text-yellow-400 transition-colors">
                    {item.year}
                  </span>
                  <div className="w-[2px] h-4  mt-2"></div>
                </div>
              ))}
            </div>

            {/* Mobile View (Scrollable) */}
            <div className="sm:hidden overflow-x-auto scrollbar-hide">
              <div className="flex items-end w-max px-4 gap-6">
                {timelineData.map((item) => (
                  <div
                    key={item.year}
                    className="flex flex-col items-center cursor-pointer group min-w-[64px] relative"
                    onMouseEnter={(e) => handleMouseEnter(item.year, e)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link href={`/my-journey?year=${item.year}`} className="absolute inset-0" />
                    <span className="text-white text-[14px] font-bold group-hover:text-yellow-400 transition-colors">
                      {item.year}
                    </span>
                    <div className="w-[2px] h-4 bg-white mt-1"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Timeline
