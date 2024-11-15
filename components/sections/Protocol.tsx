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
    <section className="py-20 bg-gradient-to-b from-black to-purple-950">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="container mx-auto px-4"
      >
        <motion.div className="text-center mb-16" variants={titleVariants}>
          <SectionLabel title="Protocol Supported" />
          <p className="mt-4 text-gray-400 text-lg">
            Seamlessly interact with leading DeFi protocols
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {protocols.map((protocol) => (
            <motion.div
              key={protocol.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center justify-end p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-purple-900/20 backdrop-blur-sm shadow-xl"
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
              <h4 className="text-2xl font-semibold text-white mb-2">
                {protocol.name}
              </h4>
              <p className="text-gray-400 text-center">
                {protocol.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
