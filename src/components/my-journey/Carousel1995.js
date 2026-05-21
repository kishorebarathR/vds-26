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
    "/my-journey/carousel-img-11.png",
    "/my-journey/carousel-img-12.png",
    "/my-journey/carousel-img-10.png",
    "/my-journey/carousel-img-11.png",
    "/my-journey/carousel-img-12.png",
    "/my-journey/carousel-img-10.png",
  ]

  return (
    <div className="bg-[#D4EBE4] carosel-body merriweather-regular">
      <div className="container mx-auto p-5">
        <h3 className="text-3xl font-semibold p-2 bg-[#398AF5] w-52 text-center text-white">
          1995-2000
        </h3>

        <div className="bg-white rounded-3xl p-3 mt-5">
          <Slider {...settings}>
            {imagePaths.map((path, index) => (
             <div key={index} className="w-full rounded-2xl lg:h-80 h-72">
                <Image
                  width={500}
                  height={550}
                  src={path}
                  alt={`Slide image ${index + 1}`}
                  className="w-full h-full rounded-3xl img-s"
                  loading="lazy"
                />
              </div>
            ))}
          </Slider>

          <div className="lg:flex pb-5">
            <div className="lg:w-[80%]">
            <p className="text-black text-[18px] text-left p-5 mt-5">
                This period marked a transition into politics for VD Satheeshan.
                He contested the election from the Paravur assembly seat, though
                narrowly missing victory. On the personal front, he married
                Lakshmi Priya, and they welcomed their daughter, Unnimaya, into
                their lives. Despite the electoral setback, he remained
                dedicated to his legal practice at the Kerala High Court.
              </p>

              <div className="flex flex-row px-4 pb-5">
                <div className="flex-col">
                  <a
                    href="https://www.facebook.com/share_channel/?link=https%3A%2F%2Fvdsatheesan.com%2Fmy-journey%2F&app_id=966242223397117&source_surface=external_reshare&display&hashtag"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-10 fill-current text-[#36528C] hover:text-black transition-colors duration-300"
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
            <div className="lg:w-[20%]">
              <Image
                width={500}
                height={550}
                src="/my-journey/total-votes-1996.svg"
                alt="Vote summary"
                className="w-full rounded-3xl img-s"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
