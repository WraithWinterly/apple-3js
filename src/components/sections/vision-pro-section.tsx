import React from "react";
import { RiH2 } from "react-icons/ri";

export default function VisionProSection() {
  return (
    <section className="relative flex flex-col items-center px-12">
      <div className="relative w-full max-w-4xl">
        <div className="absolute -top-32 left-0 right-0">
          <hr className="w-full border-solid border-t-gray-border" />
        </div>
      </div>

      <div className="max-w-md border-solid md:max-w-3xl">
        <h2 className="text-center text-white">
          Shoot magical spatial videos, <br /> then relive them on Apple Vision
          Pro
        </h2>
      </div>
    </section>
  );
}
