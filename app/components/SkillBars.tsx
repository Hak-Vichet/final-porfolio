/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { useState, useEffect } from "react";

const skills = [
  { scr: "python.png", language: "Python", level: "Junior" },
  { scr: "reactjs.png", language: "ReacJs", level: "Juior" },
  { scr: "next.png", language: "NextJs", level: "Junior" },
  { scr: "flutter.png", language: "Flutter", level: "Junior" },
  { scr: "react-native.png", language: "React-Native", level: "Junior" },
  { scr: "java-script.png", language: "JavaScript", level: "Junior" },
  { scr: "typescript.png", language: "TypeScript", level: "Junior" },
  { scr: "tailwind.png", language: "Tailwind", level: "Junior" },
  { scr: "mongo.png", language: "MongoDB", level: "Junior" },
  { scr: "postgre.png", language: "PostgreSQL", level: "Junior" },
  { scr: "mysql.png", language: "MySQL", level: "Junior" },
  { scr: "firebase.png", language: "Firebase", level: "Junior" },
  { scr: "git.png", language: "Git", level: "Intermediate" },
  { scr: "github.png", language: "GitHub", level: "Intermediate" },
  { scr: "gitlab.png", language: "GitLab", level: "Intermediate" },
  { scr: "html.png", language: "HTML", level: "Junior" },
  { scr: "figma.png", language: "Figma", level: "Junior" },
];

export default function SkillBars() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 1000); // Adjust the interval duration as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="skills" className="w-full h-auto mt-20 mb-10">
      <div className="flex flex-col items-center">
        <h1 className="red-text">MY SKILL PROGRESS SO FAR</h1>
        <h1 className="title">My Skills</h1>
        <div className="w-full h-[150px] overflow-hidden mt-10">
          <div
            className="flex h-full transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 200}px)` }}
          >
            {skills.map((slide, index) => (
              <div
                key={index}
                className= {`flex flex-col w-[200px] h-full border-2 justify-between bg-white rounded-lg items-center flex-shrink-0`}
              >
                <div className="flex flex-col items-center mt-3">
                  <div className="flex w-[60px] h-[60px] rounded-full bg-gray-300">
                    <img
                      src={slide.scr}
                      alt={slide.scr}
                      className="w-8 h-8 mx-auto my-auto"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <h3 className="text-[13px] font-bold">{slide.language}</h3>
                    <div className="py-0 px-4 border-2 border-red-400 rounded-full">
                      <p className="text-[12px] text-gray-500">{slide.level}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${skills.length * 200}px); // Adjust for the total width of all skills
          }
        }
      `}</style>
    </section>
  );
}
