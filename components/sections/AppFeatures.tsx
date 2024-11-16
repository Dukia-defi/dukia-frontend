"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const AppFeatures = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-black opacity-20 blur-3xl"></div>

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerChildren}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="text-center mb-16">
          <motion.h2 variants={fadeInUp} className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r  from-purple-main via-purple-300 to-purple-main bg-clip-text text-transparent">
              Everything you need
            </span>
            <br />
            in one App and more
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            DeFi investments on this platform are managed across multiple
            protocols, allowing users to open, manage, and adjust positions with
            their own funds.
          </motion.p>
        </div>

        <motion.div
          variants={staggerChildren}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div
            variants={fadeInUp}
            className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-black/20 border border-purple-900/10 backdrop-blur-sm"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-full bg-purple-500/20 backdrop-blur-sm">
                <Image
                  src="/svg/lending.svg"
                  width={40}
                  height={40}
                  alt="lending"
                />
              </div>
              <h3 className="text-2xl font-semibold">Lending and Borrowing</h3>
            </div>
            <p className="text-gray-400">
              Leverage integrated lending protocols to earn interest on your
              deposits or use your assets as collateral to borrow other tokens.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="p-8 rounded-2xl bg-gradient-to-br from-indigo-900/20 to-black/20 border border-indigo-900/10 backdrop-blur-sm"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-full bg-indigo-500/20 backdrop-blur-sm">
                <Image
                  src="/svg/withdraw.svg"
                  width={40}
                  height={40}
                  alt="withdraw"
                />
              </div>
              <h3 className="text-2xl font-semibold">Withdrawal of Assets</h3>
            </div>
            <p className="text-gray-400">
              Different protocols offer varying assets and interest rates,
              allowing you to choose options that best fit your strategy.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="p-8 rounded-2xl bg-gradient-to-br from-sky-900/20 to-black/20 border border-sky-900/10 backdrop-blur-sm"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-full bg-sky-500/20 backdrop-blur-sm">
                <Image
                  src="/svg/liquidity.svg"
                  width={40}
                  height={40}
                  alt="liquidity"
                />
              </div>
              <h3 className="text-2xl font-semibold">
                Providing and Swapping Liquidity
              </h3>
            </div>
            <p className="text-gray-400">
              Provide liquidity or swap tokens with full flexibility: set up
              instant token swaps, limit orders, or dollar-cost averaging (DCA)
              strategies.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
