"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function NetworkSelector({
  current,
  options,
  onChange,
}: INetworkSelector) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-lg bg-purple-2 px-4 py-2"
      >
        <Image
          src={current.icon}
          alt={current.name}
          width={0}
          height={0}
          className="h-5 w-5"
        />
        <span>{current.name}</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full z-50 mt-2 w-full rounded-lg bg-purple-2 p-2"
          >
            {options.map((option) => (
              <motion.button
                key={option.id}
                whileHover={{ backgroundColor: "rgba(124, 58, 237, 0.1)" }}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className="flex w-full items-center gap-2 rounded-lg px-3 py-2"
              >
                <Image
                  src={option.icon}
                  alt={option.name}
                  width={0}
                  height={0}
                  className="h-5 w-5"
                />
                <span>{option.name}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
