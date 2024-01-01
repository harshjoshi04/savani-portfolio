"use client";
import React, { useMemo } from "react";
import { HiMiniArrowLongDown, HiOutlineComputerDesktop } from "react-icons/hi2";
import { FaPenFancy } from "react-icons/fa6";
import {
  MdOutlinePhotoCamera,
  MdPhoneAndroid,
  MdPhonelink,
} from "react-icons/md";
import { IoSearch } from "react-icons/io5";

const Services = () => {
  const SerivceItem = useMemo(
    () => [
      {
        id: 1,
        Icon: HiOutlineComputerDesktop,
        title: "Web Development",
        desc: "I specialize in building websites that not only meet technical excellence but also prioritize the user's journey and satisfaction.",
      },
      {
        id: 2,
        Icon: FaPenFancy,
        title: "UI/UX Development",
        desc: "In the fast-paced digital landscape, the synergy of User Interface (UI) and User Experience (UX) design is the compass that guides successful digital ventures. ",
      },
      {
        id: 3,
        Icon: MdPhoneAndroid,
        title: "App Development",
        desc: "Designing the UI/UX for an app description involves creating an engaging and informative visual representation of your app's features and benefits. ",
      },
      {
        id: 4,
        Icon: MdOutlinePhotoCamera,
        title: "Visual Design",
        desc: "Our UI experts blend innovation with brand consistency, creating visually stunning interfaces that captivate your audience.",
      },
      {
        id: 5,
        Icon: IoSearch,
        title: "User Research ",
        desc: "In-depth insights into your audience's preferences shape our designs, ensuring resonance with your target demographic.",
      },
      {
        id: 6,
        Icon: MdPhonelink,
        title: "Responsive ",
        desc: "Our client-centric approach ensures that our services are customized to meet your specific responsive app development needs.",
      },
    ],
    []
  );
  return (
    <div className="w-full h-auto md:h-[90vh] bg-mainFirst pb-16 md:pb-0">
      <div className="max-w-5xl mx-auto" id="services">
        <p className="pt-36 px-6 text-5xl font-bold uppercase text-mainSecd  ">
          knowledge
        </p>
        <div className="flex flex-col md:flex-row p-6 gap-4  ">
          <div className="grid grid-cols-1 pt-8 md:grid-cols-2 gap-12 pr-6">
            {SerivceItem.map(({ id, Icon, title, desc }) => {
              return (
                <>
                  <div className="flex items-center space-x-4" key={id}>
                    <div className="bg-mainSecd text-mainThird p-3 rounded-full">
                      <Icon size={35} />
                    </div>
                    <div className="flex flex-col max-w-xl">
                      <p className="text-2xl font-semibold">{title}</p>
                      <p className="text-sm max-w-56 line-clamp-2">{desc}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="flex relative  md:items-end justify-center md:justify-end md:pl-32 md:-translate-y-16">
            <div className="hidden absolute md:block top-20 right-3">
              <div className="flex flex-col items-center space-y-4 text-md text-mainThird font-medium ">
                <p className="-rotate-90 py-4">SKills Me</p>
                <HiMiniArrowLongDown />
              </div>
            </div>
            <p className="text-5xl font-bold md:text-end uppercase pt-6">
              My <br className="hidden md:block" />
              <span className="text-mainThird">Service</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
