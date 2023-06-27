/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

export default function Services() {
  const servvices = [
    {
      title: "Web Design",
      description:
        "As a web developer, I am skilled in creating visually appealing and user-friendly websites, leveraging my expertise in web development to enhance online experiences.",
      src: "/coding.png",
    },
    {
      title: "Mobile Development",
      description:
        "I specialize in mobile app development for iOS and Android platforms, creating seamless and engaging experiences for users.",
      src: "/mobile.png",
    },
    {
      title: "IoT Development",
      description:
        "As an IoT engineer, I specialize in designing and developing innovative solutions that leverage the power of interconnected devices, enabling smart and efficient systems.",
      src: "/iot.png",
    },
    {
      title: "Network Engineer",
      description:
        "As a networking engineer, I excel in designing and implementing robust network infrastructures, ensuring seamless connectivity, security, and optimal performance for businesses.",
      src: "networking.png",
    },
  ];
  return (
    <>
      <section id="services" className="w-full h-auto mt-20 py-10">
        <div className="flex flex-col items-center">
          <h1 className="red-text">WHAT SERVICES I OFFER YOU</h1>
          <h1 className="title">Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
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
                  <p className="text-center">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
