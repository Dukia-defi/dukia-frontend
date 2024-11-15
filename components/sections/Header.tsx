"use client";

import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import { buttonVariants } from "../ui/button";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex items-center justify-between fixed z-50 w-[92%] backdrop-blur-md">
      <Image
        src="/svg/logo.svg"
        width={0}
        height={0}
        alt="Dukia deFi"
        className="w-[140px] h-auto lg:w-[177px] lg:h-auto"
        priority
      />

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link
          href={"/dashboard"}
          className={buttonVariants({ variant: "custom", size: "lg" })}
        >
          Go To App
        </Link>
      </motion.div>
    </div>
  );
};
