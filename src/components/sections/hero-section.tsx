"use client";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "~/utils";
import iPhoneHeadlineText from "~/../public/assets/images/iphone-15-pro-headline.png";
import Image from "next/image";

export default function HeroSection() {
  useGSAP(() => {
    gsap.to(".hero-title", {
      opacity: 1,
      delay: 2,
      duration: 1,
    });
    gsap.to("#cta", {
      opacity: 1,
      delay: 2,
      duration: 1,
      y: -50,
    });
  }, []);

  const [videoSrc, setVideoSrc] = useState(heroVideo);

  function handleVideoSrcSet() {
    if (window.innerWidth < 768) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  }

  useEffect(() => {
    handleVideoSrcSet();
    window.addEventListener("resize", handleVideoSrcSet);

    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  return (
    <section className="relative mt-20 h-[calc(100vh-60px)] w-full bg-black lg:mt-0">
      <div className="flex h-5/6 w-full flex-col items-center justify-center">
        <Image
          src={iPhoneHeadlineText.src}
          width={iPhoneHeadlineText.width}
          height={iPhoneHeadlineText.height}
          alt=""
          className="mb-4 scale-75 md:scale-100"
        />
        <div className="w-9/12 md:w-10/12">
          <video
            autoPlay
            muted
            playsInline
            key={videoSrc}
            className="pointer-events-none"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
        <div
          id="cta"
          className="mt-4 flex translate-y-20 flex-col items-center opacity-0"
        >
          <a href="#highlights" className="btn">
            Buy
          </a>
          <p className="text-xl font-normal">From $199/month or $999</p>
        </div>
      </div>
    </section>
  );
}
