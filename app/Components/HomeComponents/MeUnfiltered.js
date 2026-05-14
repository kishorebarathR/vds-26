"use client"
import React, { useEffect, useState, useRef } from "react"
import Image from "next/image"

const LazyIframe = ({ src, title, ...props }) => {
  const [isVisible, setIsVisible] = useState(false)
  const iframeRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.1,
      }
    )

    if (iframeRef.current) {
      observer.observe(iframeRef.current)
    }

    return () => {
      if (iframeRef.current) {
        observer.unobserve(iframeRef.current)
      }
    }
  }, [])

  return (
    <div ref={iframeRef} {...props}>
      {isVisible ? (
        <iframe
          src={src}
          title={title}
          width="100%"
          height="100%"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      ) : (
        <div style={{ width: "100%", height: "100%" }}>Loading...</div>
      )}
    </div>
  )
}

const MeUnfiltered = () => {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://platform.twitter.com/widgets.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="relative w-full merriweather-regular">
      <div className="bg-[url('/home_images/gallery-img-07.png')] bg-cover bg-center w-full h-full">
        <span className="absolute inset-0 bg-black opacity-70"></span>
        {/* Overlay */}
        <div className="relative z-10 container mx-auto">
          <h1 className="lg:text-[34px] text-[28px] font-bold mb-14 text-center text-white pt-10">
            Me, Unfiltered
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 container mx-auto pb-10 text-white">
            {/* First column (Twitter feed) */}
            <div className="flex justify-center items-center w-full">
              <a
                className="twitter-timeline"
                data-width="350"
                data-height="500"
                href="https://x.com/vdsatheesan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="V. D. Satheesan on X"
              >
                Tweets by vdsatheesan
              </a>
            </div>

            {/* Second column (Instagram logo) */}
            <div className="mx-5 lg:mx-0 ">
              <div className="relative flex min-h-[280px] w-full items-center justify-center overflow-hidden rounded-lg bg-[url('/insta.jpg')] bg-cover bg-center bg-no-repeat shadow-md md:min-h-[490px]">
                <a
                  href="https://www.instagram.com/vdsatheesanleaderofopposition/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="V. D. Satheesan on Instagram"
                  className="relative z-10 inline-flex"
                >
                  <Image
                    src="/home_images/Instagram-Logo.wine.svg"
                    alt="Instagram logo"
                    className="h-30 w-30 drop-shadow-lg"
                    loading="lazy"
                    width={100}
                    height={100}
                  />
                </a>
              </div>
            </div>

            {/* Third column (Facebook page iframe) */}
            <div className="flex justify-center items-center w-full px-[18px] sm:px-0">
              <LazyIframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FVDSatheeshanParavur&tabs=timeline&width=350&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
                title="Facebook Page"
                style={{
                  width: "100%",
                  height: "490px",
                  borderRadius: "17px",
                }}
              />
            </div>

            {/* Fourth column (Upcoming schedules) */}
            <div className="mx-5 lg:mx-0 ">
              <div className="bg-white rounded-xl shadow-lg p-4  w-full h-full  ">
                <div className="bg-blue-900 text-white font-semibold text-lg px-4 py-2 rounded-t-xl">
                  Upcoming Schedules
                </div>
                <div className="divide-y divide-gray-300">
                  <div className="py-3 px-4">
                    <p className="text-gray-700">
                      18/4/2023 | Upcoming event and details will appear here
                    </p>
                  </div>
                  <div className="py-3 px-4">
                    <p className="text-gray-700">
                      18/4/2023 | Upcoming event and details will appear here
                    </p>
                  </div>
                  <div className="py-3 px-4">
                    <p className="text-gray-700">
                      18/4/2023 | Upcoming event and details will appear here
                    </p>
                  </div>
                  <div className="py-3 px-4">
                    <p className="text-gray-700">
                      18/4/2023 | Upcoming event and details will appear here
                    </p>
                  </div>
                  <div className="py-3 px-4">
                    <p className="text-gray-700">
                      18/4/2023 | Upcoming event and details will appear here
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MeUnfiltered
