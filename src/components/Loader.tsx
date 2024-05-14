import { Html } from "@react-three/drei";
import React from "react";
import Spinner from "react-bootstrap/Spinner";
const Loader = () => {
  return (
    <Html>
      <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
        <div className="h-[10vw] w-[10vw] rounded-full">
          {" "}
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      </div>
    </Html>
  );
};

export default Loader;
