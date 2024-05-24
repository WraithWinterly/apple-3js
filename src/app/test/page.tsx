"use client";
import FloatingNav from "~/components/floating-nav";
import PlayIcon from "~/components/icons/play-icon";

export default function Test() {
  return (
    <div className="flex h-[500px] flex-col items-center justify-center">
      {/* <p>hello world</p>
      <div className="flex-center relative mt-10">
        <MiniNav
          splitMode
          left={<>Test left</>}
          right={
            <div className="absolute h-12 w-12 fill-[#f5f5f7]">
              <PlayIcon />
            </div>
          }
          onRightClick={() => {
            console.log("click");
          }}
        />
      </div> */}
    </div>
  );
}
