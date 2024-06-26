"use client";
import Image from "next/image";
import React, { createRef, useEffect, useState } from "react";

import RingerIcon from "~/../public/assets/images/action-button/ui/ringer.png";
import FocusIcon from "~/../public/assets/images/action-button/ui/focus.png";
import CameraIcon from "~/../public/assets/images/action-button/ui/camera.png";
import FlashlightIcon from "~/../public/assets/images/action-button/ui/flashlight.png";
import VoiceMemosIcon from "~/../public/assets/images/action-button/ui/voice-memos.png";
import TranslateIcon from "~/../public/assets/images/action-button/ui/translate.png";
import MagnifierIcon from "~/../public/assets/images/action-button/ui/magnifier.png";
import ShortcutIcon from "~/../public/assets/images/action-button/ui/shortcut.png";
import AccessibilityIcon from "~/../public/assets/images/action-button/ui/accessibility.png";

import DisplayActionRinger from "~/../public/assets/images/action-button/display/action-ringer.jpg";
import DisplayActionFocus from "~/../public/assets/images/action-button/display/action-focus.jpg";
import DisplayActionCamera from "~/../public/assets/images/action-button/display/action-camera.jpg";
import DisplayActionFlashlight from "~/../public/assets/images/action-button/display/action-flashlight.jpg";
import DisplayActionVoice from "~/../public/assets/images/action-button/display/action-voice.jpg";
import DisplayActionTranslate from "~/../public/assets/images/action-button/display/action-translate.jpg";

import DisplayActionMagnifier from "~/../public/assets/images/action-button/display/action-magnifier.jpg";
import DisplayActionShortcuts from "~/../public/assets/images/action-button/display/action-shortcuts.jpg";

import DisplayActionAccessibility from "~/../public/assets/images/action-button/display/action-accessibility.jpg";

import DisplayActionFrame from "~/../public/assets/images/action-button/display/action-frame.png";
import DisplayActionGradient from "~/../public/assets/images/action-button/display/action-gradient.png";
import gsap from "gsap";
import HScrollNav from "../ui/h-scroll-nav";
const actionItems = [
  {
    title: "Silent Mode",
    uiImg: RingerIcon.src,
    displayImg: DisplayActionRinger.src,
  },
  {
    title: "Focus",
    uiImg: FocusIcon.src,
    displayImg: DisplayActionFocus.src,
  },
  {
    title: "Camera",
    uiImg: CameraIcon.src,
    displayImg: DisplayActionCamera.src,
  },
  {
    title: "Flashlight",
    uiImg: FlashlightIcon.src,
    displayImg: DisplayActionFlashlight.src,
  },
  {
    title: "Voice Memos",
    uiImg: VoiceMemosIcon.src,
    displayImg: DisplayActionVoice.src,
  },
  {
    title: "Translate",
    uiImg: TranslateIcon.src,
    displayImg: DisplayActionTranslate.src,
  },
  {
    title: "Magnifier",
    uiImg: MagnifierIcon.src,
    displayImg: DisplayActionMagnifier.src,
  },
  {
    title: "Shortcuts",
    uiImg: ShortcutIcon.src,
    displayImg: DisplayActionShortcuts.src,
  },
  {
    title: "Accessibility",
    uiImg: AccessibilityIcon.src,
    displayImg: DisplayActionAccessibility.src,
  },
];

