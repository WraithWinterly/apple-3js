"use client";
import {
  Html,
  OrbitControls,
  PerspectiveCamera,
  View,
} from "@react-three/drei";
import React, { Suspense } from "react";
import Lights from "./Lights";
import PhoneModel from "./PhoneModel";
import * as THREE from "three";
import Loader from "./Loader";
export default function ModelView({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  size,
  item,
}: {
  index: number;
  groupRef: any;
  gsapType: string;
  controlRef: any;
  setRotationState: React.SetStateAction<any>;
  size: string;
  item: any;
}) {
  return (
    <View
      index={index}
      id={gsapType}
      className={`absolute h-full w-full ${index === 2 ? "right-[-100%]" : ""}`}
    >
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />

      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current?.getAzimuthalAngle())}
      />

      <group ref={groupRef} name={`${index === 1 ? "small" : "large"}`}>
        <Suspense fallback={<Loader />}>
          <PhoneModel
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  );
}
