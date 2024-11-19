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
            <motion.div
              className="mb-3 flex items-center gap-3 lg:mb-8"
              variants={fadeInUp}
            >
              <motion.div
                variants={logoRotate}
                className="rounded-xl bg-gradient-to-br from-purple-500/20 to-transparent p-3 backdrop-blur-sm"
              >
                <Image
                  src="/svg/acc.svg"
                  width={0}
                  height={0}
                  alt="deFi"
                  className="h-auto w-[60px] lg:w-[80px]"
                />
              </motion.div>
              <motion.span
                variants={fadeInUp}
                className="bg-gradient-to-r from-purple-main to-purple-200 bg-clip-text text-xl font-bold uppercase text-transparent lg:text-3xl"
              >
                The First
              </motion.span>
              <motion.div
                variants={logoRotate}
                className="rounded-xl bg-gradient-to-br from-purple-500/20 to-transparent p-3 backdrop-blur-sm"
              >
                <Image
                  src="/svg/acc.svg"
                  width={0}
                  height={0}
                  alt="deFi"
                  className="h-auto w-[60px] lg:w-[80px]"
                />
              </motion.div>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="mb-6 text-center text-5xl font-bold leading-tight lg:text-start lg:text-6xl"
            >
              <span className="bg-gradient-to-r from-purple-main via-pink-200 to-purple-main bg-clip-text text-transparent">
                Connected DeFi Ecosystem
              </span>
              <br />
              <span className="text-gray-200">For DeFi Users on Lisk</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mb-8 max-w-2xl text-center text-xl leading-relaxed text-gray-400 lg:text-left"
            >
              Dukia DeFi gives you access to all your favorite DeFi protocols,
              allowing you to seemlessly view and manage your positions accross
              different chains, while you enjoy the speed and low transaction
              costs of Lisk. Dukia DeFi also gives you more power as a DeFi user
              by giving you detailed analytics, offering insights into different
              asset markets, to help you make informed decisions. And after
              making your decision, Dukia DeFi gives you access to leverage,
              allowing you make more profit on DeFi investments.
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
                src="/svg/hero.svg"
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