export default function ActionButtonSection() {
  const [videoFinished, setVideoFinished] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState(actionItems[0]!.title);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedActionPath, setSelectedActionPath] = useState(
    actionItems[0]!.displayImg,
  );
  const [prevSelectedActionPath, setPrevSelectedActionPath] = useState(
    actionItems[0]!.displayImg,
  );

  const imageRef = createRef<HTMLImageElement | null>();

  const handleButtonClick = (item: (typeof actionItems)[number]) => {
    if (isTransitioning) {
      return;
    }
    setIsTransitioning(true);

    setSelectedTitle(item.title);
    setSelectedActionPath(item.displayImg);

    // Fade out current image and fade in new image
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0 },
        {
          duration: 0.5,
          opacity: 1,
          onComplete: () => {
            setPrevSelectedActionPath(item.displayImg);
            setIsTransitioning(false);
          },
        },
      );
    }
  };

  function onVideoEnd() {
    setVideoFinished(true);
    gsap.fromTo(
      fadeInRef!.current!.querySelectorAll(".fade-in"),
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.1,
        pointerEvents: "auto",
      },
    );
  }

  const fadeInRef = createRef<HTMLDivElement>();

  return (
    <section className="flex flex-col items-center" ref={fadeInRef}>
      <h2 className="hidden max-w-2xl translate-y-44 pl-8 text-start text-7xl md:-ml-44 md:block">
        Get in on the Action button.
      </h2>
      <h2 className="-ml-32 max-w-2xl translate-y-44 text-start text-4xl md:hidden">
        Get in on the <br /> Action button.
      </h2>
      <div className="grid max-w-6xl md:grid-cols-2 md:justify-between">
        <div className="flex flex-col items-center">
          <div className="px-4 md:pl-20">
            <p className="mt-72 max-w-sm">
              The all-new Action button is{" "}
              <b className="text-white">
                {" "}
                a fast track to your favorite feature
              </b>
              . Once you set the one you want, just press and hold to launch the
              action.
            </p>
            <div className="relative mt-24 hidden xl:block">
              <hr className="fade-in relative z-30 mt-12 w-[120%] border-t-gray-border opacity-0"></hr>
              <div className="fade-in absolute -right-24 -top-1 z-20 h-2.5 w-2.5 rounded-full bg-gray-border opacity-0"></div>{" "}
              <ul className="fade-in pointer-events-none ml-12 mt-8 flex flex-col gap-1 opacity-0">
                {actionItems.map((item, i) => (
                  <li key={i + item.title}>
                    <button
                      className={`flex items-center gap-2 rounded-full border border-white py-2 pl-3 pr-4 ${item.title === selectedTitle ? "border-opacity-100" : "border-opacity-0"} transition-all duration-500`}
                      onClick={() => handleButtonClick(item)}
                    >
                      <Image
                        src={item.uiImg}
                        width={22}
                        height={22}
                        alt="silent mode"
                        className={
                          selectedTitle === item.title
                            ? "opacity-100"
                            : "opacity-80"
                        }
                      />
                      <p
                        className={`text-[14px] ${item.title === selectedTitle ? "text-white" : "text-gray"}`}
                      >
                        {item.title}
                      </p>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="relative -ml-2 -mt-40 flex w-[424px] scale-75 flex-col items-end xl:ml-0 xl:mt-0 xl:scale-100">
          <video
            autoPlay
            playsInline
            muted
            className="pointer-events-none mt-64"
            onEnded={onVideoEnd}
          >
            <source
              src="/assets/videos/action-button/action-button.mp4"
              type="video/mp4"
            ></source>
          </video>

          <Image
            src={prevSelectedActionPath}
            width={350}
            height={350}
            alt="phone content action"
            className="fade-in pointer-events-none absolute right-2 top-64 mt-3 opacity-0"
          />
          <Image
            ref={imageRef}
            src={selectedActionPath}
            width={350}
            height={350}
            alt="phone content action"
            className="fade-in pointer-events-none absolute right-2 top-64 mt-3 opacity-0"
          />
          <Image
            src={DisplayActionFrame.src}
            width={424}
            height={424}
            alt="frame"
            className={`fade-in pointer-events-none absolute -right-1 top-64 z-10 opacity-0`}
          />

          <Image
            src={DisplayActionGradient.src}
            fill
            alt="gradient"
            className="pointer-events-none z-20 mt-20"
          />
          {/* add a small black zone below it to cover up the bottom parts */}
          <div className="pointer-events-none absolute -bottom-40 left-0 right-0 z-20 h-32 bg-black"></div>
        </div>
      </div>
      <div className="h-36 xl:hidden"></div>
      <div className="fade-in pointer-events-none z-20 -mt-60 opacity-0 xl:hidden">
        <HScrollNav>
          <ul className="flex gap-12">
            {actionItems.map((item, i) => (
              <li key={i + item.title}>
                <button
                  className={`flex w-full items-center gap-2 rounded-full transition-all duration-500 `}
                  onClick={() => handleButtonClick(item)}
                >
                  <Image
                    src={item.uiImg}
                    width={26}
                    height={26}
                    alt="silent mode"
                    className={
                      selectedTitle === item.title
                        ? "flex-shrink-0 opacity-100"
                        : "flex-shrink-0 opacity-80"
                    }
                  />
                  <p
                    className={`text-[20px] ${item.title === selectedTitle ? "text-white" : "text-gray"} text-nowrap`}
                  >
                    {item.title}
                  </p>
                </button>
              </li>
            ))}
          </ul>
        </HScrollNav>
      </div>
      <div className="z-30 mt-10 grid gap-8 md:grid-cols-2 md:gap-24">
        <h4 className="max-w-xs">
          By default, the
          <b className="text-white">
            {" "}
            Action button is set to toggle between Ring and Silent modes
          </b>
          . If you choose a different action, you can use Control Center to mute
          or use Focus filters to automatically set your iPhone to silent.
        </h4>
        <h4 className="max-w-xs">
          Whatever you're doing, the Action button is at the ready. Launch
          Camera to catch a spontaneous selfie. Record an instant voice memo.
          You can even{" "}
          <b className="text-white">
            select Shortcut to open an app or run a series of tasks{" "}
          </b>
          like switching on the lights in your living room and playing music.
        </h4>
      </div>
    </section>
  );
}
