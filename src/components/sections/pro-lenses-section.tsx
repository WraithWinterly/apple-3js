"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import right from "~/../public/assets/images/ui/right-arrow.svg";
import left from "~/../public/assets/images/ui/left-arrow.svg";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const images = [
  {
    number: 0.5,
    description: "Ultra Wide | Macro",
  },
  {
    number: 0.5,
    description: "Ultra Wide | 13 mm",
  },
  {
    number: 1,
    description: "Main | 24 mm",
  },
  {
    number: 1,
    description: "Main | 28 mm",
  },
  {
    number: 1,
    description: "Main | 35 mm",
  },
  {
    number: 2,
    description: "Telephoto | 48 mm",
  },
  {
    new: true,
    number: 5,
    description: "Telephoto | 120 mm",
  },
];

export default function ProLensesSection() {
  const path = (num: number) => "assets/images/lenses/" + num + ".jpg";

  const [activeIndex, setActiveIndex] = useState(0);
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  const [isAnimating, setIsAnimating] = useState(false);

  const handleSwiper = (swiper: SwiperClass) => {
    // Listen for the start of the slide change transition
    swiper.on("slideChangeTransitionStart", () => {
      setIsAnimating(true);
    });

    // Listen for the end of the slide change transition
    swiper.on("slideChangeTransitionEnd", () => {
      setIsAnimating(false);
      setActiveIndex(swiper.activeIndex);
    });
  };

  const [useSmaller, setUseSmaller] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", () => {
        setUseSmaller(window.innerWidth < 600);
      });
    }
  }, [typeof window !== "undefined" && window?.innerWidth]);

  return (
    <div className="relative">
      <div className="h-48"></div>
      <div className="flex w-full flex-col items-center gap-4 pb-20">
        <h4 className="max-w-[20rem] pl-1 text-start text-lg text-gray-100 md:-translate-x-36">
          With iPhone 16 Pro, you have multiple focal lengths to work with. It's
          like having{" "}
          <b className="text-white">seven pro lenses in your pocket</b>,
          everywhere you go.
        </h4>
        <h4 className="max-w-[20rem] pl-1 text-start text-lg text-gray-100 md:-translate-x-36">
          Once you take a photo, your creation
          <b className="text-white"> is AI enhanced</b>, using our world class
          technology.
        </h4>
      </div>

      <Swiper
        spaceBetween={10}
        slidesPerView="auto"
        speed={800}
        draggable={true}
        allowTouchMove={true}
        centeredSlides={true}
        onSwiper={(s) => {
          setSwiper(s);
          handleSwiper(s);
        }}
        onSlideChange={(i) => setActiveIndex(i.activeIndex)}
      >
        {images.map((list, i) => (
          <SwiperSlide key={list.number + i.toString()} style={{ width: 600 }}>
            <div
              className={`pointer-events-none flex flex-col items-center text-center ${i === activeIndex ? "opacity-100" : "opacity-50"} ${i > activeIndex ? "-translate-x-16 scale-75 " : "scale-100"}  transition-all duration-300 `}
            >
              <div className="flex h-full items-center justify-center overflow-hidden bg-black">
                <img
                  src={path(i)}
                  alt="lenses"
                  className="rounded-none object-cover"
                  width={useSmaller ? 400 : 600}
                  height={useSmaller ? 400 : 600}
                />
              </div>
              <div
                className={`pt-6 ${isAnimating || i !== activeIndex ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
              >
                <p className="text-xl text-white">
                  {" "}
                  {list.new && "New "}
                  {list.number}x{" "}
                  <span className="text-gray-100">{list.description}</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute right-10 z-10 flex gap-4 pb-2 md:bottom-44 md:right-60">
        <button
          className="cursor-pointer rounded-full bg-gray-300 transition-colors hover:bg-gray-400 disabled:cursor-default disabled:bg-gray-500 disabled:hover:bg-gray-500"
          onClick={() => swiper?.slidePrev()}
          disabled={activeIndex === 0 || isAnimating}
          id="prev-button"
        >
          <MdKeyboardArrowLeft className="pointer-events-none h-9 w-9 text-gray-100 hover:text-white disabled:text-gray-300" />
        </button>
        <button
          className="cursor-pointer rounded-full bg-gray-300 transition-colors hover:bg-gray-400 disabled:cursor-default disabled:bg-gray-500 disabled:hover:bg-gray-500"
          id="next-button"
          onClick={() => swiper?.slideNext()}
          disabled={activeIndex === images.length - 1 || isAnimating}
        >
          <MdKeyboardArrowRight className="pointer-events-none h-9 w-9 text-gray-100 hover:text-white disabled:text-gray-300" />
        </button>
      </div>

      <div className="h-48"></div>
    </div>
  );
}
