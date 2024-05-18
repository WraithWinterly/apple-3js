"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

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
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#mini-nav-group",
        start: "bottom 130%", // Adjust this as needed
        end: "bottom bottom",

        scrub: false,
        toggleActions: "restart none none none",

        onLeave: () => {
          document.getElementById("mini-nav-group")?.classList.add("hidden");
        },
      },
    });
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
    tl.to("#mini-nav-group", {
      translateY: 70,
      duration: 0,
    });

    tl.to(
      "#mini-nav-group",

      {
        opacity: 1,
        scale: 1,
        display: "flex",
        y: 0,
        duration: 0.6,
        ease: "power2.inOut",
      },
    )
      .to("#mini-nav-left", {
        opacity: 1,
        borderWidth: 15,

        translateX: 44,
        translateY: -15,
        duration: 0.3,
        ease: "power2.inOut",
      })
      .to(
        "#mini-nav-right",
        {
          opacity: 1,
          borderWidth: 15,

          translateX: -60,
          translateY: -15,
          duration: 0.3,
          ease: "power2.inOut",
        },
        "<",
      );
    tl.to("#mini-nav-left", {
      //   width: "160px",

      borderWidth: 0,
      translateY: 0,
      translateX: 26,
      ease: "power4.out",
      duration: 0.3,
    }).to(
      "#mini-nav-right",
      {
        borderWidth: 0,
        translateY: 0,
        translateX: -46,
        ease: "power4.out",
        duration: 0.3,
      },
      "<",
    );

    tl.to(["#mini-nav-left"], {
      width: "160px",
      opacity: 1,

      translateX: 0,
      duration: 0.25,
      ease: "power4.out",
    })
      .to(
        ["#mini-nav-right"],
        {
          opacity: 1,
          translateX: 0,
          duration: 0.25,
          ease: "power4.out",
        },
        "<",
      )
      .to(
        ["#mini-nav-left-content", "#mini-nav-right-content"],
        {
          opacity: 1,

          duration: 0.8,
          ease: "power2.inOut",
        },
        "<",
      );

    // in then shrinks inside bubble
    // bubble piece expands
  }, []);

  return (
    <div className="hidden scale-0 gap-0 opacity-0 " id="mini-nav-group">
      <div
        className="control-btn relative border-[var(--accent)]"
        id="mini-nav-left"
      >
        <div
          id="mini-nav-left-content"
          className="absolute flex h-12 w-full items-center justify-center opacity-0"
        >
          {left}
        </div>
      </div>
      <button
        className="control-btn relative border-[var(--accent)]"
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
