import React from "react";
import Header from "../sub/Header";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className=" absolute top-[-30px] h-full w-full z-[1]  "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <Header />
    </div>
  );
};

export default Hero;
