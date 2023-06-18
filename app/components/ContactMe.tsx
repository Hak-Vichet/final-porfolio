import React from "react";
import { LuPhone } from "react-icons/lu";

export default function ContactMe() {
  return (
    <>
      <div className="w-full h-auto mb-10">
        <div className="flex flex-col items-center">
          <p>I want to hear from you</p>
          <h1 className="text-3xl font-bold">Contact Me</h1>
        </div>
        <div className="flex flex-row h-full">
          <div className="w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <div className="flex flex-row gap-2 items-center justify-center">
                <div className="flex w-[60px] h-[60px] rounded-full bg-[#aed6af]">
                  <LuPhone size={20} className="mx-auto my-auto" />
                </div>
                <div className="flex flex-col ">
                  <p className="text-[13px] ">Call Me:</p>
                  <h1 className="font-semibold">+885 95863190</h1>
                </div>
              </div>

              <div className="flex flex-row gap-2 items-center justify-center">
                <div className="flex w-[60px] h-[60px] rounded-full bg-[#aed6af]">
                  <LuPhone size={20} className="mx-auto my-auto" />
                </div>
                <div className="flex flex-col ">
                  <p className="text-[13px] ">Call Me:</p>
                  <h1 className="font-semibold">+885 95863190</h1>
                </div>
              </div>

              <div className="flex flex-row gap-2 items-center justify-center">
                <div className="flex w-[60px] h-[60px] rounded-full bg-[#aed6af]">
                  <LuPhone size={20} className="mx-auto my-auto" />
                </div>
                <div className="flex flex-col ">
                  <p className="text-[13px] ">Call Me:</p>
                  <h1 className="font-semibold">+885 95863190</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 mx-0">
            <div className="flex flex-col w-full gap-2">
              <div className="flex flex-row gap-2 w-full">
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="text-[12px] text-gray-300 p-3 rounded-lg w-full"
                />
                <input
                  type="text"
                  placeholder="Enter your Email"
                  className="text-[12px] text-gray-300 p-3 rounded-lg w-full"
                />
              </div>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Enter subject"
                  className="text-[12px] text-gray-300 p-3 rounded-lg w-full"
                />
              </div>
              <div className="flex">
                <textarea
                  className="text-[12px] text-gray-300 p-3 rounded-lg w-full"
                  placeholder="Enter your message"
                />
              </div>
              <div className="bg-red-300 rounded-lg p-2 items-center justify-center">
                Send Message
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
