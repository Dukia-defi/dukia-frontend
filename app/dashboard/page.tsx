"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ConnectWallet } from "@/components/dashboard/connect-wallet";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { PortfolioOverview } from "@/components/dashboard/portfolio-overview";
import { useWallet } from "@/context/wallet";
import { Icons } from "@/components/icons";
import Heading1 from "@/components/ui/typography/heading1";

export default function DashboardPage() {
  const { isConnected } = useWallet();

  return (
    <div className="container mx-auto px-4">
      <DashboardHeader
        title={
          <div className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="rounded-md bg-purple-2 p-2"
            >
              <Icons.PortfolioIcon />
            </motion.div>
            <Heading1>Portfolio</Heading1>
          </div>
        }
      />

      <AnimatePresence mode="wait">
        {!isConnected ? (
          <ConnectWallet />
        ) : (
          <motion.div
            key="portfolio"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <PortfolioOverview />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
