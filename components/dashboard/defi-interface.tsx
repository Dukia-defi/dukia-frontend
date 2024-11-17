"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { defiTabs, tokens } from "@/utils/mock";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const DefiInterface = () => {
  const [activeTab, setActiveTab] = useState<string>("supply");
  const [selectedToken, setSelectedToken] = useState<string>("ETH");

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="mx-auto my-5 w-full max-w-6xl p-4">
      {/* Tabs */}
      <div className="mb-6 grid grid-cols-2 gap-2 md:grid-cols-4">
        {defiTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`rounded-lg p-4 text-sm font-medium transition-all duration-200 ${
              activeTab === tab.id
                ? "border border-purple-1 bg-purple-600/20 text-purple-400"
                : "bg-gray-800/40 text-gray-400 hover:bg-purple-600/10 hover:text-purple-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          variants={cardVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="rounded-xl border border-purple-500/10 bg-gray-900/50 p-6 backdrop-blur-sm"
        >
          <div className="mb-4">
            <h2 className="text-xl font-medium text-gray-200">
              {defiTabs.find((t) => t.id === activeTab)?.label}
            </h2>
            <p className="mt-1 text-sm text-gray-400">
              {defiTabs.find((t) => t.id === activeTab)?.description}
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <div className="flex items-center rounded-lg border border-purple-500/20 bg-gray-800/50 p-3">
                <input
                  type="number"
                  placeholder="0"
                  className="flex-1 border-none bg-transparent text-2xl text-gray-200 placeholder-gray-500 focus:outline-none"
                />

                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-2 rounded-lg bg-gray-700/50 px-4 py-2 text-gray-200 hover:bg-gray-700">
                    {selectedToken || "Token"}
                    <ChevronDown className="ml-2 h-4 w-4 text-gray-400" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {tokens.map((option, index) => (
                      <React.Fragment key={option}>
                        <DropdownMenuItem
                          onSelect={() => setSelectedToken(option)}
                        >
                          {option}
                        </DropdownMenuItem>
                        {index < tokens.length - 1 && <DropdownMenuSeparator />}
                      </React.Fragment>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="absolute -bottom-6 right-0 text-sm text-gray-400">
                max {activeTab === "supply" ? "0.5 ETH" : "0 ETH"}
              </div>
            </div>

            <Button
              className="w-full bg-purple-600 py-6 text-lg font-medium text-white hover:bg-purple-500"
              onClick={() => {}} // Todo: Action logic
            >
              {activeTab.toUpperCase()}
            </Button>

            {/* Additional Info */}
            <div className="rounded-lg bg-gray-800/30 p-4">
              <div className="mb-2 flex justify-between text-sm">
                <span className="text-gray-400">Available to {activeTab}</span>
                <span className="text-gray-200">0 {selectedToken}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Current {activeTab} APY</span>
                <span className="text-purple-400">3.2%</span>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
