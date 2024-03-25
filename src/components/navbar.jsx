"use client";

import { useState } from "react";
import Link from "next/link";
import Image from 'next/image'

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
  { url: "/projects", title: "Projects" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="h-full items-center flex 
      justify-between px-4 sm:px-8 md:px-12 lg:px-20
      xl:px-48"
    >
      {/* links */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => {
          return (
            <Link href={link.url} key={link.id}>
              {link.title}
            </Link>
          );
        })}
      </div>
      {/* logo */}
      <div className="md:hidden lg:flex w1/3 justify-center">
        <Link 
          href={"/"}
          className="text-sm rounded-md
         bg-black p-1 font-semibold flex 
          items-center justify-center"
        >
          <span className="text-white mr-1">Kham</span>
          <span
            className="text-black w-12 h-8 
            rounded bg-white flex items-center
            justify-center"
          >
            .dev
          </span>
        </Link>
      </div>

      {/* social logo */}
      <div className="hidden md:flex gap-4 w-1/3">
        <Link href="#">
          <Image src='/github.png' alt='' width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src='/dribbble.png' alt='' width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src='/facebook.png' alt='' width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src='/instagram.png' alt='' width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src='/linkedin.png' alt='' width={24} height={24} />
        </Link>
      </div>
      {/* responsive menu button */}
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between
            relative z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
        </button>
        {/* menu list */}
        {isOpen ? (
          <div
            className="absolute top-0 left-0 flex flex-col items-center
          justify-center bg-black text-white text-4xl w-screen
          h-screen gap-8"
          >
            {links.map((link) => {
              return (
                <Link href={link.url} key={link.index}>
                  {link.title}
                </Link>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
