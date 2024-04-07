"use client";

import { motion } from "framer-motion";

const text = "Say Hello";

const ContactPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div
        className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20
        xl:px-48"
      >
        {/* text container  */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
                key={index}
              >
                {letter}
              </motion.span>
            ))}
            🙂
          </div>
        </div>
        {/* foam container  */}
        <div className="h-1/2 lg:h-full lg:w-1/2">
          <span>Dear Kham Hti ,</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
