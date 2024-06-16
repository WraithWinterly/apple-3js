"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import ModelView from "../three-model/model-view";
import { yellowWallpaperImg } from "~/utils";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { modelDirection } from "three/examples/jsm/nodes/Nodes.js";
import { models, sizes } from "~/constants";

import FloatingNav from "../floating-nav";
import { OrbitControls } from "three/examples/jsm/Addons.js";

export default function PhoneModelSection() {
  const [_document, setDocument] = React.useState<Document | null>();
  useEffect(() => {
    setDocument(document);
  }, []);
  const [size, setSize] = useState<string>("small");
  const [model, setModel] = useState({
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowWallpaperImg,
  });

  const [masterPosRot, setMasterPosRot] = useState<
    [THREE.Vector3, THREE.Euler]
  >([new THREE.Vector3(0, 0, 0), new THREE.Euler(0, 0, 0)]);

  // cam control for model view
  const cameraControlSmall = useRef<OrbitControls>();
  const cameraControlLarge = useRef<OrbitControls>();

  const small = useRef(new THREE.Group());
  const lg = useRef(new THREE.Group());

  //rotation
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  const tl = gsap.timeline();

  useEffect(() => {
    if (!!cameraControlSmall.current) {
      // cameraControlSmall.current.object.position.set(0, 0, 4);
      // cameraControlSmall.current.object.rotation.set(0, 0, 0);
      /// testing
      const faceScreenDir = cameraControlSmall.current.object.rotation.x < -1.8;

      const captureBackDur = 1.2;
      const captureBackEase: gsap.EaseString = "circ.inOut";
      tl.to(cameraControlSmall.current!.object.quaternion, {
        x: 0,
        y: 0,
        z: 0,
        duration: captureBackDur,
        ease: captureBackEase,
      });
      tl.to(
        cameraControlSmall.current!.object.position,
        {
          x: 0,
          y: 0,
          z: 4,
          duration: captureBackDur,
          ease: captureBackEase,
        },
        "<",
      );
      tl.to(
        cameraControlLarge.current!.object.quaternion,
        {
          x: 0,
          y: 0,
          z: 4,
          duration: captureBackDur,
          ease: captureBackEase,
        },
        "<",
      );
      tl.to(
        cameraControlLarge.current!.object.position,
        {
          x: 0,
          y: 0,
          z: 4,
          duration: captureBackDur,
          ease: captureBackEase,
        },
        "<",
      );
    }

    const duration = 1;
    if (size === "small") {
      // 6.1" View

      tl.to("#view1", {
        duration,
        translateX: "0",
        opacity: 1,
      });
      tl.to(
        "#view2",
        {
          duration,
          translateX: "-25%",
          opacity: 0,
        },
        "<",
      );
    }

    // 6.7" View
    if (size === "large") {
      tl.to("#view1", {
        duration,
        translateX: "-75%",
        opacity: 0,
      });
      tl.to(
        "#view2",
        {
          duration,
          translateX: "-100%",
          opacity: 1,
        },
        "<",
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
    <section className="px-0 md:px-20">
      <div>
        <h1 id="heading" className="text-center md:text-start">
          Take a closer look.
        </h1>
        {/* Model container */}
        <div className="mt-5 flex flex-col items-center">
          <div
            className="relative h-[60vh] w-[130%] overflow-hidden md:h-[90vh]"
            id="canvas-container"
          >
            {!!_document && (
              <div className="flex h-full flex-grow translate-x-1/4">
                <Canvas
                  className=" h-[10vh]"
                  id="view1"
                  style={{}}
                  eventSource={_document.getElementById("canvas-container")!}
                >
                  <ModelView
                    index={0}
                    groupRef={small}
                    gsapType="view1"
                    controlRef={cameraControlSmall}
                    setRotationState={setSmallRotation}
                    item={model}
                    size={size}
                    orbitActive={size === "small"}
                    masterPosRot={masterPosRot}
                    setMasterPosRot={setMasterPosRot}
                  />
                </Canvas>
                <Canvas
                  className="h-[10vh] opacity-0"
                  id="view2"
                  style={{}}
                  eventSource={_document.getElementById("canvas-container")!}
                >
                  <ModelView
                    index={1}
                    groupRef={lg}
                    gsapType="view2"
                    controlRef={cameraControlLarge}
                    setRotationState={setLargeRotation}
                    item={model}
                    size={size}
                    orbitActive={size === "large"}
                    masterPosRot={masterPosRot}
                    setMasterPosRot={setMasterPosRot}
                  />
                </Canvas>
              </div>
            )}
          </div>
          <div className="relative flex w-full flex-col items-center">
            <p className="w-full text-center">{model.title}</p>
            <div className="flex w-full items-center justify-center">
              <FloatingNav
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
                            "0 0 0 4px white, 0 0 0 8px var(--blue)")
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
                        onFocus={(e) =>
                          (e.target.style.boxShadow =
                            "0 0 0 4px white, 0 0 0 8px var(--blue)")
                        }
                        onBlur={(e) => (e.target.style.boxShadow = "none")}
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
    </section>
  );
}
