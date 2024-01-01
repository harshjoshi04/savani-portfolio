import React from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiMiniArrowLongDown } from "react-icons/hi2";
import { MdEmail, MdOutlinePhone } from "react-icons/md";
const About = () => {
  return (
    <div className="w-full h-auto md:h-[100vh] bg-mainThird pb-16 md:pb-0">
      <div className="max-w-5xl flex justify-center mx-auto   " id="about">
        <div className="flex flex-col md:flex-row justify-start  items-center    md:gap-44">
          <div className="relative">
            <div className="absolute hidden md:block  translate-y-36">
              <div className="flex flex-col items-center space-y-4 text-md text-mainFirst font-medium ">
                <p className="-rotate-90 py-8">Next Services</p>
                <HiMiniArrowLongDown />
              </div>
            </div>
            <p className="text-5xl font-bold uppercase pt-16 md:pt-96">
              About
              <br className="hidden md:block" />
              <span className="text-mainFirst">Me</span>
            </p>
          </div>

          <div className="flex flex-col space-y-3   text-2xl text-black font-bold translate-y-16 max-w-2xl pb-16 px-8">
            <p>Hello! Im Harsh Savani</p>
            <p>
              A passionate UI/UX developer dedicated to crafting digital
              experiences that seamlessly blend aesthetics with functionality
            </p>
            <p className="font-medium text-[1.2rem] -tracking-tighter first-letter:pl-4 pt-6">
              My journey in the world of UI/UX development is driven by a
              commitment to enhancing user satisfaction and engagement. I
              believe in the power of thoughtful design to not only meet
              business objectives but also to create meaningful connections
              between users and digital products. Equipped with a blend of
              creativity and technical proficiency, I leverage the latest design
              trends, tools, and methodologies to bring innovative concepts to
              life. Beyond the pixels and code, I place a strong emphasis on
              collaboration, working closely with cross-functional teams to
              ensure that my designs align seamlessly with the overall vision of
              the projects I undertake.
            </p>
            <p className="font-title p-6 mx-auto md:mx-0">Harsh Savani</p>
            <div className="flex items-center space-x-5 pb-4 mx-auto md:mx-0">
              <a
                href="https://www.instagram.com/harsh_savani1404/"
                className="p-2 bg-mainFirst rounded-full transition hover:text-mainThird cursor-pointer    "
              >
                <FaInstagram />
              </a>
              <a className="p-2 bg-mainFirst rounded-full transition hover:text-mainThird cursor-pointer    ">
                <FaLinkedinIn />
              </a>
              <a
                href="mailto:harshsvn@gmail.com"
                className="p-2 bg-mainFirst rounded-full transition hover:text-mainThird cursor-pointer    "
              >
                <MdEmail />
              </a>
              <a
                href="tel:99248 94483"
                className="p-2 bg-mainFirst rounded-full transition hover:text-mainThird cursor-pointer    "
              >
                <MdOutlinePhone />
              </a>
            </div>
            <a
              href="/savani-cv.pdf"
              download
              className=" w-48 m-4  bg-mainFirst px-3 text-center py-2 rounded-full transition hover:text-mainThird mx-auto md:mx-0"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
