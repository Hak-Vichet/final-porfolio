"use client";

import { useState } from "react";
import Link from "next/link";
import { BiCodeAlt } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Skills", href: "#skills" },
    { label: "My Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="w-full bg-white fixed top-0 z-[9999]">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="flex flex-row gap-1 items-center">
                <BiCodeAlt className="w-[40px] h-[40px] text-[#1c1e59]" />
                <h1 className="text-3xl font-bold text-[#ff5652]">Pro.Dev</h1>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex flex-row p-2">
              {links.map((link, index) => (
                <div
                  key={index}
                  className="flex px-2 items-center hover:bg-[#ff5652] rounded-lg"
                >
                  <Link href={link.href}>
                    <p className="text-gray-900 ">{link.label}</p>
                  </Link>
                </div>
              ))}

              <div className="flex flex-row gap-5 items-center ml-5">
                <Link href="https://github.com/Hak-Vichet">
                  <BsGithub size={20} />
                </Link>
                <div className="py-2 px-4 text-white hover:text-blue-200 bg-[#ce77fc] rounded-md ">
                  <div id="contact" className="cursor-pointer">
                    Contact Me
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="bg-[#1c1e59] inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((item, index) => (
              <div
                key={index}
                className="flex p-3 hover:bg-[#ff5652] rounded-lg"
              >
                <Link href={item.href}>
                  <p className="text-gray-900">{item.label}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar2;
