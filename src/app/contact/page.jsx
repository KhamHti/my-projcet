"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs, { send } from "@emailjs/browser";

const text = "Say Hello";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    setError(true);
    setSuccess(false);

    // emailjs
    //   .sendForm(
    //     process.env.NEXT_PUBLIC_SERVICE_ID,
    //     process.env.NEXT_PUBLIC_TEMPLATE_ID,
    //     form.current,
    //     {
    //       publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
    //     }
    //   )
    //   .then(
    //     () => {
    //       console.log("SUCCESS!");
    //       setSuccess(true);
    //       form.current.reset();
    //     },
    //     (error) => {
    //       console.log("FAILED...", error.text);
    //       setError(true);
    //     }
    //   );
  };

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
        <div
          onSubmit={sendEmail}
          ref={form}
          className="h-1/2 lg:h-full lg:w-1/2 rounded-xl text-xl
            flex flex-col gap-8 justify-center p-24"
        >
          <span>Dear Kham Hti,</span>
          <textarea
            name="user_message"
            rows={6}
            className="bg-transparent border-b-2 border-b-black 
            outline-none resize-none"
          />
          <span>My email is..</span>
          <input
            name="user_email"
            type="text"
            className="bg-transparent border-b-2 border-b-black 
            outline-none"
          />
          <span>Regards</span>
          <button className="bg-purple-300 p-4 rounded font-semibold text-gray-600">
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong !
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
