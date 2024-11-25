"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

export const Hero = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  const heroImageVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.2,
      },
    },
  };

  const logoRotate = {
    initial: { rotate: -180, opacity: 0 },
    animate: {
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  return (
    <motion.section
      initial="initial"
      animate="animate"
      variants={staggerChildren}
      className="relative flex min-h-[90vh] items-center overflow-hidden bg-gradient-to-b from-black via-purple-950/20 to-black py-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-blob absolute -left-4 top-0 h-72 w-72 rounded-full bg-purple-main opacity-20 mix-blend-multiply blur-xl filter"></div>
        <div className="animate-blob animation-delay-2000 absolute -right-4 top-0 h-72 w-72 rounded-full bg-cyan-500 opacity-20 mix-blend-multiply blur-xl filter"></div>
        <div className="animate-blob animation-delay-4000 absolute -bottom-8 left-20 h-72 w-72 rounded-full bg-purple-500 opacity-20 mix-blend-multiply blur-xl filter"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <motion.div className="flex flex-col items-center justify-center lg:w-2/3 lg:items-start">
            <motion.h1
              variants={fadeInUp}
              className="mb-6 text-center text-5xl font-bold leading-tight lg:text-start lg:text-6xl"
            >
              <span className="bg-gradient-to-r from-purple-main via-pink-200 to-purple-main bg-clip-text text-transparent">
                Connected DeFi Ecosystem
              </span>
              <br />
              {/* <span className="text-gray-200">For DeFi Users</span> */}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mb-8 max-w-2xl text-center text-xl leading-relaxed text-gray-400 lg:text-left"
            >
              Dukia DeFi gives you access to all your favorite DeFi protocols,
              allowing you to seemlessly view and manage your positions accross
              different chains, and allowing complex and efficient operations.
              Dukia DeFi also gives you more power as a DeFi user by giving you
              detailed analytics, offering insights into different asset
              markets, to help you make informed decisions and tools that let
              interact with DeFi protocols efficiently.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="custom" size="lg">
                Get Started
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative lg:w-1/3"
            variants={heroImageVariants}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-3xl filter"></div>
            <div className="relative">
              <Image
                src="/png/hero.png"
                width={456}
                height={456}
                alt="deFi"
                className="drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
