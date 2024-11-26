"use client";
import { ConnectButton } from "../common";
import { motion } from "framer-motion";
import NetworkSelector from "./network-selector";
import { useWallet } from "@/context/wallet";
import { IDashHeader } from "@/lib/types";

export function DashboardHeader(props: IDashHeader) {
  const {
    isConnected,
    network,
    networkOptions,
    setNetwork,
    isUnsupportedNetwork,
  } = useWallet();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-10 flex items-center justify-between"
    >
      {props.title}

      <div className="flex items-center gap-4">
        {isConnected && (
          <>
            {isUnsupportedNetwork ? (
              <div className="flex items-center gap-2 rounded-lg border border-red-500 bg-red-100 px-4 py-2 text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2L1 22h22L12 2zm1 18h-2v-2h2v2zm0-4h-2V8h2v8z" />
                </svg>
                Unsupported Network
              </div>
            ) : (
              <NetworkSelector
                current={network}
                options={networkOptions}
                onChange={setNetwork}
              />
            )}
          </>
        )}
        <ConnectButton />
      </div>
    </motion.header>
  );
}
