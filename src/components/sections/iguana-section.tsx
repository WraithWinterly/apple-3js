"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";
import Iguana from "~/../public/assets/images/camera-iguana.jpg";
export default function IguanaSection() {
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
    <section className="relative z-10 mt-52 flex flex-col items-center">
      <div className="flex max-w-sm flex-col md:max-w-5xl ">
        <h2 className=" text-start font-semibold text-white">
          An AI enhanced camera that captures your wildest imagination.
        </h2>
        <h3 className="py-10">
          From dramatic framing flexibility to next-generation portraits, AI
          powered photography has never looked this good.
        </h3>
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

      <p className="mx-16 max-w-md self-start py-10 text-start text-gray md:mx-32 md:text-xl">
        A green iguana, captured by the 48MP Main camera
      </p>
    </section>
  );
}
