import React from "react";
import Navbar from "../navbar/Navbar";

function Projects() {
  return (
    <div className="w-full h-auto bg-black text-white">
      <div className="container m-auto">
        <Navbar />
        <div className="flex items-center justify-evenly flex-wrap gap-10 p-14">
          <div className="text-center">
            <img className="w-80 h-auto rounded-xl cursor-pointer mb-3 border-2" src="./public/artel.png" alt=""/>
            <a target="blank"className="text-xl font-bold text-2xl capitalize" href="https://artell.netlify.app/"> artel</a>
          </div>
          <div className="text-center">
            <img className="w-80 h-auto rounded-xl cursor-pointer mb-3 border-2" src="./public/castpress.png" alt=""/>
            <a target="blank"className="text-xl font-bold text-2xl capitalize" href="https://castpress.netlify.app">castpress</a>
          </div>
          <div className="text-center">
            <img className="w-80 h-auto rounded-xl cursor-pointer mb-3 border-2" src="./public/felix.png" alt=""/>
            <a target="blank"className="text-xl font-bold text-2xl capitalize" href="https://marketcars.netlify.app">felix</a>
          </div>
          <div className="text-center">
            <img className="w-80 h-auto rounded-xl cursor-pointer mb-3 border-2" src="./public/gradient.png" alt=""/>
            <a target="blank"className="text-xl font-bold text-2xl capitalize" href="https://randomgradientcolor.netlify.app">gradient color</a>
          </div>
          <div className="text-center">
            <img className="w-80 h-auto rounded-xl cursor-pointer mb-3 border-2" src="./public/lnkhouse.png" alt=""/>
            <a target="blank"className="text-xl font-bold text-2xl capitalize" href="https://lnkhouse.netlify.app"> lnkhouse</a>
          </div>
          <div className="text-center">
            <img className="w-80 h-auto rounded-xl cursor-pointer mb-3 border-2" src="./public/scroll.png" alt=""/>
            <a target="blank"className="text-xl font-bold text-2xl capitalize" href="https://imagescrolll.netlify.app">Scroll image</a>
          </div>
          <div className="text-center">
            <img className="w-80 h-auto rounded-xl cursor-pointer mb-3 border-2" src="./public/search.png" alt=""/>
            <a target="blank"className="text-xl font-bold text-2xl capitalize" href="https://searchpaneel.netlify.app">search panel</a>
          </div>
          <div className="text-center">
            <img className="w-80 h-auto rounded-xl cursor-pointer mb-3 border-2" src="./public/speed.png" alt=""/>
            <a target="blank"className="text-xl font-bold text-2xl capitalize" href="https://forspeed.netlify.app">need for speed</a>
          </div>
          <div className="text-center">
            <img className="w-80 h-auto rounded-xl cursor-pointer mb-3 border-2" src="./public/trafalgar.png" alt=""/>
            <a target="blank"className="text-xl font-bold text-2xl capitalize" href="https://trafallgarr.netlify.app">trafalgar</a>
          </div>
          <div className="text-center">
            <img className="w-80 h-auto rounded-xl cursor-pointer mb-3 border-2" src="./public/user.png" alt=""/>
            <a target="blank"className="text-xl font-bold text-2xl capitalize" href="https://userstodolists.netlify.app">add user</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
