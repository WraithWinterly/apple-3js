"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useId } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function MiniNav({
  left,
  desiredLeftWidth,
  right,
  desiredRightWidth,
  splitMode = false,
  onRightClick,
}: {
  left: React.ReactNode;
  desiredLeftWidth: number;
  right: React.ReactNode;
  desiredRightWidth: number;
  splitMode?: boolean;
  onRightClick: () => void;
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

        onLeave: () => {
          document
            .getElementById("mini-nav-group" + id)
            ?.classList.add("hidden");
          document.getElementById("mini-nav-left" + id)!.style.width = "42";
          document.getElementById("mini-nav-right" + id)!.style.width = "42";
        },
      },
    });
    // Setup
    tl.to("#mini-nav-left" + id, {
      borderWidth: 0,
      width: "42px",
      translateX: 26,
      duration: 0,
    }).to("#mini-nav-right" + id, {
      width: "42px",
      borderWidth: 0,
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

    tl.to(
      "#mini-nav-group" + id,

      {
        opacity: 1,
        scale: 1,
        display: "flex",
        y: 0,
        duration: 0.6,
        ease: "power2.inOut",
      },
    )
      .to("#mini-nav-left" + id, {
        opacity: 1,
        borderWidth: 15,

        translateX: 44,
        translateY: -15,
        duration: 0.3,
        ease: "power2.inOut",
      })
      .to(
        "#mini-nav-right" + id,
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
    tl.to("#mini-nav-left" + id, {
      //   width: "160px",

      borderWidth: 0,
      translateY: 0,
      translateX: 26,
      ease: "power4.out",
      duration: 0.3,
    }).to(
      "#mini-nav-right" + id,
      {
        borderWidth: 0,
        translateY: 0,
        translateX: -46,
        ease: "power4.out",
        duration: 0.3,
      },
      "<",
    );
    console.log(desiredRightWidth);
    tl.to("#mini-nav-left" + id, {
      width: String(desiredLeftWidth) + "px",
      opacity: 1,

      translateX: 0,
      duration: 0.25,
      ease: "power4.out",
    })
      .to(
        "#mini-nav-right" + id,
        {
          width: String(desiredRightWidth) + "px",
          // width: "800px",
          opacity: 1,
          translateX: 0,
          duration: 0.25,
          ease: "power4.out",
        },
        "<",
      )
      .to(
        ["#mini-nav-left-content" + id, "#mini-nav-right-content" + id],
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
    <div className="hidden scale-0 gap-0 opacity-0 " id={"mini-nav-group" + id}>
      <div
        className="control-btn relative border-[var(--accent)]"
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
        className="control-btn relative border-[var(--accent)]"
        id={"mini-nav-right" + id}
        onClick={onRightClick}
      >
        <div
          id={"mini-nav-right-content" + id}
          className="absolute left-0 right-0 opacity-0"
        >
          {right}
        </div>
      </div>
    </div>
  );
}
