import React from "react";
import Navbar from "../navbar/Navbar";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { SiGmail, SiNetlify } from "react-icons/si";

function Contact() {
  return (
    <div className="w-full h-screen bg-black text-white">
      <div className="container m-auto">
        <Navbar />
        <div className="w-full flex justify-between items-center">
          <div className="flex flex-col gap-8">
            <h1 className="text-4xl ml-[560px] mb-20">Contact</h1>
            <div className="flex items-center gap-5">
              <RiInstagramFill className="text-3xl text-rose-500" />
              <a
                className="text-2xl tracking-wide"
                target="blank"
                href="https://www.instagram.com/rz.muxammed/"
              >
                Instagram
              </a>
            </div>
            <div className="flex items-center gap-5">
              <FaTelegram className="text-3xl text-sky-500" />
              <a
                className="text-2xl tracking-wide"
                target="blank"
                href="https://t.me/muxammed_r"
              >
                Telegram
              </a>
            </div>
            <div className="flex items-center gap-5">
              <FaGithub className="text-3xl" />
              <a
                className="text-2xl tracking-wide"
                target="blank"
                href="https://github.com/Rozimuxammed"
              >
                GitHub
              </a>
            </div>
            <div className="flex items-center gap-5">
              <SiNetlify className="text-3xl text-cyan-600" />
              <a
                className="text-2xl tracking-wide"
                target="blank"
                href="https://app.netlify.com/teams/rozimuxammed/sites"
              >
                Netlify
              </a>
            </div>
            <div className="flex items-center gap-5">
              <FaLinkedin className="text-3xl text-cyan-500" />
              <a
                className="text-2xl tracking-wide"
                target="blank"
                href="https://app.netlify.com/teams/rozimuxammed/sites"
              >
                Linkedin
              </a>
            </div>
            <div className="flex items-center gap-5">
              <SiGmail className="text-3xl text-orange-700" />
              <a
                className="text-2xl tracking-wide"
                target="blank"
                href="https://rozimuhammadrozimurodov@gmail.com"
              >
                Gmail
              </a>
            </div>
          </div>
          <form className="mt-36 flex-col flex gap-10">
            <label>
              <input
                type="text"
                placeholder="Name"
                className="px-4 w-[500px] h-[40px] bg-transparent border-b-2 border-white outline-none"
              />
            </label>
            <label>
              <input
                type="text"
                placeholder="Last Name"
                className="px-4 w-[500px] h-[40px] bg-transparent border-b-2 border-white outline-none"
              />
            </label>
            <label>
              <input
                type="email"
                placeholder="Email"
                className="px-4 w-[500px] h-[40px] bg-transparent border-b-2 border-white outline-none"
              />
            </label>
            <label>
              <input
                type="number"
                placeholder="Number"
                className="px-4 w-[500px] h-[40px] bg-transparent border-b-2 border-white outline-none"
              />
            </label>
            <label>
              <textarea placeholder="Massage " className="px-4 mb-1 w-[500px] h-[40px] bg-transparent border-b-2 border-white outline-none"></textarea>
            </label>
            <button className="px-40 py-3 border-2 hover:bg-white hover:text-black tease-in duration-300">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
