import { useEffect, useRef, useState } from "react";
import { highlightsSlides } from "../constants";

import Image from "next/image";
import { Swiper, SwiperClass, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/swiper-bundle.css";
import FloatingNav from "./floating-nav";
import ReplayIcon from "./icons/replay-icon";
import PlayIcon from "./icons/play-icon";
import PauseIcon from "./icons/pause-icon";
import gsap from "gsap";
import { dot } from "three/examples/jsm/nodes/Nodes.js";

const VideoCarouselSection = () => {
  const videoRef = useRef<HTMLVideoElement[]>([]);
  const videoCrumbsSpanRef = useRef<Array<HTMLSpanElement> | null>([]);
  const videoCrumbsDivRef = useRef<Array<HTMLDivElement> | null>([]);

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
      dot_expand(0);
    }
  }, [swiper]);

  useEffect(() => {
    let currentProgress = 0;
    let span = videoCrumbsSpanRef.current!;

    if (span[videoId]) {
      // animation to move the indicator
      let anim = gsap.to(span[videoId]!, {
        onUpdate: () => {
          // get the progress of the video
          const progress = Math.ceil(anim.progress() * 100);

          if (progress != currentProgress) {
            currentProgress = progress;

            // set the background color of the progress bar
            gsap.to(span[videoId]!, {
              width: `${currentProgress < 10 ? 10 : currentProgress}%`,
              backgroundColor: "white",
            });
          }
        },
      });

      if (videoId == 0) {
        anim.restart();
      }

      // update the progress bar
      const animUpdate = () => {
        anim.progress(
          videoRef.current[videoId]!.currentTime /
            highlightsSlides[videoId]!.videoDuration,
        );
      };

      gsap.ticker.remove(animUpdate);

      if (isPlaying) {
        // ticker to update the progress bar
        gsap.ticker.add(animUpdate);
      } else {
        // remove the ticker when the video is paused (progress bar is stopped)
        gsap.ticker.remove(animUpdate);
      }
    }
  }, [videoId, isPlaying]);

  const handleProcess = (type: string) => {
    if (!swiper) {
      console.error("Swiper is not initialized");
      return;
    }
    switch (type) {
      case "video-end":
        let nextVideoId = videoId + 1;
        if (nextVideoId >= highlightsSlides.length) {
          nextVideoId = 4;
        }
        setVideo((prev) => ({
          ...prev,
          videoId: nextVideoId,
          isLastVideo: nextVideoId >= highlightsSlides.length,
        }));
        swiper.slideNext();
        // videoRef.current[videoId]?.play();
        break;
      case "video-reset":
        setVideo({ isLastVideo: false, isPlaying: true, videoId: 0 });
        swiper.slideTo(0);

        videoRef.current[0]!.currentTime = 0;
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

  useEffect(() => {
    let span = videoCrumbsSpanRef.current;
    if (!span) {
      console.error("span not found");
      return;
    }

    videoCrumbsDivRef.current?.forEach((div, i) => {
      if (i != videoId) {
        gsap.to(videoCrumbsDivRef.current![i]!, {
          width: "12px",
        });
        gsap.to(span[i]!, {
          backgroundColor: "#afafaf",
        });
      } else {
        dot_expand(i);
      }
    });
  }, [videoId]);
  function dot_expand(i: number) {
    let span = videoCrumbsSpanRef.current!;
    gsap.to(videoCrumbsDivRef.current![i]!, {
      width:
        window.innerWidth < 760
          ? "8vw" // mobile
          : window.innerWidth < 1200
            ? "6vw" // tablet
            : "4vw", // laptop
    });

    gsap.to(span[i]!, {
      backgroundColor: "white",
    });
  }
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
        {highlightsSlides.map((list, i) => (
          <SwiperSlide key={list.id}>
            <div className="">
              <div className="flex h-full w-full items-center justify-center overflow-hidden bg-black md:rounded-3xl">
                <video
                  playsInline
                  className="fill pointer-events-none h-[600px] object-cover"
                  preload="auto"
                  muted
                  //@ts-expect-error todo
                  ref={(el) => (videoRef.current[i] = el)}
                  onEnded={() => {
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

      <div className="md:mt-24">
        <FloatingNav
          splitMode
          desiredLeftWidth={170}
          desiredRightWidth={22}
          left={
            <>
              <div className="flex">
                {videoRef.current.map((_, i) => (
                  <span
                    key={i}
                    onClick={() => {
                      // reset current video progress

                      if (!!videoRef.current[videoId]) {
                        videoRef.current[videoId]!.currentTime = 0;
                      }

                      if (videoId != i) {
                        videoRef.current[i]!.currentTime = 0;
                      }
                      setVideo((prev) => ({ ...prev, videoId: i }));
                      swiper?.slideTo(i);
                    }}
                    className="relative mx-2 h-3 w-3 cursor-pointer rounded-full bg-gray-200"
                    // @ts-expect-error ...
                    ref={(el) => (videoCrumbsDivRef.current[i] = el)}
                  >
                    <span
                      className={`absolute h-full rounded-full ${i === videoId ? "opacity-100" : "opacity-0"}`}
                      // @ts-expect-error ...
                      ref={(el) => (videoCrumbsSpanRef.current[i] = el)}
                    />
                  </span>
                ))}
              </div>
            </>
          }
          right={
            <div className="flex h-12 w-full cursor-pointer items-center justify-center fill-[#f5f5f7]">
              {isLastVideo ? (
                <ReplayIcon />
              ) : !isPlaying ? (
                <PlayIcon />
              ) : (
                <PauseIcon />
              )}
            </div>
          }
          isRButton
          onRButtonClick={() =>
            handleProcess(
              isLastVideo ? "video-reset" : isPlaying ? "pause" : "play",
            )
          }
        />
      </div>
      <div className="h-32 md:h-28"></div>
    </>
  );
};

export default VideoCarouselSection;
