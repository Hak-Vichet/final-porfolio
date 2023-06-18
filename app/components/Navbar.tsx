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
      <div className=" w-full bg-cyan-300 fixed top-0">
        <div className="flex flex-row justify-between items-center mx-10">
          <div className="flex flex-row gap-1 items-center">
            <BiCodeAlt className="w-[40px] h-[40px]" />
            <h1 className="text-3xl font-bold">Pro.Dev</h1>
          </div>
          <div className="flex flex-row p-2">
            {links.map((link, index) => (
              <div key={index} className="flex p-3">
                <Link href={link.href}>
                  <p className="text-white hover:text-red-400">{link.label}</p>
                </Link>
              </div>
            ))}
          </div>
          <div>
            <BsGithub size={20}/>
          </div>
          <div className='p-2 bg-red-300 rounded-md '>
            <Link href='/'>Contact Me</Link>
          </div>
        </div>
      </div>
    </>
  );
}
