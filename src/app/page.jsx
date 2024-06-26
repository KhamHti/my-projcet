'use client';

import Image from "next/image";
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >

      <div
        className="flex flex-col lg:flex-row h-full px-4 sm:px-8 
      md:px-12 lg:px-20 xl:px-48"
      >
        {/* image container */}
        <div className="h-1/2 lg:w-1/2 lg:h-full relative">
          <Image
            src={"/hero.png"}
            alt="hero"
            fill
            className="object-contain"
          />
        </div>
        {/* text container   */}
        <div
          className="h-1/2 lg:w-1/2 lg:h-full flex flex-col 
        items-center justify-center gap-8"
        >
          <h1 className="text-4xl font-bold md:text-6xl">
            Crafting Digital Experiences, Designing Tomorrow.
          </h1>
          <p className="md:text-xl">
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </p>
          {/* buttons */}
          <div className="flex gap-4 w-full">
            <button
              className="p-4 rounded-xl ring-1 ring-black 
            hover:cursor-pointer bg-black text-white"
            >
              View My Work
            </button>
            <button className="p-4 rounded-xl ring-1 ring-black">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
