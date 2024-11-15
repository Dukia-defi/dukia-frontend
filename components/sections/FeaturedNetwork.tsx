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
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl opacity-20"></div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="text-center mb-16">
          <SectionLabel title="Featured Network" />
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Seamlessly interact with multiple blockchain networks through our
            unified interface
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {networks.map((network) => (
            <motion.div
              key={network.id}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className={`relative group rounded-2xl bg-gradient-to-br ${network.bgGradient} p-8 border border-white/10 backdrop-blur-sm`}
            >
              <div className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="mb-6 p-4 rounded-full bg-black/30 backdrop-blur-sm"
                  >
                    <Image
                      src={network.logo}
                      width={60}
                      height={60}
                      alt={network.name}
                      className="h-auto"
                    />
                  </motion.div>
                  <h3 className="text-2xl font-semibold mb-2">
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
            <span className="text-xl">Explore Asset management pool</span>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="custom">Go To App</Button>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};
