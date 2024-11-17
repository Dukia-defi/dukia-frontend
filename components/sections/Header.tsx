"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { buttonVariants } from "../ui/button";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="fixed z-50 mx-3 flex w-[92%] items-center justify-between backdrop-blur-md lg:mx-16">
      <Image
        src="/svg/logo.svg"
        width={0}
        height={0}
        alt="Dukia deFi"
        className="h-auto w-[140px] lg:h-auto lg:w-[177px]"
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
