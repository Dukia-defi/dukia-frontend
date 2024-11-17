"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ISectionLabel {
  title: string;
  className?: string;
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
      className={cn(
        `bg-gradient-to-r from-purple-main via-purple-300 to-purple-main bg-clip-text text-5xl font-bold text-transparent`,
        props.className,
      )}
    >
      {props.title}
    </motion.h3>
  );
};
