"use client"
import React, { useState } from "react"
import { FaFacebook } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import Image from "next/image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { X, ZoomIn, ZoomOut, Share2 } from "lucide-react"

export default function SimpleSlider() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [zoomLevel, setZoomLevel] = useState(1)
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false)
  const [popupImage, setPopupImage] = useState(null)

  const openPopup = (image) => {
    setZoomLevel(1) 
    setPopupImage(image)
    setIsPopupOpen(true)

  }

  const closePopup = () => setIsPopupOpen(false)

  const zoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.2, 3)) // Max zoom: 3x
  const zoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.2, 0.5)) // Min zoom: 0.5x

  const handleShare = () => {
    setIsShareMenuOpen(!isShareMenuOpen) 
  }

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = popupImage?.src // Image URL
    link.download = "image.png" // Name of the downloaded image
    link.click()
  }

  const shareOnFacebook = () => {
    const url =
      "https://www.facebook.com/sharer/sharer.php?u=" + window.location.href
    window.open(url, "_blank")
  }

  const shareOnTwitter = () => {
    const url = "https://twitter.com/intent/tweet?url=" + window.location.href
    window.open(url, "_blank")
  }

  const shareOnPinterest = () => {
    const url =
      "https://pinterest.com/pin/create/button/?url=" + window.location.href
    window.open(url, "_blank")
  }

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplaySpeed: 3000,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
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
        },
      },
    ],
  }

  const images = [
    {
      src: "/sincere_images/what_drives_me_images/education_img.png",
      alt: "Education",
    },
    {
      src: "/sincere_images/what_drives_me_images/secularism_img.png",
      alt: "Secularism",
    },
    {
      src: "/sincere_images/what_drives_me_images/women_img.jpg",
      alt: "Women's Rights",
    },
    {
      src: "/sincere_images/what_drives_me_images/pr_img.png",
      alt: "Democracy",
    },
    {
      src: "/sincere_images/what_drives_me_images/env_img.png",
      alt: "Environment",
    },
    {
      src: "/sincere_images/what_drives_me_images/jail_img.png",
      alt: "Personal Freedom",
    },
    {
      src: "/sincere_images/what_drives_me_images/speech-01.jpg",
      alt: "Progressive Ideals",
    },
  ]

  return (
    <>
      <div className="text-2xl font-semibold text-center  p-2  ">
        {/* Optional introduction or description */}
      </div>
      <div className="lg:flex container mx-auto">
        <div className="lg:w-[15%] lg:my-10 bg-[#233876] flex items-center justify-center px-2">
          <p className="text-white lg:text-3xl text-[28px]  font-semibold p-4 text-center ">
            What Drives Me
          </p>
        </div>
        <div className="lg:w-[82%] ">
          <Slider {...settings} className="mx-auto container flex-1 px-2 flex justify-center items-center">
            {images.map((image, index) => (
              <div className="p-2" key={index}>
                <div
                  className="relative group cursor-pointer"
                  onClick={() => openPopup(image)}
                >
                  <Image
                    width={500}
                    height={550}
                    src={image.src}
                    alt={image.alt}
                    className="w-full grayscale group-hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-xl">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="w-[3%] lg:my-10 hidden md:block">
          <div className="w-full h-full bg-[#233876] flex-1"></div>
        </div>
      </div>

      {/* Popup Modal */}
      {isPopupOpen && popupImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center"
          onClick={closePopup}
        >
          <div
            className="p-4 rounded-lg max-w-[90vw] max-h-[95vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{ transform: `scale(${zoomLevel})` }}
              className="transition-transform duration-300 flex justify-center items-center"
            >
              <Image
                width={800}
                height={800}
                src={popupImage.src}
                alt={popupImage.alt}
                className="w-full h-auto"
              />
            </div>

            {/* Share Options */}
            {isShareMenuOpen && (
              <div className="absolute flex flex-col top-12 right-0 p-4 rounded-lg shadow-lg space-y-2 bg-white">
                <button
                  onClick={shareOnFacebook}
                  className="text-blue-600 hover:bg-blue-200 p-2 rounded-lg"
                >
                  <span className="flex gap-2 items-center">
                    {" "}
                    Share on <FaFacebook />
                  </span>
                </button>
                <button
                  onClick={shareOnTwitter}
                  className=" hover:bg-gray-200 p-2 rounded-lg"
                >
                 <span className="flex gap-2 items-center"> Share on <FaXTwitter/></span>
                </button>
                <button
                  onClick={shareOnPinterest}
                  className="text-red-600 hover:bg-red-200 p-2 rounded-lg"
                >
                  <span className="flex gap-2 items-center">Share on <FaPinterest/></span>
                </button>
                <button
                  onClick={handleDownload}
                  className="text-green-600 hover:bg-green-200 p-2 rounded-lg"
                >
                 <span className="flex gap-2 items-center"> Download Image <MdOutlineFileDownload/></span>
                </button>
              </div>
            )}

            {/* Controls */}
            <div className="absolute right-2 top-0 flex space-x-4 p-2 rounded-lg">
              <button
                onClick={zoomIn}
                className="text-white p-2 hover:bg-green-500 rounded-lg"
              >
                <ZoomIn size={25} />
              </button>
              <button
                onClick={zoomOut}
                className="text-white p-2 hover:bg-yellow-500 rounded-lg"
              >
                <ZoomOut size={25} />
              </button>
              <button
                onClick={handleShare}
                className="text-white p-2 hover:bg-blue-500 rounded-lg"
              >
                <Share2 size={25} />
              </button>
              <button
                className=" top-0 right- left-0 text-white text-xl font-bold  hover:bg-red-500 rounded-full p-2"
                onClick={closePopup}
              >
                <X size={25} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
