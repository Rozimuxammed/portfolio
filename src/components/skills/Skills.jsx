import React from "react";
import Navbar from "../navbar/Navbar";
import { IoLogoJavascript } from "react-icons/io";
import { FaBootstrap, FaHtml5, FaReact } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";

function Skills() {
  return (
    <div className="bg-black text-white w-full h-screen">
      <div className="container m-auto">
        <Navbar />
        <div className="flex items-center justify-center flex-wrap gap-40 my-10">
          <div className="flex items-center flex-col justify-center gap-2 cursor-pointer">
            <IoLogoJavascript className="text-yellow-400 size-20" />
            <span>Javascript</span>
          </div>
          <div className="flex items-center flex-col justify-center gap-2 cursor-pointer">
            <FaReact className="text-blue-600 size-36" />
            <span>React</span>
          </div>
          <div className="flex items-center flex-col justify-center gap-2 cursor-pointer">
            <SiCss3  className="text-blue-600 size-36" />
            <span>CSS</span>
          </div>
          <div className="flex items-center flex-col justify-center gap-2 cursor-pointer">
            <FaHtml5  className="text-orange-600 size-36" />
            <span>HTML</span>
          </div>
          <div className="flex items-center flex-col justify-center gap-2 cursor-pointer">
            <RiTailwindCssFill  className="text-blue-800 size-36" />
            <span>TAILWINDCSS</span>
          </div>
          <div className="flex items-center flex-col justify-center gap-2 cursor-pointer">
            <FaBootstrap  className="text-violet-600 size-36" />
            <span>BOOTSTRAP</span>
          </div>
          <div className="flex items-center flex-col justify-center gap-2 cursor-pointer">
            <IoLogoFirebase  className="text-amber-400 size-36" />
            <span>FIREBASE</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
