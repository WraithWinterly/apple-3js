"use client";
import { useGSAP } from "@gsap/react";
import React, { createRef } from "react";
import { animateWithGsap } from "../../utils/animations";
import { explore1Img, explore2Img, exploreVideo } from "../../utils";
import gsap from "gsap";
import Image from "next/image";

const FeaturesSection = () => {
  const videoRef = createRef<HTMLVideoElement>();

  useGSAP(() => {
    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        toggleActions: "play pause reverse restart",
        start: "-10% bottom",
      },
      onComplete: () => {
        videoRef.current?.play();
      },
    });

    animateWithGsap("#features_title", { y: 0, opacity: 1 }, {});
    animateWithGsap(
      ".g_grow",
      { scale: 1, opacity: 1, ease: "power1" },
      { scrub: 5.5 },
    );
    animateWithGsap(
      ".g_text",
      { y: 0, opacity: 1, ease: "power2.inOut", duration: 1 },
      {},
    );
  }, []);

  return (
    <section className="relative h-full overflow-hidden bg-zinc">
      <div className="mb-10 w-full">
        <h1 id="features_title" className="">
          Explore the full story.
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center overflow-hidden">
        <div className="flex flex-col items-center justify-center sm:px-10">
          <div className="mb-24 mt-32 max-w-xs self-start pl-12 md:max-w-full md:pl-4">
            <h2>iPhone.</h2>
            <h2>Forged in titanium.</h2>
            <h2>Reinforced by AI.</h2>
          </div>
          <div className="relative flex h-[50vh] w-full items-center">
            <video
              playsInline
              id="exploreVideo"
              className="h-full w-full object-cover object-center"
              preload="none"
              muted
              autoPlay
              ref={videoRef}
            >
              <source src={exploreVideo} type="video/mp4" />
            </video>
          </div>

          <div className="relative flex w-full flex-col">
            <div className="flex w-full flex-col items-center gap-5 md:flex-row">
              <div className="h-[50vh] flex-1 overflow-hidden">
                <Image
                  src={explore1Img.src}
                  alt="titanium"
                  className="g_grow h-full w-full scale-150 object-cover object-center opacity-0"
                  width={explore1Img.width}
                  height={explore1Img.height}
                />
              </div>
              <div className="h-[50vh] flex-1 overflow-hidden">
                <Image
                  src={explore2Img.src}
                  alt="titanium 2"
                  className="g_grow h-full w-full scale-150 object-cover object-center opacity-0"
                  width={explore2Img.width}
                  height={explore2Img.height}
                />
              </div>
            </div>

            <div className="mt-10 grid w-full items-center justify-center gap-5 md:mt-16 md:grid-cols-2 md:flex-row">
              <div className="flex flex-1 items-center justify-center">
                <h4 className="g_text  max-w-sm translate-y-[100px] opacity-0 md:text-xl">
                  iPhone 16 Pro is{" "}
                  <span className="text-white">
                    the first iPhone to feature AI designed titanium
                  </span>
                  , using the same alloy that spacecrafts use for missions to
                  Mars.
                </h4>
              </div>

              <div className="flex flex-1 items-center justify-center">
                <h4
                  className="g_text max-w-sm
                   translate-y-[100px] text-lg font-semibold text-gray opacity-0 md:text-xl"
                >
                  Titanium has one of the best strength-to-weight ratios of any
                  metal, making these our{" "}
                  <span className="text-white">
                    lightest AI Pro models ever.{" "}
                  </span>
                  You'll notice the difference the moment you pick one up.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
