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
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-black opacity-20 blur-3xl"></div>

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerChildren}
        className="container relative z-10 mx-auto px-4"
      >
        <div className="mb-16 text-center">
          <motion.h2 variants={fadeInUp} className="mb-4 text-5xl font-bold">
            Everything you need
            <br />
            <span className="bg-gradient-to-r from-purple-main via-purple-300 to-purple-main bg-clip-text text-transparent">
              to be a true Power DeFi user
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mx-auto max-w-3xl text-lg text-gray-400"
          >
            Dukia DeFi isn’t just a platform; it’s a gateway to a more
            connected, efficient DeFi ecosystem.
          </motion.p>
        </div>

        <motion.div
          variants={staggerChildren}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          <motion.div
            variants={fadeInUp}
            className="rounded-2xl border border-purple-900/10 bg-gradient-to-br from-purple-900/20 to-black/20 p-8 backdrop-blur-sm"
          >
            <div className="mb-4 flex items-center gap-4">
              <div className="rounded-full bg-purple-500/20 p-3 backdrop-blur-sm">
                <Image
                  src="/svg/lending.svg"
                  width={40}
                  height={40}
                  alt="lending"
                />
              </div>
              <h3 className="text-2xl font-semibold">
                Cross-Chain + Multi Transactions
              </h3>
            </div>
            <p className="text-gray-400">
              Leverage the power of cross-chain interactions to access DeFi
              platforms on supported chains, and carry out multiple transactions
              on a single or multiple defi apps, allowing a more efficient and
              cost-effective experience.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="rounded-2xl border border-sky-900/10 bg-gradient-to-br from-sky-900/20 to-black/20 p-8 backdrop-blur-sm"
          >
            <div className="mb-4 flex items-center gap-4">
              <div className="rounded-full bg-sky-500/20 p-3 backdrop-blur-sm">
                <Image
                  src="/svg/liquidity.svg"
                  width={40}
                  height={40}
                  alt="liquidity"
                />
              </div>
              <h3 className="text-2xl font-semibold">Pro Asset Management</h3>
            </div>
            <p className="text-gray-400">
              Monitor and manage your assets across multiple protocols on one
              unified platform, make better decisions with our market analysis
              tools, simplifying the complexity of decentralized finance.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="rounded-2xl border border-indigo-900/10 bg-gradient-to-br from-indigo-900/20 to-black/20 p-8 backdrop-blur-sm"
          >
            <div className="mb-4 flex items-center gap-4">
              <div className="rounded-full bg-indigo-500/20 p-3 backdrop-blur-sm">
                <Image
                  src="/svg/withdraw.svg"
                  width={40}
                  height={40}
                  alt="withdraw"
                />
              </div>
              <h3 className="text-2xl font-semibold">
                Access to More Liquidity
              </h3>
            </div>
            <p className="text-gray-400">
              Seamlessly bridge tokens between chains, enabling smooth asset
              transfers and liquidity movement. And whether you’re buying or
              supplying assets, Dukia wallet provides leverage to maximize your
              positions and amplify your strategies.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
