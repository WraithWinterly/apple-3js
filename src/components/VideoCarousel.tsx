import { useEffect, useRef, useState } from "react";
import { hightlightsSlides } from "../constants";

import Image from "next/image";
import { Swiper, SwiperClass, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/swiper-bundle.css";
import MiniNav from "./MiniNav";
import ReplayIcon from "./icons/replay-icon";
import PlayIcon from "./icons/play-icon";
import PauseIcon from "./icons/pause-icon";

const VideoCarousel = () => {
  const videoRef = useRef<HTMLVideoElement[]>([]);
  const [video, setVideo] = useState({
    isLastVideo: false,
    isPlaying: false,
    videoId: 0,
  });

  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  const { isLastVideo, isPlaying, videoId } = video;

  useEffect(() => {
    if (!!swiper) {
      handleProcess("play");
    }
  }, [swiper]);

  const handleProcess = (type: string) => {
    if (!swiper) {
      console.error("Swiper is not initialized");
      return;
    }
    switch (type) {
      case "video-end":
        const nextVideoId = videoId + 1;
        setVideo((prev) => ({
          ...prev,
          videoId: nextVideoId,
          isLastVideo: nextVideoId >= hightlightsSlides.length,
        }));
        swiper.slideNext();
        videoRef.current[videoId]?.play();
        break;
      case "video-reset":
        setVideo({ isLastVideo: false, isPlaying: true, videoId: 0 });
        swiper.slideTo(0);
        videoRef.current[0]?.play();
        break;
      case "pause":
        setVideo((prev) => ({ ...prev, isPlaying: false }));
        videoRef.current[videoId]?.pause();
        break;
      case "play":
        setVideo((prev) => ({ ...prev, isPlaying: true }));
        videoRef.current[videoId]?.play();
        break;
      default:
        return;
    }
  };

  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        speed={300}
        draggable={false}
        allowTouchMove={false}
        onSlideChange={(swiper) => {
          if (!videoRef.current[videoId]) {
            return;
          }
          videoRef.current[videoId]!.pause();
          videoRef.current[videoId]!.currentTime = 0;
          setVideo((prev) => ({
            ...prev,
            videoId: swiper.activeIndex,
          }));
          if (video.isPlaying) {
            videoRef.current[swiper.activeIndex]!.play();
          }
        }}
        onSwiper={(s) => {
          setSwiper(s);
        }}
      >
        {hightlightsSlides.map((list, i) => (
          <SwiperSlide key={list.id}>
            <div className="">
              <div className="flex-center h-full w-full overflow-hidden rounded-3xl bg-black">
                <video
                  playsInline
                  className="pointer-events-none"
                  preload="auto"
                  muted
                  //@ts-expect-error todo
                  ref={(el) => (videoRef.current[i] = el)}
                  onEnded={(e) => {
                    handleProcess("video-end");
                  }}
                >
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>
              <div className="absolute left-[5%] top-12 z-10">
                {list.textLists.map((text, index) => (
                  <p key={index} className="text-xl font-medium md:text-2xl">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex-center absolute left-0 right-0 my-10">
        <MiniNav
          splitMode
          left={<></>}
          right={
            <div className="absolute h-12 w-12 fill-[#f5f5f7]">
              {isLastVideo ? (
                <ReplayIcon />
              ) : !isPlaying ? (
                <PlayIcon />
              ) : (
                <PauseIcon />
              )}
            </div>
          }
          onRightClick={() =>
            handleProcess(
              isLastVideo ? "video-reset" : isPlaying ? "pause" : "play",
            )
          }
        />
      </div>
    </>
  );
};

export default VideoCarousel;
