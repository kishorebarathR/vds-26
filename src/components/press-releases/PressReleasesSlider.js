"use client"
import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {
  FaArrowCircleLeft,
  FaArrowRight,
  FaArrowCircleRight,
} from "react-icons/fa"
import { sliderData } from "@/src/utils/pressReleasesData"

// Arrow Components
const NextArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{ ...style, display: "block", zIndex: 1, borderRadius: "50%" }}
    onClick={onClick}
  >
    <FaArrowRight />
  </div>
)

const PrevArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{ ...style, display: "block", zIndex: 1, borderRadius: "50%" }}
    onClick={onClick}
  >
    <FaArrowCircleLeft />
  </div>
)

const MobileNextArrow = ({ onClick }) => (
  <div
    className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10"
    onClick={onClick}
  >
    <FaArrowCircleRight size={18} color="black" />
  </div>
)

const MobilePrevArrow = ({ onClick }) => (
  <div
    className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10"
    onClick={onClick}
  >
    <FaArrowCircleLeft size={18} color="black" />
  </div>
)

export default function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          nextArrow: <MobileNextArrow />,
          prevArrow: <MobilePrevArrow />,
        },
      },
    ],
  }

  return (
    <>
      <style>
        {`
        .slick-prev:before, .slick-next:before {
          color: black;
          font-size: 20px;
        }`}
      </style>
      <div className="container mx-auto">
        <div className="text-2xl font-medium text-left px-10 ">
          <h2 className="lg:text-[24px] text-[22px] pt-10 ">
            Stay updated with the latest announcements and updates on my efforts
            to create positive change in the country.
          </h2>
        </div>

        <Slider {...settings} className="mx-auto lg:mb-10">
          {sliderData.map((item, index) => (
            <div key={index} className="lg:p-4 p-7">
              <div className="block max-w-sm p-5 bg-white rounded-2xl h-52 shadow-lg">
                <h5>{item.date}</h5>
                <h5 className="pb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  )
}
