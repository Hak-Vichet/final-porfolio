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
      <div className="w-full h-auto">
        <div className="flex flex-row lg:flex-row md:flex-col md:items-center sm:flex-col sm:items-center h-full py-20">
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
                Innovation, creation lead to the innovate the work and life the
                future.
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
                  href="facebook.com"
                  className=" bg-[#bebec5] p-4 rounded-full"
                >
                  <FaFacebookF size={20} color="#1c1e59" className="" />
                </Link>
                <Link
                  href="facebook.com"
                  className=" bg-[#bebec5] p-4 rounded-full"
                >
                  <BsTwitter size={20} color="#1c1e59" className="" />
                </Link>
                <Link
                  href="facebook.com"
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
      </div>
    </>
  );
}
