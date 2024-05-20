import React from "react";

export default function Sticky() {
  return (
    <>
      {/* wrap */}
      <div className="mx-auto h-[180vh] min-h-screen max-w-5xl bg-cover bg-center pb-8">
        {/* inner */}
        <div className="sticky top-0 flex h-[100vh] min-h-screen flex-col justify-end pb-8">
          {/* sticky */}
          <h1 className="m-0 bg-black bg-opacity-70 p-5 text-center text-white">
            This is the text that will Stick to the bottom
          </h1>
        </div>
      </div>
      <main className="mx-auto max-w-5xl p-4">
        <h2>
          Following content here will follow once the element above has scrolled
          away. The position:sticky footer in this example sticks to the
          container that the image is placed in.
        </h2>
        <p>
          If you want a position:sticky footer on the viewport then see{" "}
          <a
            href="https://codepen.io/paulobrien/pen/VwWNQVz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            This example
          </a>
        </p>
      </main>
    </>
  );
}
