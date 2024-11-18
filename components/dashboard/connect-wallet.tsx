"use client";

import { motion } from "framer-motion";
import { ConnectButton } from "../common";
import { Separator } from "../ui/separator";

export function ConnectWallet() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="text-center"
    >
      <motion.div
        className="mx-auto mt-14 w-1/2 space-y-20 rounded-xl bg-purple-2 py-14"
        whileHover={{ boxShadow: "0 4px 15px rgba(124, 58, 237, 0.1)" }}
      >
        <div className="space-y-10">
          <h2 className="text-3xl font-bold">Connect Wallet</h2>
          <p className="text-gray-300">Access all your DeFi positions.</p>
        </div>

        <div className="space-y-5">
          <ConnectButton />
          <Separator />
          <p className="text-base text-green-1 lg:text-base">
            Manage positions across several DeFi protocols from different
            chains, all on Dukia, powered by Lisk.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
