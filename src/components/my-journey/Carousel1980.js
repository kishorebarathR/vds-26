"use client"
import React from "react"
import Image from "next/image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FaXTwitter } from "react-icons/fa6"
export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    className: "center",
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const imagePaths = [
    "/my-journey/carousel-img-2.png",
    "/my-journey/carousel-img-3.png",
    "/my-journey/carousel-imgs-01.jpg",
    "/my-journey/carousel-img-2.png",
    "/my-journey/carousel-img-3.png",
    "/my-journey/carousel-imgs-01.jpg",
  ]

  return (
    <div className="bg-[#F2EBCD] carosel-body merriweather-regular">
      <div className="container mx-auto p-5">
        <h1 className="text-3xl font-semibold p-2 bg-[#398AF5] w-52 text-center text-white merriweather-regular">
          1980-85
        </h1>
        <div className="bg-white rounded-3xl p-3 mt-5">
          <Slider {...settings}>
            {imagePaths.map((path, index) => (
              <div key={index} className="w-full rounded-2xl lg:h-80 h-72">
                <Image
                  width={1000}
                  height={850}
                  src={path}
                  alt={`Carousel image ${index + 1}`}
                  loading="lazy"
                  className="w-full h-full rounded-3xl img-s"
                />
              </div>
            ))}
          </Slider>

          <p className="text-black text-[18px] text-left p-5 mt-5">
            During this period, VD Satheeshan embarked on his educational
            journey. He successfully passed the SSLC examination from High
            School in Panangad and subsequently enrolled at SH College, Thevara
            for Pre-degree studies. Notably, he was elected as the Arts Club
            secretary to the college union and served as a councillor for both
            the Kerala and MG University unions multiple times. His oratory
            skills were evident as he consistently emerged victorious in
            inter-university debate and speech competitions. In addition to his
            academic achievements, he held leadership positions, serving as the
            KSU unit president and Kanayannur Taluk president. VD Satheeshan
            also pursued a Bachelor&apos;s degree in Sociology from Kerala
            University during this period.
          </p>

          <div className="flex flex-row px-4 pb-5">
            <div className="flex-col">
              <a
                href="https://www.facebook.com/share_channel/?link=https%3A%2F%2Fvdsatheesan.com%2Fmy-journey%2F&app_id=966242223397117&source_surface=external_reshare&display&hashtag"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="e-font-icon-svg e-fab-facebook w-10 fill-current text-[#36528C] hover:text-black transition-colors duration-300"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 44.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                </svg>
              </a>
            </div>
            <div className="flex-col px-2">
              <a
                href="https://x.com/intent/post?text=+https%3A%2F%2Fvdsatheesan.com%2Fmy-journey%2F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter className="w-10 h-10 text-white hover:bg-black transition-colors duration-300 bg-[#36528C] rounded-full p-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
