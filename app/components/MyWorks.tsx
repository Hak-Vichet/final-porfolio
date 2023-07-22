/* eslint-disable @next/next/no-img-element */
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { GrPersonalComputer } from "react-icons/gr";

export default function MyWork() {
  const projects = [
    {
      img: "web3.png",
      title: "Web3 Trading Bot",
      description:
        "A platform that allows users to buy and sell the trading bots.",
      liveDemo: "",
      github: "",
      technologies: ["React | ", "TypeScript | ", "MeterialUI"],
    },
    {
      img: "dashboard.png",
      title: "Smart Laundry Dashboard",
      description: "For user and admin to view status of all machine and admin can manage all machines.",
      liveDemo: "",
      github: "",
      technologies: ["React | ", "TypeScript | ", "TailwindCSS"],
    },
    {
      img: "proadvice.png",
      title: "Proadvisor",
      description: "A platform that provide the financial bank advices. Comparing bank featers and chatGPT feature.",
      liveDemo: "",
      github: "",
      technologies: ["React | ", "TypeScript | ", "TailwindCSS"],
    },
  ];
  return (
    <>
      <section id="work" className="w-full  mt-20 mb-10">
        <div className="flex flex-col gap-2 items-center">
          <p className="red-text">CHECK OUT MY RECENT PROJECTS</p>
          <h1 className="title">MY WORK</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col w-full  gap-0 bg-white items-center rounded-lg p-5"
            >
              <div className="flex flex-col w-full p-5">
                <img
                  src={project.img}
                  alt=""
                  className="w-full max-h-[200px] object-cover rounded-xl scroll-smooth transition duration-500 ease-in-out transform hover:scale-110"
                />
                <div>
                  <div className="flex flex-col gap-2">
                    <div className="text-[12px] text-red-400 mt-2">
                      {project.technologies}
                    </div>
                    <h1 className="text-[15px] font-semibold">
                      {project.title}
                    </h1>
                    <p className="text-[12px]">{project.description}</p>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-5">
                    <div className="flex flex-row gap-1">
                      <GrPersonalComputer />
                      <p className="text-[10px] truncate">LIVE DEMO</p>
                    </div>
                    <div className="flex flex-row gap-1">
                      <AiFillGithub />
                      <p className="text-[10px] truncate">SOURCE CODE</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
