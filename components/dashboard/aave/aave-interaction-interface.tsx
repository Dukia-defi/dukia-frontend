"use client";

import { aaveTabs, tokens } from "@/utils/mock";
import { Button } from "@/components/ui/button";
import {
  DefiInteractionInterface,
  InteractionInferaceInput,
} from "../defi-interaction-interface";
import { useState } from "react";
import { useAaveInteractions } from "@/hooks/useAaveInteractions";
import { token_addresses } from "@/lib/addresses";

export function AaveInteractionInterface() {
  const [selectedToken, setSelectedToken] = useState<string>("ETH");
  const [activeTab, setActiveTab] = useState<string>("supply");
  const [amount, setAmount] = useState<string>("");

  const { approveContract, supply } = useAaveInteractions();

  const { sepolia } = token_addresses;

  const handleSupply = () => {
    if (!amount) return;

    const amountInWei = BigInt(parseFloat(amount) * Math.pow(10, 18));
    const tokenAddress = selectedToken === "DAI" ? sepolia.dai : sepolia.usdc;

    try {
      approveContract.execute(tokenAddress, amountInWei);
      supply.execute(tokenAddress, amountInWei);
    } catch (error) {
      console.error("Supply failed:", error);
    }
  };

  return (
    <DefiInteractionInterface
      tabs={aaveTabs}
      activeTab={activeTab}
      tabChangeFn={setActiveTab}
    >
      <div className="space-y-6">
        <div className="relative">
          <InteractionInferaceInput
            tokens={tokens}
            selectedToken={selectedToken}
            tokenChangeHandler={setSelectedToken}
            amount={amount}
            onAmountChange={setAmount}
          />

          <div className="absolute -bottom-6 right-0 text-sm text-gray-400">
            max {activeTab === "supply" ? "0.5 ETH" : "0 ETH"}
          </div>
        </div>

        <Button
          className="w-full bg-purple-600 py-6 text-lg font-medium text-white hover:bg-purple-500"
          onClick={handleSupply}
          disabled={!amount || parseFloat(amount) <= 0}
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
    </DefiInteractionInterface>
  );
}
