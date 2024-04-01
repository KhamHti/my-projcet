"use client";

import { motion } from "framer-motion";
import React from "react";

const ProjectsPage = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const variants = {
    variant1: {
      x: 400,
      y: 300,
      opacity: 0.5,
    },
    variant2: {
      x: 100,
      y: -300,
      rotation: 50,
    },
  };

  return (
    <div className="flex h-full justify-center items-center">
      <motion.div
        className="w-96 h-96 bg-red-400 rounded"
        initial={{ x: 100, y: 100 }}
        variants={variants}
        animate={{
          x: -100,
          y: -100,
          opacity: 0.5,
        }}
      ></motion.div>
    </div>
  );
};

export default ProjectsPage;
