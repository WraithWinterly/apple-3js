"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useId } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function FloatingNav({
  left,
  desiredLeftWidth,
  right,
  desiredRightWidth,
  splitMode = false,
  isRButton = false,
  onRButtonClick,
}: {
  left: React.ReactNode;
  desiredLeftWidth: number;
  right: React.ReactNode;
  desiredRightWidth: number;
  splitMode?: boolean;
  isRButton?: boolean;
  onRButtonClick?: () => void;
}) {
  const idOg = useId();
  const id = idOg.replace(/[:]/g, "");

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#mini-nav-group" + id,
        start: "bottom 110%", // Adjust this as needed
        end: "bottom bottom",

        scrub: false,
        toggleActions: "restart none none none",

        // onLeave: () => {
        //   document
        //     .getElementById("mini-nav-group" + id)
        //     ?.classList.add("fixed", "z-10");
        //   document.getElementById("mini-nav-left" + id)!.style.width = "42";
        //   document.getElementById("mini-nav-right" + id)!.style.width = "42";
        // },
        onEnter: () => {
          // idea - on enter track scroll position difference, if it is equal view at bottom of screen,
          // change of fixed, then at a certain point animate it away
        },
      },
    });
    const ANIM_MAIN_DURATION = 0.3;
    // Setup
    tl.to("#mini-nav-left" + id, {
      outlineWidth: 0,
      width: "42px",
      translateX: 26,
      duration: 0,
    }).to("#mini-nav-right" + id, {
      width: "42px",
      outlineWidth: 0,
      translateX: -46,
      duration: 0,
    });
    tl.to("#mini-nav-group" + id, {
      translateY: 70,
      duration: 0,
    }).to(["#mini-nav-left-content" + id, "#mini-nav-right-content" + id], {
      opacity: 0,
      duration: 0,
    });

    // STEP ONE, COME UP
    tl.to(
      "#mini-nav-group" + id,

      {
        opacity: 1,
        scale: 1,
        display: "flex",
        y: 0,
        duration: 0.6,
        ease: "back.inOut",
      },
    )
      // WHILE COMING UP, SHOW THE BLUE ANIMATION
      .to("#mini-nav-left" + id, {
        opacity: 1,
        outlineWidth: 15,

        duration: ANIM_MAIN_DURATION,
        ease: "power2.in",
      })
      .to(
        "#mini-nav-right" + id,
        {
          opacity: 1,
          outlineWidth: 15,
          duration: ANIM_MAIN_DURATION,
          ease: "power2.in",
        },
        "<",
      );

    // SHRINK OUTLINE
    tl.to("#mini-nav-left" + id, {
      outlineWidth: 0,
      translateX: 26,
      ease: "back.out",
      duration: ANIM_MAIN_DURATION,
    }).to(
      "#mini-nav-right" + id,
      {
        outlineWidth: 0,
        ease: "back.out",
        duration: ANIM_MAIN_DURATION,
      },
      "<",
    );

    // WHILE ^, SEPARATE BUBBLES OUT AND FADE IN CONTENT
    tl.to(
      "#mini-nav-left" + id,
      {
        width: String(desiredLeftWidth) + "px",
        opacity: 1,

        translateX: 0,
        duration: ANIM_MAIN_DURATION,
        ease: "back.out",
      },
      // I LOVE the way it looks with this one. Basically the blue border spreads out. However
      // "<",
    );
    tl.to(
      "#mini-nav-right" + id,
      {
        width: String(desiredRightWidth) + "px",
        opacity: 1,
        translateX: 0,
        duration: ANIM_MAIN_DURATION,
        ease: "back.out",
      },
      "<",
    );
    tl.to(
      ["#mini-nav-left-content" + id, "#mini-nav-right-content" + id],
      {
        opacity: 1,

        duration: 0.8,
        ease: "power2.out",
      },
      "<",
    );

    // in then shrinks inside bubble
    // bubble piece expands
  }, []);

  return (
    <div className="relative flex h-24 w-full flex-col items-center justify-center overflow-hidden">
      <div
        className="absolute hidden scale-0 gap-0 opacity-0"
        id={"mini-nav-group" + id}
      >
        <div
          className="flex-center relative ml-4 rounded-full bg-gray-300 p-7 outline outline-blue backdrop-blur"
          id={"mini-nav-left" + id}
        >
          <div
            id={"mini-nav-left-content" + id}
            className="absolute flex h-12 w-full items-center justify-center opacity-0"
          >
            {left}
          </div>
        </div>
        <div
          className={`flex-center relative ml-4 rounded-full bg-gray-300 p-7 outline outline-blue backdrop-blur transition-colors ${isRButton ? "hover:bg-gray-300Hover" : ""}`}
          id={"mini-nav-right" + id}
          onClick={onRButtonClick}
        >
          <div
            id={"mini-nav-right-content" + id}
            className="absolute left-0 right-0 opacity-0"
          >
            {right}
          </div>
        </div>
      </div>
    </div>
  );
}
