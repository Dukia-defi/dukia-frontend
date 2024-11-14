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
      className="relative min-h-[90vh] flex items-center py-20 overflow-hidden bg-gradient-to-b from-black via-purple-950/20 to-black"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div className="lg:w-2/3 flex flex-col justify-center items-center lg:items-start">
            <motion.div
              className="flex items-center gap-3 mb-3 lg:mb-8"
              variants={fadeInUp}
            >
              <motion.div
                variants={logoRotate}
                className="bg-gradient-to-br from-purple-500/20 to-transparent p-3 rounded-xl backdrop-blur-sm"
              >
                <Image
                  src="/svg/acc.svg"
                  width={0}
                  height={0}
                  alt="deFi"
                  className="w-[60px] lg:w-[80px] h-auto"
                />
              </motion.div>
              <motion.span
                variants={fadeInUp}
                className="text-xl lg:text-3xl font-bold uppercase bg-gradient-to-r from-purple-700 to-purple-200 bg-clip-text text-transparent"
              >
                The First
              </motion.span>
              <motion.div
                variants={logoRotate}
                className="bg-gradient-to-br from-purple-500/20 to-transparent p-3 rounded-xl backdrop-blur-sm"
              >
                <Image
                  src="/svg/acc.svg"
                  width={0}
                  height={0}
                  alt="deFi"
                  className="w-[60px] lg:w-[80px] h-auto"
                />
              </motion.div>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl lg:text-6xl text-center lg:text-start font-bold leading-tight mb-6"
            >
              <span className="bg-gradient-to-r from-purple-700 via-pink-200 to-purple-600 bg-clip-text text-transparent">
                Centralized Asset Management
              </span>
              <br />
              <span className="text-gray-200">
                Across Multiple Decentralized Protocols
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl text-center lg:text-left"
            >
              Dukia DeFi provides users with the ability to deposit funds and
              seamlessly open, manage, and close positions across a variety of
              DeFi protocols. The platform also includes detailed analytics,
              offering insights into different asset tokens, helping users make
              informed decisions in the DeFi space.
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
            className="lg:w-1/3 relative"
            variants={heroImageVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full filter blur-3xl opacity-20"></div>
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
