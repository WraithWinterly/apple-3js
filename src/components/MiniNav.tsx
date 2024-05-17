"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

export default function MiniNav({
  splitMode = false,
  left,
  right,
  onRightClick,
}: {
  splitMode?: boolean;
  left: React.ReactNode;
  right: React.ReactNode;
  onRightClick: () => void;
}) {
  useGSAP(() => {
    const tl = gsap.timeline();
    // Setup
    tl.to("#mini-nav-left", {
      borderWidth: 0,
      translateX: 26,
      duration: 0,
    }).to("#mini-nav-right", {
      borderWidth: 0,
      translateX: -46,
      duration: 0,
    });

    tl.to(
      "#mini-nav-group",

      {
        opacity: 1,
        scale: 1,

        y: 0,
        duration: 0.3,
        ease: "power2.inOut",
      },
    )
      .to("#mini-nav-left", {
        opacity: 1,
        borderWidth: 10,

        translateX: 36,
        duration: 0.3,
        ease: "power2.inOut",
      })
      .to(
        "#mini-nav-right",
        {
          opacity: 1,
          borderWidth: 10,

          translateX: -56,
          duration: 0.3,
          ease: "power2.inOut",
        },
        "<",
      );
    tl.to("#mini-nav-left", {
      //   width: "160px",

      borderWidth: 0,
      translateX: 26,
      ease: "power2.inOut",
      duration: 0.3,
    }).to(
      "#mini-nav-right",
      {
        borderWidth: 0,
        translateX: -46,
        ease: "power2.inOut",
        duration: 0.3,
      },
      "<",
    );

    tl.to(["#mini-nav-left", "#mini-nav-left-content"], {
      width: "160px",
      opacity: 1,
      borderWidth: 0,
      translateX: 0,
      ease: "power2.inOut",
    }).to(
      ["#mini-nav-right", "#mini-nav-right-content"],
      {
        borderWidth: 0,
        opacity: 1,
        translateX: 0,
        ease: "power2.inOut",
      },
      "<",
    );

    // in then shrinks inside bubble
    // bubble piece expands
  }, []);

  return (
    <div
      className="flex translate-y-16 scale-0 gap-0 opacity-0 "
      id="mini-nav-group"
    >
      <div className="control-btn relative border-blue" id="mini-nav-left">
        <div
          id="mini-nav-left-content"
          className="absolute flex h-12 w-full items-center justify-center opacity-0"
        >
          {left}
        </div>
      </div>
      <button
        className="control-btn relative border-blue"
        id="mini-nav-right"
        onClick={onRightClick}
      >
        <div
          id="mini-nav-right-content"
          className="absolute h-12 w-12 opacity-0"
        >
          {right}
        </div>
      </button>
    </div>
  );
}
