"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
      className="flex my-20"
    >
      <motion.div className="w-2/3">
        <motion.div className="flex items-center gap-1" variants={fadeInUp}>
          <motion.div variants={logoRotate}>
            <Image
              src="/svg/acc.svg"
              width={100}
              height={0}
              alt="deFi"
              className="h-auto"
            />
          </motion.div>
          <motion.span
            variants={fadeInUp}
            className="text-3xl font-bold uppercase"
          >
            The First
          </motion.span>
          <motion.div variants={logoRotate}>
            <Image
              src="/svg/acc.svg"
              width={100}
              height={0}
              alt="deFi"
              className="h-auto"
            />
          </motion.div>
        </motion.div>

        <motion.p
          variants={fadeInUp}
          className="mt-4 text-5xl text-purple-1 leading-[48px]"
        >
          Centralized Asset Management <br /> Across Multiple Decentralized
          Protocols
        </motion.p>

        <motion.p variants={fadeInUp} className="mt-4 text-2xl font-medium">
          Dukia DeFi provides users with the ability to deposit funds and
          seamlessly open, manage, and close positions across a variety of DeFi
          protocols. The platform also includes detailed analytics, offering
          insights into different asset tokens, helping users make informed
          decisions in the DeFi space.
        </motion.p>
      </motion.div>

      <motion.div className="w-1/3" variants={heroImageVariants}>
        <Image src="/svg/hero.svg" width={456} height={456} alt="deFi" />
      </motion.div>
    </motion.section>
  );
};
