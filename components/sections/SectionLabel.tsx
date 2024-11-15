"use client";

import React from "react";
import { motion } from "framer-motion";

interface ISectionLabel {
  title: string;
}

export const SectionLabel = (props: ISectionLabel) => {
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };
  return (
    <motion.h3
      variants={itemVariants}
      className="text-5xl font-bold bg-gradient-to-r from-purple-main via-purple-300 to-purple-main bg-clip-text text-transparent"
    >
      {props.title}
    </motion.h3>
  );
};
