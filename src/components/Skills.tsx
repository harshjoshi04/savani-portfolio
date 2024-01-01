import React from "react";

const Skills = () => {
  return (
    <div className="w-full h-auto md:h-[90vh] bg-mainSecd pb-16 md:pb-0 text-mainThird">
      <div
        className="max-w-5xl relative mx-auto flex flex-col md:flex-row h-full gap-16 "
        id="skills"
      >
        <div className=" relative    flex md:items-end justify-center pt-16 md:pt-0 md:pr-16 md:-translate-y-48">
          <div className="absolute -translate-y-56 -left-8">
            <p className="-rotate-90 text-bold uppercase hidden md:block">
              Thank You
            </p>
          </div>
          <p className="text-6xl font-bold  uppercase">
            My <br className="hidden md:block" />{" "}
            <span className="text-mainFirst">Skills</span>
          </p>
        </div>

        <div className="pt-16 px-4 w-[90%] ">
          <p className="px-2 py-4 text-5xl uppercase font-extrabold">
            What you need to know
          </p>
          <p className=" p-4 first-letter:pl-2">
            In the dynamic world of digital design, my skills are not just a
            list of competencies but a narrative of experiences, each skill
            carefully honed to create meaningful and impactful user
            interactions.
          </p>
          <div className="grid grid-cols-1 gap-8 px-4 py-4  ">
            <div className="w-80 md:w-96">
              <p className="text-md font-extrabold uppercase">C</p>
              <div className="w-full h-3 rounded bg-white">
                <div className="h-full bg-mainFirst w-[70%] "></div>
              </div>
            </div>
            <div className="w-80 md:w-96">
              <p className="text-md font-extrabold uppercase">C++</p>
              <div className="w-full h-3 rounded bg-white">
                <div className="h-full bg-mainFirst w-[72%] "></div>
              </div>
            </div>
            <div className="w-80 md:w-96">
              <p className="text-md font-extrabold uppercase">HTML</p>
              <div className="w-full h-3 rounded bg-white">
                <div className="h-full bg-mainFirst w-[87%] "></div>
              </div>
            </div>
            <div className="w-80 md:w-96">
              <p className="text-md font-extrabold uppercase">CSS</p>
              <div className="w-full h-3 rounded bg-white">
                <div className="h-full bg-mainFirst w-[82%] "></div>
              </div>
            </div>
            <div className="w-80 md:w-96">
              <p className="text-md font-extrabold uppercase">Javascript</p>
              <div className="w-full h-3 rounded bg-white">
                <div className="h-full bg-mainFirst w-[75%] "></div>
              </div>
            </div>
            <div className="w-80 md:w-96">
              <p className="text-md font-extrabold uppercase">Figma</p>
              <div className="w-full h-3 rounded bg-white">
                <div className="h-full bg-mainFirst w-[85%] "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
