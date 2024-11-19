"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";
import { protocols } from "@/utils/mock";

export const Protocol = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const titleVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-gradient-to-b from-black to-purple-950 py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="container mx-auto px-4"
      >
        <motion.div className="mb-16 text-center" variants={titleVariants}>
          <SectionLabel title="Protocols Supported" />
          <p className="mt-4 text-lg text-gray-400">
            Seamlessly interact with your favorite DeFi protocols
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          {protocols.map((protocol) => (
            <motion.div
              key={protocol.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center justify-end rounded-2xl border border-purple-900/20 bg-gradient-to-br from-gray-900 to-black p-8 shadow-xl backdrop-blur-sm"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <Image
                  src={protocol.logo}
                  width={115}
                  height={60}
                  alt={protocol.name}
                  className="h-auto"
                />
              </motion.div>
              <h4 className="mb-2 text-2xl font-semibold text-white">
                {protocol.name}
              </h4>
              <p className="text-center text-gray-400">
                {protocol.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
