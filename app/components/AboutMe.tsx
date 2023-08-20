/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { AiOutlineDownload } from "react-icons/ai";

export default function AboutMe() {
  return (
    <>
      <section id="about" className="w-full h-auto mt-20">
        <div className="flex lg:flex-row md:flex-col flex-col md:items-center sm:items-center sm:gap-10 justify-between md:gap-10">
          <div className="flex w-1/2 h-full items-center justify-center">
            <div className="flex h-[200px] items-center justify-center">
              <img
                src="graduate.png"
                alt="img"
                className="flex object-cover justify-center w-[300px] h-[300px] shadow-3xl rounded-lg"
              />
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex flex-col gap-5">
              <div className="">
                <p className="red-text">ABOUT ME</p>
                <h1 className="title">Why hire me for your company?</h1>
                <p className="">
                  I&apos;m a software engineer passionate about innovation and
                  problem-solving. I specialize in developing robust and
                  user-friendly software solutions. With expertise in
                  programming and a collaborative mindset, I deliver
                  high-quality projects on time. Let&apos;s create impactful
                  software together!
                </p>
              </div>
              <div className="w-[200px]">
                <a
                  href="/Resume-Hak Vichet.pdf"
                  className="flex flex-row gap-2 items-center justify-center bg-[#ce77fc] hover:bg-[#fa8584] text-white rounded-xl px-4 py-4 cursor-pointer"
                  download
                >
                  <p>Download CV</p>
                  <AiOutlineDownload size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
