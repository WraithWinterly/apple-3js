"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";
import { watchImg } from "~/utils";
import VideoCarouselSection from "../video-carousel";

export default function HighlightsSection() {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
    });
    gsap.to(".link", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
    });
  }, []);

  return (
    <section
      id="#highlights"
      className="common-padding h-full w-screen overflow-hidden bg-zinc px-0 md:px-20"
    >
      <div className="screen-max-width">
        <div className="mb-12 flex w-full flex-col justify-start self-start px-4 md:flex-row md:items-end md:justify-between md:px-0">
          <h1 id="title" className="">
            Get the highlights.
          </h1>
          <div className="flex flex-row flex-wrap gap-5 sm:flex-col md:items-end">
            <p className="link">
              Watch the film{" "}
              <Image src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link">
              Watch the event{" "}
              <Image src={watchImg} alt="right" className="ml-2" />
            </p>
          </div>
        </div>
        <VideoCarouselSection />
      </div>
    </section>
  );
}
