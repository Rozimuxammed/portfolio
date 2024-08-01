import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <div className="container m-auto w-2/6 h-2/4 bg-white rounded-2xl relative">
        <div className="container m-auto absolute w-60 h-60 bg-white shadow-lg bottom-64 left-1/4 rounded-2xl">
          <img
            className="w-60 h-60 object-cover rounded-2xl mb-2"
            src="./public/me.jpg"
            alt=""
          />
          <h1 className="text-center text-3xl font-medium font-semibold mt-4 mb-9">
            Rozimurodov Rozimuhammad
          </h1>
          <p className="text-center font-thin capitalize">
            Frontend junior developer
          </p>
          <div className="flex items-center justify-between mt-6">
            <NavLink
              className={"flex items-center flex-col cursor-pointer"}
              to={"/about"}
            >
              <img className="w-10 h-10" src="./public/mee.svg" alt="" />
              <p className="text-xs">About me</p>
            </NavLink>
            <NavLink
              className={"flex items-center flex-col cursor-pointer"}
              to={"/skills"}
            >
              <img className="w-10 h-10" src="./public/skil.svg" alt="" />
              <p className="text-xs">Skills</p>
            </NavLink>
            <NavLink
              className={"flex items-center flex-col cursor-pointer"}
              to={"/projects"}
            >
              <img className="w-10 h-10" src="./public/project.svg" alt="" />
              <p className="text-xs">Projects</p>
            </NavLink>
            <NavLink
              className={"flex items-center flex-col cursor-pointer"}
              to={"/contact"}
            >
              <img className="w-10 h-10" src="./public/contact.svg" alt="" />
              <p className="text-xs">Contact</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
