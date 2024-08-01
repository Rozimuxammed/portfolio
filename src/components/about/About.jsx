import React from "react";
import Navbar from "../navbar/Navbar";

function About() {
  return (
    <div className="bg-black w-full h-screen text-white text-center">
      <div className="container m-auto">
        <Navbar />
        <h1 className="text-6xl my-7">Hi <span className=" ml-3">I'm Frontend Junior Developer</span></h1>
        <p className="text-2xl tracking-wide mb-40 mt-20 leading-8">
          I have 1 year of experience in web programming at Codial and Najot
          Education Academy in Fergana. My services include redesigning websites
          or adapting and creating mobile and responsive designs. I will work
          with you to determine what you need and create the best possible
          solution. My priorities are quality and meeting deadlines and budget.
          I love to share my passion for my field, so contact me and let's start
          a conversation.
        </p>
        <a className="px-40 py-3 border-2 hover:bg-white hover:text-black tease-in duration-300" target="_blank" href="./public/resume.pdf">CV</a>
      </div>
    </div>
  );
}

export default About;
