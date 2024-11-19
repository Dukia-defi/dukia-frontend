"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { SectionLabel } from "./SectionLabel";
import { Button } from "../ui/button";
import { networks } from "@/utils/mock";

export const FeaturedNetwork = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 opacity-20 blur-3xl"></div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="container relative z-10 mx-auto px-4"
      >
        <div className="mb-16 text-center">
          <SectionLabel title="Featured Networks" />
          <motion.p
            variants={itemVariants}
            className="mx-auto max-w-3xl text-lg text-gray-400"
          >
            Seamlessly interact with multiple blockchain networks through our
            unified interface on Lisk
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {networks.map((network) => (
            <motion.div
              key={network.id}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className={`group relative rounded-2xl bg-gradient-to-br ${network.bgGradient} border border-white/10 p-8 backdrop-blur-sm`}
            >
              <div className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

              <div className="relative z-10">
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="mb-6 rounded-full bg-black/30 p-4 backdrop-blur-sm"
                  >
                    <Image
                      src={network.logo}
                      width={60}
                      height={60}
                      alt={network.name}
                      className="h-auto"
                    />
                  </motion.div>
                  <h3 className="mb-2 text-2xl font-semibold">
                    {network.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="text-center">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 text-lg"
          >
            <span className="text-xl">Explore the different Asset Markets</span>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="custom">Go To App</Button>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};
