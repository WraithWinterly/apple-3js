"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";
import Connectivity from "~/../public/assets/images/connectivity/connectivity.jpg";
export default function ConnectivitySection() {
  useGSAP(() => {
    gsap.to("#connectivity", {
      scrollTrigger: {
        trigger: "#connectivity",
        // markers: true,
        start: "top top",
        end: "bottom bottom",
      },
      opacity: 1,
    });
  });
  return (
    <section
      className="flex flex-col items-center opacity-100"
      id="connectivity"
    >
      <div className="w-full md:max-w-4xl">
        <h2 className="pl-16 text-white marker:text-start md:pl-16 md:text-7xl">
          Gigablast
          <br /> your gigabits
        </h2>
      </div>

      <Image
        src={Connectivity}
        alt="Connectivity"
        width={1200}
        height={1200}
        className="-ml-40 pt-20 md:-ml-20 lg:ml-0"
      />
      <div className="z-30 mt-10 grid gap-8 md:grid-cols-2 md:gap-24">
        <div className="flex max-w-xs flex-col gap-4">
          <h4 className="">
            iPhone 16 Pro is the next iPhone to support USB 3 for a{" "}
            <b className="text-white">phenomenal leap</b> and faster pro
            workflows than ever before.
          </h4>
          <h4>
            The USB-C connector now lets you{" "}
            <b className="text-white">connect to your AI powered devices</b>.
            Hello connectivity!
          </h4>
        </div>
        <div className="flex max-w-xs flex-col gap-4">
          <div>
            <h4> Up to</h4>
            <h3 className="py-1 text-5xl font-[500] text-white">
              20x faster
            </h3>{" "}
            <h4> file transfers</h4>
          </div>
          <h4>
            And with all-new Wi-Fi 6E6 you'll get{" "}
            <b className="text-white">two times faster wireless speeds</b>. So
            you can upload, download, and transfer files in a flash.
          </h4>
        </div>
      </div>
    </section>
  );
}
