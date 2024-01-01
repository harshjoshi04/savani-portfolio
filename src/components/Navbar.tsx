"use client";
import React, { useMemo, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { twMerge } from "tailwind-merge";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const handleChange = () => {
    setisOpen((prev) => !prev);
  };
  const Menu = useMemo(
    () => [
      {
        id: 11,
        title: "Home",
        href: "#home",
      },
      {
        id: 22,
        title: "About",
        href: "#about",
      },
      {
        id: 33,
        title: "Services",
        href: "#services",
      },
      {
        id: 44,
        title: "Skills",
        href: "#skills",
      },
    ],
    []
  );
  return (
    <div className="max-w-5xl mx-auto ">
      <div className="flex items-center justify-between  text-mainSecd text-lg font-medium py-2 px-4 md:px-0">
        <div>
          <p className="font-title font-extrabold text-2xl">Harsh</p>
        </div>
        <div className="md:hidden">
          <IoMenu size={30} onClick={handleChange} />
        </div>
        <div className="hidden md:flex items-center space-x-12 text-xl font-semibold  ">
          {Menu.map(({ id, title, href }) => {
            return (
              <a href={href} key={id} className="transition hover:text-white">
                {title}
              </a>
            );
          })}
        </div>
      </div>
      <div
        className={twMerge(
          `flex flex-col items-center h-0 md:hidden overflow-hidden`,
          isOpen && "h-auto"
        )}
      >
        {Menu.map(({ id, title, href }, index) => {
          return (
            <a
              href={href}
              key={index}
              className="transition text-mainSecd hover:text-white py-2"
              onClick={handleChange}
            >
              {title}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
