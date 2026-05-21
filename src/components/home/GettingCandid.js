"use client"
import React, { useState, useRef, useEffect } from "react"
import { videos } from "@/src/utils/gettingCandidData"
const VideoPlayer = () => {
  const iframeRef = useRef(null)
  const [currentVideo, setCurrentVideo] = useState({
    url: "https://www.youtube-nocookie.com/embed/1cmf-VHJys0",
    title: "Episode 36 |",
    title2: "Hari Marar, MD And CEO Of Bangalore Airport with V.D.Satheesan",
    description:
      "Hari Marar, MD And CEO Of Bangalore Airport with V.D.Satheesan",
  })
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentVideoId, setCurrentVideoId] = useState("UCpYogDflbQ")
  const [lastPlayedTime, setLastPlayedTime] = useState(0)


  // Listen to messages from the iframe to track playback time
  useEffect(() => {
    const handleMessage = (event) => {
      if (
        event.data &&
        typeof event.data === "string" &&
        event.data.includes("infoDelivery")
      ) {
        const data = JSON.parse(event.data.slice(event.data.indexOf("{")))
        if (data && data.info && data.info.currentTime) {
          setLastPlayedTime(data.info.currentTime)
        }
      }
    }

    window.addEventListener("message", handleMessage)
    return () => window.removeEventListener("message", handleMessage)
  }, [])

  const postMessageToPlayer = (command, args = []) => {
    iframeRef.current?.contentWindow.postMessage(
      JSON.stringify({ event: "command", func: command, args }),
      "*"
    )
  }

  const playVideo = () => {
    postMessageToPlayer("playVideo")
    setIsPlaying(true)
  }

  const pauseVideo = () => {
    postMessageToPlayer("pauseVideo")
    setIsPlaying(false)
  }

  const stopVideo = () => {
    postMessageToPlayer("stopVideo")
    setIsPlaying(false)
    setLastPlayedTime(0)
  }

  const selectVideo = (video) => {
    const videoId = video.url.split("/")[4]

    if (videoId === currentVideoId) {
      if (isPlaying) pauseVideo()
      else playVideo()
    } else {
      setCurrentVideo(video)
      setCurrentVideoId(videoId)
      setIsPlaying(true)

      setTimeout(() => {
        postMessageToPlayer("seekTo", [lastPlayedTime, true])
      }, 500)
    }
  }

  return (
    <div className="bg-[url('/home_images/about_satheesan_background.png')] w-full h-full pb-10 merriweather-regular">
      <h1 className="lg:text-[34px] text-[28px] text-[#035C96] text-center font-semibold pt-10">
        Getting Candid
      </h1>
      <h3 className="text-[18px] px-4 text-center pt-4">
        ‘Dialogue with VDS’ is a series of weekly in-depth interviews with
        experts from various fields
      </h3>

      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Main video player */}
          <div className="lg:w-3/4 mt-7">
            <div className="w-full aspect-video">
              <iframe
                ref={iframeRef}
                className="w-full h-full"
                src={`${currentVideo.url}?enablejsapi=1`}
                title="Main Video Player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="lg:flex justify-between items-center mt-4">
              <div className="lg:w-3/5">
                <p className="text-[18px] font-semibold text-[#880505]">
                  {currentVideo.title}
                </p>
                <p className="text-[16px] mt-2">{currentVideo.description}</p>
              </div>
              <div className="w-2/5 flex justify-end mt-5">
                <a
                  href="https://www.youtube.com/c/dialoguewithvds/videos"
                  target="_blank"
                  className="focus:outline-none text-white bg-[#880505] hover:bg-red-800 font-medium rounded-md text-[18px] px-7 py-3 me-2 mb-2"
                >
                  Subscribe
                </a>
              </div>
            </div>
          </div>

          {/* Playlist */}
          <div className="lg:w-1/4 mt-7">
            <div className="flex justify-between items-center bg-[#880505] px-2 pt-2 rounded-t-lg ">
              <h2 className="text-[16px] text-white text-left">Playlist</h2>
              <h2 className="text-[16px] text-white text-right">
                {videos.length} Videos
              </h2>
            </div>
            <div className="flex flex-col lg:h-[77vh] h-[50vh] p-3 overflow-y-auto bg-[#880505] rounded-b-lg">
              {videos.map((video, index) => (
                <div
                  key={index}
                  className={`cursor-pointer ${
                    currentVideoId === video.url.split("/")[4]
                      ? "bg-gray-700"
                      : ""
                  }`}
                  onClick={() => selectVideo(video)}
                >
                  <img
                    src={`https://img.youtube.com/vi/${
                      video.url.split("/")[4]
                    }/0.jpg`}
                    alt={`Thumbnail`}
                    className="w-full h-40 object-cover rounded-lg hover:opacity-80 transition"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer
