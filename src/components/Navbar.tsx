import Image from "next/image";
import React from "react";
import { appleImg, bagImg, searchImg } from "~/utils";
import { navLists } from "~/constants";
export default function Navbar() {
  return (
    <header className="flex w-full items-center justify-between px-5 py-5 sm:px-10">
      <nav className="screen-max-width flex w-full">
        <Image src={appleImg} alt="Apple" width={14} height={18} />
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((item) => (
            <div
              key={item}
              className="text-gray cursor-pointer px-5 text-sm transition-all hover:text-white"
            >
              {item}
            </div>
          ))}
        </div>
        <div className="flex items-baseline gap-7 max-sm:flex-1 max-sm:justify-end">
          <Image src={searchImg} alt="Search" width={18} height={18} />
          <Image src={bagImg} alt="Bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
}
