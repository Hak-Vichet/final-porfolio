import React from "react";
import Link from "next/link";
import { AiOutlineDownload } from "react-icons/ai";

export default function AboutMe() {
  return (
    <>
      <div className="w-full h-auto">
        <div className="flex flex-row justify-between">
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
            <div>
              <p>ABOUT ME</p>
              <h1>Why hire me for your company?</h1>
              <p>
                I am 22 years old creactive Software Engineer base in Nakuru,
                Kenya specializing in User Interface design and Development. I
                build clean, appealing, and functional interfaces which comply
                with the latest web standards.
              </p>
              <div className="w-[200px]">
                <div className="p-2 bg-[#ff6f91] rounded-lg flex flex-row gap-1 items-center justify-center">
                  <p>Download CV</p>
                  <AiOutlineDownload size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
