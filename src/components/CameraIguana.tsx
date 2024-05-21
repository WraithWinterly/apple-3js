"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";
import Iguana from "~/../public/assets/images/camera-iguana.jpg";
export default function CameraIguana() {
  useGSAP(() => {
    gsap.to("#camera-iguana", {
      scale: 1.25,
      scrollTrigger: {
        trigger: "#camera-iguana",
        scrub: 1.2,
        // markers: true,
        start: "top 60%",
        end: "-20% top",

        // pin: true,
        // anticipatePin: 1,
      },
      ease: "circle",
    });
  }, []);
  return (
    <div className="relative z-10 mx-10 mt-52 flex flex-col items-center">
      <div className="mx-12 flex flex-col text-start text-2xl md:mx-0 md:max-w-4xl md:text-7xl">
        <h2 className="text-start font-semibold text-white">
          A camera that captures your wildest imagination.
        </h2>
        <p className="py-10 text-start text-xl text-gray md:text-2xl">
          From dramatic framing flexibility to next-generation portraits, see
          what you can do with our most powerful iPhone camera system.
        </p>
      </div>
      {/* <div className="h-12"></div> */}
      <Image
        src={Iguana}
        width={Iguana.width}
        height={Iguana.height}
        alt="Iguana"
        id="camera-iguana"
        className="relative -z-10 translate-x-40 scale-[1.75] md:translate-x-0"
      />

      <p className="mx-12 self-start py-10 text-start text-sm text-gray md:mx-32 md:text-xl ">
        A green iguana, captured by the 48MP Main camera
      </p>
    </div>
  );
}
