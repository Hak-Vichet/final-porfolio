import React from "react";
import Image from "next/image";

export default function Services() {
  const servvices = [
    {
      title: "Web Design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      src: "/coding.png",
    },
    {
      title: "Mobile Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      src: "/mobile.png",
    },
    {
      title: "IoT Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      src: "/iot.png",
    },
    {
      title: "Network Engineer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      src: "networking.png",
    },
    {
      title: "Digital Marketing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      src: "fas fa-bullhorn",
    },
  ];
  return (
    <>
      <div className="w-full h-auto mt-20">
        <div className="flex flex-col items-center">
          <h1 className="">WHAT SERVICES I OFFER YOU</h1>
          <h1 className="font-bold text-3xl">Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {servvices.map((service, index) => (
              <div
                key={index}
                className="flex flex-col gap-0 bg-white items-center rounded-lg  p-5"
              >
                <div className="flex bg-gray-200 w-[70px] h-[70px] rounded-full">
                  <img
                    src={service.src}
                    alt="icon"
                    className="w-[50px] h-[50px] mx-auto my-auto"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <h1 className="font-bold">{service.title}</h1>
                  <p className='text-center'>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
