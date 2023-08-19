/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineSend } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function Hero() {
  return (
    <>
      <section id="home" className="w-full h-screen sm:h-auto">
        <div className="flex flex-col lg:flex-row md:flex-col md:items-center sm:items-center py-20">
          <div className="w-1/2 flex flex-col justify-center items-center">
            <div className="flex flex-col gap-3">
              <h1 className="text-[13px] text-[#fa8584]">SOFTWARE ENGINEER</h1>
              <h1 className="text-[40px] text-[#1c1e59] font-bold">
                Hey! I Am
              </h1>
              <h2 className="text-[50px] text-[#fa8584] font-bold">
                Hak Vichet
              </h2>
              <p className="text-[20px]">
                Innovation and creation are vital for shaping the future of work
                and life. These powerful forces drive progress and open doors to
                new possibilities. I am a software engineer who is passionate to
                learn new things and create new things.
              </p>
              <div className="w-[180px]">
                <div className="flex flex-row gap-2 items-center justify-center bg-[#ce77fc] hover:bg-[#fa8584] text-white rounded-full px-4 py-4 cursor-pointer">
                  <p>Contact me</p>
                  <AiOutlineSend />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-8 9 items-start">
              <p className="text-[13px]">Follow Me:</p>
              <div className="flex flex-row gap-2">
                <Link
                  target="_blank" rel="noopener noreferrer"
                  href="https://www.facebook.com/vichet.hak.9"
                  className=" bg-[#bebec5] p-4 rounded-full"
                >
                  <FaFacebookF size={20} color="#1c1e59" className="" />
                </Link>
                <Link
                  target="_blank" rel="noopener noreferrer"
                  href="https://twitter.com/vichet_hak"
                  className=" bg-[#bebec5] p-4 rounded-full"
                >
                  <BsTwitter size={20} color="#1c1e59" className="" />
                </Link>
                <Link
                  target="_blank" rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/vichet-hak-612069205/"
                  className=" bg-[#bebec5] p-4 rounded-full"
                >
                  <FaLinkedinIn size={20} color="#1c1e59" className="" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex w-1/2 h-full items-center justify-center">
            <div className="flex h-[500px] items-center justify-center">
              <img
                src="vichet.png"
                alt="img"
                className="flex object-cover justify-center w-[400px] h-[400px] shadow-3xl rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
