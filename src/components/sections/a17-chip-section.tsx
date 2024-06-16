"use client";
import React, { createRef, useRef } from "react";
import { chipImg, frameImg, frameVideo } from "../../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animateWithGsap } from "../../utils/animations";
import Image from "next/image";

const A17ChipSection = () => {
  const videoRef = createRef<HTMLVideoElement>();

  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });

    animateWithGsap(
      ".g_fadeIn",
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.inOut",
      },
      {},
    );
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div
          id="chip"
          className="my-20 flex w-full items-center justify-center"
        >
          <Image src={chipImg.src} alt="chip" width={180} height={180} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-center">
            A17 Pro chip.
            <br /> A monster win for gaming.
          </h2>

          <h3 className="mt-4 text-center">
            It's here. The biggest redesign in the history of Apple GPUs.
          </h3>
        </div>

        <div className="mb-14 mt-10 md:mt-20">
          <div className="relative flex h-full items-center justify-center">
            <div className="overflow-hidden">
              <img
                src={frameImg.src}
                alt="frame"
                className="relative z-10 scale-75 bg-transparent md:scale-100"
              />
            </div>
            <div className="absolute h-[90%] w-[95%] overflow-hidden rounded-[56px]">
              <video
                className="pointer-events-none scale-75 md:scale-100"
                playsInline
                preload="none"
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <p className="ml-1 mt-4 text-center font-semibold text-gray">
            Honkai: Star Rail
          </p>
        </div>

        <div className="grid grid-flow-row justify-center md:ml-32 md:grid-cols-2 md:justify-start">
          <div className="mb-10 flex max-w-sm flex-col justify-center md:mb-0">
            <h4 className="g_fadeIn">
              A17 Pro is an entirely new class of iPhone chip that delivers our{" "}
              <span className="text-white">
                best graphic performance by far
              </span>
              .
            </h4>

            <h4 className="g_fadeIn mt-8">
              Mobile{" "}
              <span className="text-white">
                games will look and feel so immersive
              </span>
              , with incredibly detailed environments and characters.
            </h4>
          </div>

          <div className="g_fadeIn flex flex-col justify-center">
            <h4 className="">New</h4>
            <h3 className="text-[48px] text-white">Pro-class GPU</h3>
            <h4 className="">with 6 cores</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default A17ChipSection;
