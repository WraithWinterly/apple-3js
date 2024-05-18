"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import ModelView from "./ModelView";
import { yellowImg } from "~/utils";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { modelDirection } from "three/examples/jsm/nodes/Nodes.js";
import { models, sizes } from "~/constants";
import { animateWithGsapTimeline } from "~/utils/animations";
import MiniNav from "./MiniNav";

export default function Model() {
  const [_document, setDocument] = React.useState<Document | null>();
  useEffect(() => {
    setDocument(document);
  }, []);
  const [size, setSize] = useState<string>("small");
  const [model, setModel] = useState({
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  });

  // cam control for model view
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  const small = useRef(new THREE.Group());
  const lg = useRef(new THREE.Group());

  //rotation
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  const timeline = gsap.timeline();

  useEffect(() => {
    if (size === "small") {
      animateWithGsapTimeline(timeline, lg, largeRotation, "#view2", "#view1", {
        transform: "translateX(0%)",
        duration: 2,
      });
    }
    if (size === "large") {
      animateWithGsapTimeline(
        timeline,
        small,
        smallRotation,
        "#view1",
        "#view2",
        {
          transform: "translateX(-100%)",
          duration: 2,
        },
      );
    }
    gsap.to("#selected-circle", {
      x: size === "large" ? "54px" : "0px",
      duration: 0.3,
      ease: "power2.inOut",
    });
  }, [size]);

  useGSAP(() => {
    gsap.to("#heading", {
      opacity: 1,
      y: 0,
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          Take a closer look.
        </h1>
        {/* Model container */}
        <div className="mt-5 flex flex-col items-center">
          <div className="relative h-[75vh] w-full overflow-hidden md:h-[90vh]">
            <ModelView
              index={1}
              groupRef={small}
              gsapType="view1"
              controlRef={cameraControlSmall}
              setRotationState={setSmallRotation}
              item={model}
              size={size}
            />
            <ModelView
              index={2}
              groupRef={lg}
              gsapType="view2"
              controlRef={cameraControlLarge}
              setRotationState={setLargeRotation}
              item={model}
              size={size}
            />
            {!!_document && (
              <Canvas
                className="h-full w-full"
                style={{
                  position: "fixed",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                }}
                eventSource={_document!.body}
              >
                <View.Port />
              </Canvas>
            )}
          </div>
          <div className="flex-center relative mx-auto w-full">
            <p className="mb-5 text-center">{model.title}</p>
            <p className="mb-5 text-center text-xs font-light"></p>
            <div className="h-12"></div>
            <div className="absolute h-24">
              <div className="flex-center mt-20 w-full">
                <MiniNav
                  onRightClick={() => {}}
                  desiredLeftWidth={182}
                  desiredRightWidth={110}
                  splitMode={true}
                  left={
                    <ul className="flex justify-center gap-4">
                      {models.map((item, index) => (
                        <button
                          key={index}
                          className={`color h-6 w-6 cursor-pointer rounded-full transition-all  ${
                            model.title === item.title
                              ? "outline outline-2 outline-white"
                              : ""
                          }`}
                          style={{
                            backgroundColor: item.color[0],
                          }}
                          onClick={() => setModel(item)}
                          onFocus={(e) =>
                            (e.target.style.boxShadow =
                              "0 0 0 4px white, 0 0 0 8px blue")
                          }
                          onBlur={(e) => (e.target.style.boxShadow = "none")}
                        ></button>
                      ))}
                    </ul>
                  }
                  right={
                    <span className="relative mx-1 flex items-center justify-between">
                      <div
                        id="selected-circle"
                        className="absolute -z-10 h-12 w-12 rounded-full bg-white"
                      ></div>
                      {sizes.map(({ label, value }, index) => (
                        <button
                          key={label}
                          className="flex h-12 w-12 items-center justify-center rounded-full outline outline-0  outline-white transition-all focus:outline-4"
                          style={{
                            //   backgroundColor:
                            //     value === size ? "white" : "transparent",
                            color: value === size ? "black" : "white",
                            // padding: value === size ? "5px" : "0px", // Add padding only when selected
                            // margin: value === size ? "-5px" : "0px", // Use negative margin to keep the button the same size
                          }}
                          onClick={() => setSize(value)}
                        >
                          {label}
                        </button>
                      ))}
                    </span>
                  }
                />
              </div>
            </div>
            <div className="h-12"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
