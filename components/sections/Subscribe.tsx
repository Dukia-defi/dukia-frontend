"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export const Subscribe = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const glowEffect = {
    initial: { opacity: 0.3 },
    animate: {
      opacity: [0.3, 0.5, 0.3],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          variants={glowEffect}
          initial="initial"
          animate="animate"
          className="absolute right-0 top-0 w-[800px] h-[800px] rounded-full bg-purple-600/10 blur-3xl"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(120,40,200,0.15)_0%,transparent_70%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="initial"
          animate="animate"
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="max-w-3xl"
        >
          <motion.h1
            variants={fadeIn}
            className="text-6xl md:text-7xl font-bold mb-6"
          >
            What Are you still{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Waiting
            </span>{" "}
            for?
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed"
          >
            Discover Dukia DeFi and stay on top of your staking positions,
            leveraging protocol APYs to maximize returns from our pools. Benefit
            from optimized liquidity, seamless token swaps, and borrowing
            options with competitive APYs, all in one streamlined DeFi
            experience.
          </motion.p>

          <motion.div variants={fadeIn} className="flex gap-4">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-500 text-white px-8 group"
            >
              GET STARTED
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
