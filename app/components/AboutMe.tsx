import React from "react";
import Link from "next/link";
import { AiOutlineDownload } from "react-icons/ai";

export default function AboutMe() {
  return (
    <>
      <div className="w-full h-auto">
        <div className="flex lg:flex-row md:flex-col sm:flex-col md:items-center justify-between md:gap-10">
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
            <div className='flex flex-col gap-5'>
              <div className=''>
                <p className='text-[13px] text-[#e43330]'>ABOUT ME</p>
                <h1 className='text-[30px] text-[#1c1e59] font-bold'>Why hire me for your company?</h1>
                <p className='text-[13px] text-gray-700'>
                  I am 22 years old creactive Software Engineer base in Nakuru,
                  Kenya specializing in User Interface design and Development. I
                  build clean, appealing, and functional interfaces which comply
                  with the latest web standards.
                </p>
              </div>
              <div className="w-[200px]">
                <div className="flex flex-row gap-2 items-center justify-center bg-[#ce77fc] hover:bg-[#fa8584] text-white rounded-xl px-4 py-4 cursor-pointer">
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
