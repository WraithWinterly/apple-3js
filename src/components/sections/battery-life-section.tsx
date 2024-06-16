import Image from "next/image";
import React from "react";
import Frame from "~/../public/assets/images/battery/frame.png";
import Icon from "~/../public/assets/images/battery/icon.png";
export default function BatteryLifeSection() {
  return (
    <>
      <section className="relative mx-auto flex max-w-4xl flex-col items-center md:items-start">
        <h2 className="mx-auto max-w-sm md:mx-0 md:max-w-none">
          Battery life that's positively Pro.
        </h2>
        <h3 className="mx-auto max-w-sm pt-6 md:mx-0 md:pt-8">
          Even with so many advanced new features, iPhone 15 Pro still gives you
          amazing all-day battery life.
        </h3>
        <div className="">
          <video
            className="absolute left-0 top-[100%] mt-2 scale-[0.72] rounded-[2rem] md:scale-[0.97] md:rounded-[3rem]"
            autoPlay
            muted
          >
            <source
              src={"assets/videos/battery/foundations.mp4"}
              type="video/mp4"
            />
          </video>
          <Image
            src={Frame}
            width={1000}
            height={1000}
            alt="Frame"
            className="absolute left-0 top-[100%] scale-75 md:scale-100"
          />
        </div>
        <div className="absolute top-[180%] md:top-[190%] lg:left-0 lg:right-0">
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="flex max-w-4xl flex-col gap-8 md:mx-auto">
              <div className="">
                {" "}
                <h4 className="text-xl">Up to </h4> <h2>29 hrs</h2>{" "}
                <h4 className="">
                  video playback on <br />
                  iPhone 15 Pro Max
                </h4>
              </div>
              <div className="max-w-sm">
                {" "}
                <h3>Up to </h3> <h2>23 hrs</h2>{" "}
                <h3>
                  video playback on <br />
                  iPhone 15 Pro
                </h3>
              </div>
            </div>
            <div className="mx-auto max-w-sm pt-12 md:ml-1 md:pl-16 lg:ml-0 lg:max-w-md lg:pl-0">
              <h3>
                Add a MagSafe Charger for{" "}
                <b className="text-white">fast, efficient wireless charging</b>.
              </h3>
              <div className="max-w-sm pt-12">
                <hr className="border-t-2-gray-border w-full border-solid" />
                <div className="flex">
                  <Image
                    src={Icon}
                    alt="Icon"
                    width={36}
                    height={36}
                    className="h-full w-[6rem] pt-12"
                  />
                  <div className="flex flex-col gap-4 pl-6 pt-11 md:pl-12">
                    <p>
                      iPhone 15 Pro Max has up to 9 more hours video playback
                      than iPhone 12 Pro Max
                    </p>
                    <p>
                      iPhone 15 Pro has up to 6 more hours video playback than
                      iPhone 12 Pro
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="h-[1150px] md:h-[1650px] lg:h-[1200px]"></div>
    </>
  );
}
