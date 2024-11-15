"use client";

import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import { Button } from "../ui/button";

export const Header = () => {
  return (
    <div className="flex items-center justify-between fixed z-50 w-[92%] backdrop-blur-md mx-3 lg:mx-16">
      <Image
        src="/svg/logo.svg"
        width={0}
        height={0}
        alt="Dukia deFi"
        className="w-[140px] h-auto lg:w-[177px] lg:h-auto"
        priority
      />

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button variant="custom" size="lg">
          Go To App
        </Button>
      </motion.div>
    </div>
  );
};
