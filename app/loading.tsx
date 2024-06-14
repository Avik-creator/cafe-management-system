import { SparklesCore } from "@/components/sparkels";
import React from "react";

const Loading = () => {
  return (
    <div className="h-[40rem] bg-black relative ">
      <div className="inset-0 flex flex-col items-center justify-center overflow-hidden rounded-md  absolute w-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        Loading...
      </h1>
    </div>
  );
};

export default Loading;
