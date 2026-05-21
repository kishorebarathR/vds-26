"use client"
import React, { useEffect } from "react"
import Image from "next/image"
import AOS from "aos"
import "aos/dist/aos.css"

const PublicEye = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <div>
      <div className="merriweather-regular">
        <div
          className="bg-[url('/home_images/about_satheesan_background.png')]  "
          loading="lazy"
        >
          <p className="lg:text-[34px] text-[28px] text-[#035C96] text-center font-semibold pb-5">
            In the Public Eye
          </p>
          {/* start */}
          <div className="lg:flex gap-1 lg:p-5 container mx-auto">
            {/* First Row Start */}
            <div>
              <Image
                width={500}
                height={300}
                loading="lazy"
                data-aos="zoom-in-up"
                className="hover:filter hover:brightness-50 duration-700 mb-1"
                src="/home_images/PublicEye_Img/vds-1.jpeg"
                alt="public_eye_images"
              />
              <Image
                width={500}
                height={300}
                loading="lazy"
                data-aos="zoom-in-up"
                className="hover:filter hover:brightness-50 duration-700 mb-1"
                src="/home_images/PublicEye_Img/vds-12.png"
                alt="public_eye_images"
              />
              <Image
                width={500}
                height={300}
                loading="lazy"
                data-aos="zoom-in-up"
                className="hidden lg:block hover:filter hover:brightness-50 duration-700 mb-1"
                src="/home_images/PublicEye_Img/vds-13.png"
                alt="public_eye_images"
              />
              <Image
                width={500}
                height={300}
                loading="lazy"
                data-aos="zoom-in-up"
                className="hover:filter hover:brightness-50 duration-700 mb-1"
                src="/home_images/PublicEye_Img/vds-20.jpg"
                alt="public_eye_images"
              />
              <Image
                width={500}
                height={300}
                loading="lazy"
                data-aos="zoom-in-up"
                className="hidden lg:block hover:filter hover:brightness-50 duration-700 mb-1 "
                src="/home_images/PublicEye_Img/vds-24.jpeg"
                alt="public_eye_images"
              />
              <Image
                width={500}
                height={300}
                loading="lazy"
                data-aos="zoom-in-up"
                className="hover:filter hover:brightness-50 duration-700 mb-1 lg:h-32"
                src="/home_images/PublicEye_Img/vds-30.jpeg"
                alt="public_eye_images"
              />
            </div>
            
            {/* Second Row Start */}
            <div>
              <Image
                width={500}
                height={300}
                loading="lazy"
                data-aos="zoom-in-up"
                className="hover:filter hover:brightness-50 duration-700 mb-1"
                src="/home_images/PublicEye_Img/vds2.jpeg"
                alt="public_eye_images"
              />
              <Image
                width={500}
                height={300}
                loading="lazy"
                data-aos="zoom-in-up"
                className="hidden lg:block hover:filter hover:brightness-50 duration-700 mb-1"
                src="/home_images/PublicEye_Img/vds-8.jpeg"
                alt="public_eye_images"
              />
              <Image
                width={500}
                height={300}
                loading="lazy"
                data-aos="zoom-in-up"
                className="hidden lg:block hover:filter hover:brightness-50 duration-700 mb-1"
                src="/home_images/PublicEye_Img/vds-23.jpeg"
                alt="public_eye_images"
              />
              <Image
                width={500}
                height={300}
                loading="lazy"
                data-aos="zoom-in-up"
                className="hidden lg:block hover:filter hover:brightness-50 duration-700 mb-1"
                src="/home_images/PublicEye_Img/vds-18.png"
                alt="public_eye_images"
              />
              <Image
                width={500}
                height={300}
                loading="lazy"
                data-aos="zoom-in-up"
                className=" hidden lg:block hover:filter hover:brightness-50 duration-700 mb-1 "
                src="/home_images/PublicEye_Img/vds-31.jpeg"
                alt="public_eye_images"
              />
            </div>
            {/*Third Row Start */}
            <div>
              <Image
                width={500}
                height={300}
                loading="lazy"
                data-aos="zoom-in-up"
                className=" hidden lg:block hover:filter hover:brightness-50 duration-700 mb-1 w-full"
                src="/home_images/PublicEye_Img/vds-3.jpeg"
                alt="public_eye_images"
              />
              <Image
                width={500}
                height={300}
                loading="lazy"
                data-aos="zoom-in-up"
                className="hidden lg:block hover:filter hover:brightness-50 duration-700 mb-1"
                src="/home_images/PublicEye_Img/vds-7.jpeg"
                alt="public_eye_images"
              />
              <Image
                width={500}
                height={300}
                loading="lazy"
                data-aos="zoom-in-up"
                className="hidden lg:block hover:filter hover:brightness-50 duration-700 mb-1"
                src="/home_images/PublicEye_Img/vds-15.png"
                alt="public_eye_images"
              />
              <Image
                width={500}
                height={300}
                loading="lazy"
                data-aos="zoom-in-up"
                className="hidden lg:block hover:filter hover:brightness-50 duration-700 mb-1"
                src="/home_images/PublicEye_Img/vds-19.png"
                alt="public_eye_images"
              />
               <Image
                width={500}
                height={300}
                loading="lazy"
                data-aos="zoom-in-up"
                className="hidden lg:block hover:filter hover:brightness-50 duration-700 mb-1 "
                src="/home_images/PublicEye_Img/vds-21.png"
                alt="public_eye_images"
              />
               <Image
                width={500}
                height={300}
                loading="lazy"
                data-aos="zoom-in-up"
                className="hidden lg:block hover:filter hover:brightness-50 duration-700 mb-1 "
                src="/home_images/PublicEye_Img/vds-26.jpeg"
                alt="public_eye_images"
              />
               <Image
                width={500}
                height={300}
                loading="lazy"
                data-aos="zoom-in-up"
                className="hidden lg:block hover:filter hover:brightness-50 duration-700 mb-1 h-28"
                src="/home_images/PublicEye_Img/VDS-Public-Walk-in-Kerala1.jpeg"
                alt="public_eye_images"
              />
            </div>
         {/*Fourth Row Start */}
            <div>
              <Image
                width={500}
                height={300}
                loading="lazy"
                data-aos="zoom-in-up"
                className="hidden lg:block hover:filter hover:brightness-50 duration-700 mb-1 w-full"
                src="/home_images/PublicEye_Img/vds-4.jpeg"
                alt="public_eye_images"
              />
              <Image
                width={500}
                height={300}
                loading="lazy"
                data-aos="zoom-in-up"
                className="hidden lg:block hover:filter hover:brightness-50 duration-700 mb-1 h-48"
                src="/home_images/PublicEye_Img/vds-9.jpeg"
                alt="public_eye_images"
              />
               <Image
                width={500}
                height={300}
                loading="lazy"
                data-aos="zoom-in-up"
                className="hidden lg:block hover:filter hover:brightness-50 duration-700 mb-1 h-40"
                src="/home_images/PublicEye_Img/vds-16.png"
                alt="public_eye_images"
              />
               <Image
                width={500}
                height={300}
                loading="lazy"
                data-aos="zoom-in-up"
                className=" hidden lg:block hover:filter hover:brightness-50 duration-700 mb-1 h-48"
                src="/home_images/PublicEye_Img/vds-22.png"
                alt="public_eye_images"
              />
               <Image
                width={500}
                height={300}
                loading="lazy"
                data-aos="zoom-in-up"
                className="hover:filter hover:brightness-50 duration-700 mb-1"
                src="/home_images/PublicEye_Img/vds-29.jpeg"
                alt="public_eye_images"
              />
            </div>
            {/*Fifth Row Start */}
            <div>
              <Image
                width={500}
                height={300}
                loading="lazy"
                data-aos="zoom-in-up"
                className="hidden lg:block  hover:filter  hover:brightness-50 duration-700 mb-1 h-40"
                src="/home_images/PublicEye_Img/vds-5.jpeg"
                alt="public_eye_images"
              />
               <Image
                width={500}
                height={300}
                loading="lazy"
                data-aos="zoom-in-up"
                className="hidden lg:block hover:filter hover:brightness-50 duration-700 mb-1 h-42 "
                src="/home_images/PublicEye_Img/vds-10.jpeg"
                alt="public_eye_images"
              />
               <Image
                width={500}
                height={300}
                loading="lazy"
                data-aos="zoom-in-up"
                className="hidden lg:block hover:filter hover:brightness-50 duration-700 mb-1 h-48"
                src="/home_images/PublicEye_Img/vds-17.png"
                alt="public_eye_images"
              />
               <Image
                width={500}
                height={300}
                loading="lazy"
                data-aos="zoom-in-up"
                className="hidden lg:block hover:filter hover:brightness-50 duration-700 mb-1"
                src="/home_images/PublicEye_Img/vds-23.jpeg"
                alt="public_eye_images"
              />
               <Image
                width={500}
                height={300}
                loading="lazy"
                data-aos="zoom-in-up"
                className="hover:filter hover:brightness-50 duration-700 mb-1"
                src="/home_images/PublicEye_Img/vds-27.jpeg"
                alt="public_eye_images"
              />
            </div>
          {/*Sixth Row Start */}
            <div>
              <Image
                width={500}
                height={300}
                loading="lazy"
                data-aos="zoom-in-up"
                className="hidden lg:block hover:filter hover:brightness-50 duration-700 mb-3 h-36 "
                src="/home_images/PublicEye_Img/vds-6.jpeg"
                alt="public_eye_images"
              />
            
              <Image
                width={500}
                height={300}
                loading="lazy"
                data-aos="zoom-in-up"
                className="hidden lg:block hover:filter hover:brightness-50 duration-700 mb-1 h-28 "
                src="/home_images/PublicEye_Img/vds-11.png"
                alt="public_eye_images"
              />
              <Image
                width={500}
                height={300}
                loading="lazy"
                data-aos="zoom-in-up"
                className="hidden lg:block hover:filter hover:brightness-50 duration-700 mb-1"
                src="/home_images/PublicEye_Img/vds-14.png"
                alt="public_eye_images"
              />
              
                <Image
                width={500}
                height={300}
                loading="lazy"
                data-aos="zoom-in-up"
                className="hidden lg:block hover:filter hover:brightness-50 duration-700 mb-1 h-40"
                src="/home_images/PublicEye_Img/vds-28.jpeg"
                alt="public_eye_images"
              />
            </div>
          </div>
          {/* end...*/}
        </div>
      </div>
    </div>
  )
}

export default PublicEye
