"use client";
import {
  Html,
  OrbitControls,
  PerspectiveCamera,
  View,
} from "@react-three/drei";
import { OrbitControls as OrbitControlsImpl } from "three/examples/jsm/controls/OrbitControls.js";
import React, {
  Dispatch,
  SetStateAction,
  Suspense,
  useEffect,
  useState,
} from "react";
import Lights from "./lights";
import PhoneModel from "./phone-model";
import * as THREE from "three";
import ThreeLoadingPlaceholder from "./three-loading-placeholder";

export default function ModelView({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  size,
  item,
  orbitActive,
  masterPosRot,
  setMasterPosRot,
}: {
  index: number;
  groupRef: any;
  gsapType: string;
  controlRef: React.MutableRefObject<OrbitControlsImpl | undefined>;
  setRotationState: React.SetStateAction<any>;
  size: string;
  item: any;
  orbitActive: boolean;
  masterPosRot: [THREE.Vector3, THREE.Euler];
  setMasterPosRot: Dispatch<SetStateAction<[THREE.Vector3, THREE.Euler]>>;
}) {
  useEffect(() => {
    if (orbitActive) return;
    if (!!controlRef.current) {
      controlRef.current?.object.rotation.set(
        masterPosRot[1].x,
        masterPosRot[1].y,
        masterPosRot[1].z,
      );
      controlRef.current?.object.position.set(
        masterPosRot[0].x,
        masterPosRot[0].y,
        masterPosRot[0].z,
      );
      controlRef.current?.update();
    }
  }, [masterPosRot]);
  return (
    <>
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0, 0, 3.5]} />

      <Lights />

      <OrbitControls
        makeDefault
        //@ts-ignore
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => {
          setRotationState(controlRef.current?.getAzimuthalAngle());
          let a = controlRef.current?.object.position.clone();
          let b = controlRef.current?.object.rotation.clone();
          if (!!a && !!b) setMasterPosRot([a, b]);
        }}
      />

      <group ref={groupRef} name={`${index === 1 ? "small" : "large"}`}>
        <Suspense fallback={<ThreeLoadingPlaceholder />}>
          <PhoneModel
            scale={index === 0 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </>
  );
}
