import React, { ReactNode, createRef } from "react";
import Image from "next/image";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const HScrollNav = ({ children }: { children: ReactNode }) => {
  const scrollContainerRef = createRef<HTMLDivElement>();

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -155, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 155, behavior: "smooth" });
  };

  return (
    <div className="flex items-center">
      <button
        onClick={scrollLeft}
        className="m-2 border-r border-solid border-r-gray-border p-1"
      >
        <FaAngleLeft className="h-6 w-6 text-gray transition-colors hover:text-white" />
      </button>
      <div
        ref={scrollContainerRef}
        className="flex w-[260px] space-x-2 overflow-hidden"
      >
        {children}
      </div>
      <button
        onClick={scrollRight}
        className="m-2 border-l border-solid border-l-gray-border p-1"
      >
        <FaAngleRight className="h-6 w-6 text-gray transition-colors hover:text-white" />
      </button>
    </div>
  );
};

export default HScrollNav;
