"use client";
import React, { Dispatch, SetStateAction } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IDefiTabs } from "@/lib/types";

interface Props {
  tabs: IDefiTabs[];
  children: React.ReactNode;
  activeTab: string;
  tabChangeFn: Dispatch<SetStateAction<string>>;
}

interface InputProps {
  tokens: string[];
  selectedToken: string;
  tokenChangeHandler: Dispatch<SetStateAction<string>>;
  onAmountChange: (amount: string) => void;
  value?: string; // Add value prop
  amount: string;
  handleInput?: Dispatch<SetStateAction<string>>;
  tokenPair?: boolean;
  selectedTokenB?: string;
  tokenBChangeHandler?: Dispatch<SetStateAction<string>>;
}

export const DefiInteractionInterface = ({
  tabs,
  children,
  activeTab,
  tabChangeFn,
}: Props) => {
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
    <div className="mx-auto my-5 w-full p-4">
      {/* Tabs */}
      <div
        className={`mb-6 grid grid-cols-2 gap-2 md:grid-cols-${tabs.length}`}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => tabChangeFn(tab.id)}
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
              {tabs.find((t) => t.id === activeTab)?.label}
            </h2>
            <p className="mt-1 text-sm text-gray-400">
              {tabs.find((t) => t.id === activeTab)?.description}
            </p>
          </div>

          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export function InteractionInferaceInput({
  tokens,
  selectedToken,
  tokenChangeHandler,
  amount,
  onAmountChange,
  tokenPair,
  selectedTokenB,
  tokenBChangeHandler,
}: InputProps & {
  amount: string;
  onAmountChange: (value: string) => void;
}) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers and decimals
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      onAmountChange(value);
    }
  };

  return (
    <div className="flex items-center rounded-lg border border-purple-500/20 bg-gray-800/50 p-3">
      <input
        type="text"
        placeholder="0"
        value={amount}
        onChange={handleInputChange}
        className="flex-1 appearance-none border-none bg-transparent text-2xl text-gray-200 placeholder-gray-500 focus:outline-none"
      />

      <Select defaultValue={selectedToken} onValueChange={tokenChangeHandler}>
        <SelectTrigger className="w-[100px] rounded-lg border-gray-500 bg-gray-700/50 px-4 py-2 text-gray-200">
          <SelectValue placeholder="Token" />
        </SelectTrigger>
        <SelectContent>
          {tokens.map((token) => (
            <SelectItem key={token} value={token}>
              {token}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {tokenPair && (
        <>
          <span>/ </span>
          <Select
            defaultValue={selectedTokenB}
            onValueChange={tokenBChangeHandler}
          >
            <SelectTrigger className="w-[100px] rounded-lg border-gray-500 bg-gray-700/50 px-4 py-2 text-gray-200">
              <SelectValue placeholder="Token" />
            </SelectTrigger>
            <SelectContent>
              {tokens.map((token) => (
                <SelectItem key={token} value={token}>
                  {token}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </>
      )}
    </div>
  );
}
