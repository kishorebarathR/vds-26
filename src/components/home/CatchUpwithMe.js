"use client"
import React, { useState, useRef, useEffect } from "react"

const VideoPlayer = () => {
  const iframeRef = useRef(null)
  const [currentVideo, setCurrentVideo] = useState({
    url: "https://www.youtube.com/embed/luIuD3xbtSQ",
  })
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentVideoId, setCurrentVideoId] = useState("UCpYogDflbQ")
  const [lastPlayedTime, setLastPlayedTime] = useState(0)

  const videos = [
    { url: "https://www.youtube.com/embed/luIuD3xbtSQ" },
    { url: "https://www.youtube.com/embed/a9K_i_H5UVw" },
    { url: "https://www.youtube.com/embed/WzchbN_bZZI" },
    { url: "https://www.youtube.com/embed/nj-OLjaZ8Ws" },
    { url: "https://www.youtube.com/embed/4k9bDn88XUs" },
    { url: "https://www.youtube.com/embed/ULmwv-_Ly2M" },
    { url: "https://www.youtube.com/embed/lBqFlHEhDP0" },
  ]

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
        Catch Up with Me​
      </h1>
      <h3 className="text-[18px]  text-center pt-4">
        Watch latest videos on VDS&apos; take on the current issues.
      </h3>

      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row gap-4">
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
          </div>
          <div className="lg:w-1/4 mt-7">
            <div className="flex justify-between items-center bg-[#880505] px-2 pt-2 rounded-t-lg ">
              <h2 className="text-xl text-white text-left">Playlist</h2>
              <h2 className="text-xl text-white text-right">
                {videos.length} Videos
              </h2>
            </div>
            <div className="flex flex-col lg:h-[70vh] h-[50vh] p-3 overflow-y-auto bg-[#880505] rounded-b-lg">
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
