import React from "react";
import Link from "next/link";
import { BiCodeAlt } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

export default function Navbar() {
  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Skills", href: "/skills" },
    { label: "My Work", href: "/mywork" },
    { label: "Contact", href: "/contact" },
  ];
  return (
    <>
      <div className=" w-full bg-white fixed top-0 z-[999]">
        <div className="flex flex-row justify-between items-center mx-10">
          <div className="flex flex-row gap-1 items-center">
            <BiCodeAlt className="w-[40px] h-[40px] text-[#1c1e59]" />
            <h1 className="text-3xl font-bold text-[#ff5652]">Pro.Dev</h1>
          </div>
          <div className="flex flex-row p-2">
            {links.map((link, index) => (
              <div key={index} className="flex p-3">
                <Link href={link.href}>
                  <p className="text-gray-900 hover:text-[#ff5652]">{link.label}</p>
                </Link>
              </div>
            ))}
          </div>
          <div>
            <BsGithub size={20}/>
          </div>
          <div className='py-2 px-4 text-white hover:text-blue-200 bg-[#ce77fc] rounded-md '>
            <Link href='/'>Contact Me</Link>
          </div>
        </div>
      </div>
    </>
  );
}
