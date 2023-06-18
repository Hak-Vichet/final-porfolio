import React from "react";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

export default function Hero() {
  return (
    <>
      <div className="w-full h-screen">
        <div className="flex flex-row h-full">
          <div className="w-1/2 flex flex-col justify-center">
            <div className="flex flex-col gap-3">
              <h1 className="text-[13px] text-[#ff6f91]">SOFTWARE ENGINEER</h1>
              <h1 className="text-2xl text-[#1d4175] font-bold">Hey! I Am</h1>
              <h2 className="text-2xl text-[#db4944] font-bold">Hak Vichet</h2>
              <p className="text-[12px]">
                Innovation, creation lead to the innovate the work and life the
                future.
              </p>
              <div className="w-[120px]">
                <div className="flex items-center justify-center bg-[#ff6f91] text-white rounded-full px-3 py-2">
                  Contact Me
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-8">
              <p className="text-[13px]">Follow Me:</p>
              <div className="flex flex-row gap-2">
                <Link
                  href="facebook.com"
                  className="w-30 h-30 bg-gray-400 p-2 rounded-full"
                >
                  <FaFacebookF className="" />
                </Link>
                <Link
                  href="facebook.com"
                  className="w-30 h-30 bg-gray-400 p-2 rounded-full"
                >
                  <BsTwitter className="" />
                </Link>
                <Link
                  href="facebook.com"
                  className="w-30 h-30 bg-gray-400 p-2 rounded-full"
                >
                  <FaFacebookF className="" />
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
