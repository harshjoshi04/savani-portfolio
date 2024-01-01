import React from "react";
import { HiMiniArrowLongDown } from "react-icons/hi2";
const HeroSection = () => {
  return (
    <div className="max-w-5xl h-[50%] relative  mx-auto flex justify-end  translate-y-2/3   px-2">
      <div className="">
        <p className="text-end uppercase text-5xl font-bold text-mainFirst">
          Hello! <br />
          My name is harsh savani
        </p>
        <p className="text-md text-white -tracking-tighter   p-1 text-end">
          UI/UX Developer
        </p>
      </div>
      <div className="absolute bottom-0  left-0">
        <div className="flex flex-col items-center space-y-4 text-md text-mainFirst font-medium ">
          <p className="-rotate-90 py-4">About Me</p>
          <HiMiniArrowLongDown />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
