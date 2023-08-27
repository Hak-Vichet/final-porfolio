/* eslint-disable @next/next/no-img-element */
import React from "react";
import { AiOutlineDownload } from "react-icons/ai";

export default function AboutMe() {
  return (
    <>
      <section id="about" className="w-full pt-10 mt-20">
        <div className="flex lg:flex-row md:flex-col flex-col md:items-center sm:items-center sm:gap-10 pt-10 md:pt-20 justify-between md:gap-10">
          <div className="w-full md:w-1/2">
            <div className="flex flex-col gap-5 px-6 md:px-0">
              <div className="">
                <p className="text-[#fa8584]">ABOUT ME</p>
                <h1 className="text-[#1c1e59] font-bold text-2xl sm:text-3xl md:text-4xl">
                  Why hire me for your company?
                </h1>
                <p className="text-gray-600">
                  I'm a software engineer passionate about innovation and
                  problem-solving. I specialize in developing robust and
                  user-friendly software solutions. With expertise in
                  programming and a collaborative mindset, I deliver
                  high-quality projects on time. Let's create impactful software
                  together!
                </p>
              </div>
              <div className="w-[180px]">
                <a
                  href="/Resume-Hak Vichet.pdf"
                  className="flex flex-row gap-2 items-center justify-center bg-[#ce77fc] hover:bg-[#fa8584] text-white rounded-xl px-4 py-3 cursor-pointer"
                  download
                >
                  <p>Download CV</p>
                  <AiOutlineDownload size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-80 sm:h-96 md:h-[300px] lg:h-[400px]">
            <div className="flex h-full items-center justify-center">
              <img
                src="graduate.png"
                alt="img"
                className="flex object-cover w-full h-full shadow-3xl rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
