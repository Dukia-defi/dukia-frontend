"use client";

import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";

export const Header = () => {
  return (
    <div className="flex items-center justify-between fixed z-50 w-[92%] backdrop-blur-md">
      <Image src="/svg/logo.svg" width={177} height={75} alt="Dukia deFi" />

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-2 border-[3px] border-purple-1 bg-gradient-to-r from-purple-700 via-purple-400 to-purple-700 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
      >
        Go To App
      </motion.button>
    </div>
  );
};
