"use client";
import React, { createRef, useState } from "react";

import endframe from "~/../public/assets/images/telephoto-endframe.jpg";
import { MdOutlineReplay } from "react-icons/md";
export default function TelephotoSection() {
  const videoRef = createRef<HTMLVideoElement>();
  const replayButton = createRef<HTMLButtonElement>();
  const [canReplay, setCanReplay] = useState(false);

  function onReplayPressed() {
    if (canReplay) {
      videoRef.current?.play();
      replayButton.current?.classList.add("opacity-0");
      replayButton.current?.classList.remove("opacity-100");
      setCanReplay(false);
    }
  }

  return (
    <section className="flex flex-col items-center px-0 md:px-20">
      <div className="flex w-full max-w-6xl flex-col items-center">
        <h2 className="mb-20 max-w-2xl text-center">
          120 mm of pure Pro zoom.
        </h2>
        <video
          autoPlay
          muted
          playsInline
          key={"234566"}
          className="pointer-events-none h-[600px] object-cover"
          ref={videoRef}
          onEnded={() => {
            setCanReplay(true);
            replayButton.current?.classList.add("opacity-100");
            replayButton.current?.classList.remove("opacity-0");
          }}
        >
          <source src={"/assets/videos/telephoto.mp4"} type="video/mp4" />
        </video>
        <button
          className="flex items-center gap-2 p-4 opacity-0 transition-opacity"
          ref={replayButton}
          onClick={onReplayPressed}
        >
          <p className="">Replay</p>{" "}
          <MdOutlineReplay className="-scale-x-100 text-gray" size={18} />
        </button>
        <div className="mt-20 grid justify-center gap-8 md:grid-cols-2 md:gap-36">
          <div className="flex max-w-sm flex-col gap-8 md:gap-8">
            <h4>
              For iPhone 16 Pro AI Max, we enhanced the 5x Telephoto camera with{" "}
              <b className="text-white">
                the biggest AI improvement in history
              </b>{" "}
              working with our compact Pro camera system.
            </h4>
            <h4>
              Now you can{" "}
              <b className="text-white">
                take sharper close-ups from farther away
              </b>{" "}
              — like a phenomenal photo of your friend or a goal in your kid's
              soccer match.
            </h4>
          </div>
          <div className="max-w-sm">
            <h4 className="text-[32px] leading-tight text-white md:text-[48px]">
              5x optical
              <br /> zoom
            </h4>
            <h4>with the 120 mm lens</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
