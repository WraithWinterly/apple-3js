"use client";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "~/utils";

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
    <section className="nav-height relative w-full bg-black">
      <div className="flex-center h-5/6 w-full flex-col">
        <p className="hero-title">iPhone 15 Pro</p>
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
          className="flex translate-y-20 flex-col items-center opacity-0"
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
