import React from "react";
import { LuPhone } from "react-icons/lu";

export default function ContactMe() {
  return (
    <>
      <section id="contact" className="w-full mt-20 mb-20">
        <div className="flex flex-col items-center">
          <p className="text-[#fa8584]">I want to hear from you</p>
          <h1 className="text-[#1c1e59] font-bold text-2xl sm:text-3xl">
            Contact Me
          </h1>
        </div>
        <div className="flex lg:flex-row md:flex-col flex-col md:items-center sm:items-center sm:gap-10 justify-between md:gap-10 mt-10">
          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <div className="flex flex-row gap-2 items-center">
                <div className="flex w-12 h-12 rounded-full bg-[#aed6af] flex-shrink-0">
                  <LuPhone size={20} className="mx-auto my-auto" />
                </div>
                <div className="flex flex-col">
                  <p className="text-[12px] text-gray-500">Call Me:</p>
                  <h1 className="font-semibold text-base">+885 95863190</h1>
                </div>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <div className="flex w-12 h-12 rounded-full bg-[#aed6af] flex-shrink-0">
                  <LuPhone size={20} className="mx-auto my-auto" />
                </div>
                <div className="flex flex-col">
                  <p className="text-[12px] text-gray-500">LinkedIN</p>
                  <h1 className="font-semibold text-base">Hak Vichet</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 mx-0 mt-6 md:mt-0">
            <div className="flex flex-col w-full gap-2">
              <div className="flex flex-col md:flex-row gap-2 w-full">
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="text-[12px] text-gray-500 p-3 rounded-lg w-full"
                />
                <input
                  type="text"
                  placeholder="Enter your Email"
                  className="text-[12px] text-gray-500 p-3 rounded-lg w-full"
                />
              </div>
              <input
                type="text"
                placeholder="Enter subject"
                className="text-[12px] text-gray-500 p-3 rounded-lg w-full"
              />
              <textarea
                className="text-[12px] text-gray-500 p-3 rounded-lg w-full"
                placeholder="Enter your message"
              />
              <div className="flex bg-[#fa8584] rounded-lg p-2 items-center justify-center text-white cursor-pointer">
                Send Message
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
