/* eslint-disable @next/next/no-img-element */
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { GrPersonalComputer } from "react-icons/gr";

export default function MyWork() {
  const projects = [
    {
      img: "project1.png",
      title: "Stock Dashboard",
      description: "A dashboard that displays the latest stock.",
      liveDemo: "",
      github: "",
      technologies: ["React | ", "TypeScript | ", "TailwindCSS"],
    },
    {
      img: "project1.png",
      title: "Stock Dashboard",
      description: "A dashboard that displays the latest stock.",
      liveDemo: "",
      github: "",
      technologies: ["React | ", "TypeScript | ", "TailwindCSS"],
    },
    {
      img: "project1.png",
      title: "Stock Dashboard",
      description: "A dashboard that displays the latest stock.",
      liveDemo: "",
      github: "",
      technologies: ["React | ", "TypeScript | ", "TailwindCSS"],
    },
    {
      img: "project1.png",
      title: "Stock Dashboard",
      description: "A dashboard that displays the latest stock.",
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
              className="flex flex-col gap-0 bg-white items-center rounded-lg p-5"
            >
              <div className="flex flex-col m-4">
                <img
                  src={project.img}
                  alt=""
                  className="w-full scroll-smooth transition duration-500 ease-in-out transform hover:scale-11"
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
                  <div className="flex flex-row justify-between items-center justify-center mt-5">
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
