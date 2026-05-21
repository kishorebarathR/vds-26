import React from "react"
import Image from "next/image"
const SincerelyMe = () => {
  return (
    <>
      <div className="bg-[#EFEFEF] merriweather-bold text-2xl">
        <div className="lg:flex lg:flex-row">
          <div className="flex flex-col lg:w-1/3 lg:pr-5 lg:text-start">
            <div className="text-left font-semibold p-5 lg:text-[22px] text-[18px]">
              <p>“In a democracy, we</p>
              <p>don’t need</p>
              <p>monologues</p>
              <p>We need dialogue”</p>
            </div>
          </div>

          <div className="flex flex-col lg:w-1/3  lg:text-center justify-center items-center">
            <h1 className=" lg:text-[70px] text-[30px]  mb-4">Sincerely, Me</h1>
            <Image
              width={400}
              height={140}
              className="lg:w-96 w-80 "
              src="/sincere_images/sincerely-img-11.png"
              alt="Sincerely Me by V. D. Satheesan"
              priority
              sizes="(min-width: 1024px) 384px, 320px"
            />
          </div>
        </div>

        <div className="mx-auto p-5">
          <div className="border-t-8 border-red-900 lg:flex">
            <Image
              width={150}
              height={100}
              className="w-96 p-0"
              src="/sincere_images/si_1.png"
              alt="sincere_images"
              loading="lazy"
            />
            <h6 className="bg-[#9D9D9D] text-white text-[16px] lg:text-[18px]  lg:p-6 p-10  lg:w-72 flex items-center justify-center text-left">
              “We need to strike a balance between sustainable development and
              environment…
            </h6>

            <div className="bg-sky-800 w-full">
              <h6 className="text-white text-[16px] lg:text-[18px] p-12 lg:w-3/5 flex items-center justify-center text-left">
                There is no space for the conventional kind of opposition for
                the sake of opposing something in this era. We need to have a
                consensus and continuity in developmental activities”
              </h6>
            </div>
            <Image
              width={1080}
              height={500}
              className="hidden lg:block top-36  p-5 bottom-0 right-0 absolute me-20 w-80 h-96  "
              src="/sincere_images/si_2.png"
              alt="sincere_images"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default SincerelyMe
