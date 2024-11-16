"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";
import { performance } from "@/utils/mock";

export const Performance = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const staggerChildren = {
    animate: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.3,
      },
    },
  };

  const scaleIn = {
    initial: { scale: 0.95, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const statsHover = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-black opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,40,200,0.15)_0%,transparent_65%)]"></div>
      </div>

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerChildren}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="text-center mb-20">
          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-purple-main via-purple-300 to-purple-200 bg-clip-text text-transparent">
              Automate your position and
            </span>
            <br />
            <span className="text-white">Check Asset Performance</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Automate leverage management and safeguard your position against
            liquidation, all with non-custodial, trustless Web3 protocols.
          </motion.p>
        </div>

        <motion.div
          variants={scaleIn}
          className="rounded-3xl overflow-hidden bg-gradient-to-br from-purple-900/30 to-black/30 border border-purple-500/20 backdrop-blur-md shadow-2xl mb-16"
        >
          <Image
            src="/svg/analytic.svg"
            width={40}
            height={40}
            alt="performance"
            className="w-full h-auto"
            priority
          />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="py-4"
          >
            <Button
              variant="custom"
              size="lg"
              className="w-full h-full bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-500 hover:to-purple-300 text-white font-medium px-8"
            >
              Boost Position
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="py-4"
          >
            <Button
              size="lg"
              className="w-full h-full bg-gray-900/80 border border-purple-500/30 hover:bg-gray-800/80 hover:border-purple-500/50 text-white font-medium px-8"
            >
              Take Profit
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerChildren}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {performance.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover="hover"
              initial="rest"
              animate="rest"
              variants={statsHover}
              className={`p-8 rounded-2xl bg-gradient-to-br ${stat.gradient} to-black/20 border border-purple-500/10 backdrop-blur-sm hover:border-purple-500/30 transition-colors duration-300`}
            >
              <h3 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
