"use client";
import { ConnectButton } from "../common";
import { motion } from "framer-motion";
import NetworkSelector from "./network-selector";
import { useWallet } from "@/context/wallet";
import { IDashHeader } from "@/lib/types";

export function DashboardHeader(props: IDashHeader) {
  const { isConnected, network, networkOptions, setNetwork } = useWallet();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-10 flex items-center justify-between"
    >
      {props.title}

      <div className="flex items-center gap-4">
        {isConnected && (
          <NetworkSelector
            current={network}
            options={networkOptions}
            onChange={setNetwork}
          />
        )}
        <ConnectButton />
      </div>
    </motion.header>
  );
}
