"use client";

import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import { ConnectButton } from "thirdweb/react";
import { client } from "@/app/client";
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
        {/* 
        <ConnectButton
          client={client}
          connectButton={{
            className:
              "!px-8 !py-3 !border-[3px] !text-base !border-purple-1 !bg-gradient-to-r !from-purple-main !via-purple-400 !to-purple-main !rounded-lg !font-bold !hover:shadow-lg !hover:shadow-purple-500/25 !transition-all !duration-300 !text-white",
            label: "Go To App",
          }}
        /> */}
      </motion.div>
    </div>
  );
};
