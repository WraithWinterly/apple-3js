"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";
import Camera48MPImage from "~/../public/assets/images/camera-48mp.jpg";
import { animateWithGsap } from "~/utils/animations";
export default function Camera48Section() {
  useGSAP(() => {
    animateWithGsap(
      "#camera-48mp-section",
      {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
      },
      {},
    );
    animateWithGsap(
      "#camera-48mp-section-text",
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
    <section
      className="grid items-center justify-center opacity-0"
      id="camera-48mp-section"
    >
      <div className="grid items-center justify-center md:max-w-3xl md:grid-cols-2 md:justify-normal ">
        <Image
          src={Camera48MPImage.src}
          width={Camera48MPImage.width}
          height={Camera48MPImage.height}
          alt="Camera 48MP"
          className="mx-auto md:mx-0"
        />

        <h4
          id="camera-48mp-section-text"
          className="translate-y-20 px-12 pt-16 opacity-0 md:px-0 md:pt-0"
        >
          The 48MP Main camera is more advanced than ever, capturing
          super-high-resolution photos with a{" "}
          <b className="text-white">new level of detail and color</b>.<br />
          <br />
          ;.hu You'll see the improvements in your portraits. And now you no
          longer have to switch to Portrait mode. If your subject is a person,
          dog, or cat, iPhone automatically captures depth information. So you
          can choose to instantly{" "}
          <b className="text-white">see your photo as a portrait</b>, with an
          artful blur effect. Or later in the Photos app.
        </h4>
      </div>
    </section>
  );
}
