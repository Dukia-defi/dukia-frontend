"use client";
import { aaveTabs } from "@/utils/mock";
import { Button } from "@/components/ui/button";
import { tokens } from "@/utils/mock";
import {
  DefiInteractionInterface,
  InteractionInferaceInput,
} from "../defi-interaction-interface";
import { useState, useEffect } from "react";
import { useAaveSep } from "@/hooks/useAaveSep";

export default function AaveInteractionInterface() {
  const [selectedToken, setSelectedToken] = useState<string>("ETH");
  const [activeTab, setActiveTab] = useState<string>("supply");
  const [supplyAmount, setSupplyAmount] = useState('');
  const { supplyAsset, txHash, isLoading } = useAaveSep();

  async function handleSupply() {
    try {
      console.log("supply called", supplyAmount, selectedToken);
      const result = await supplyAsset({ 
        tokenAddress: selectedToken, 
        amount: BigInt(supplyAmount) 
      });
      console.log('Supply transaction:', result);
    } catch (error) {
      console.error('Supply error:', error);
    }
  }

  useEffect(() => {
    if (txHash) {
      console.log("suceess")
    }
  }, [txHash]);

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
            onAmountChange={setSupplyAmount}
            value={supplyAmount}
          />

          <div className="absolute -bottom-6 right-0 text-sm text-gray-400">
            max {activeTab === "supply" ? "0.5 ETH" : "0 ETH"}
          </div>
        </div>

        <Button
          className="w-full bg-purple-600 py-6 text-lg font-medium text-white hover:bg-purple-500"
          onClick={handleSupply}
          disabled={!supplyAmount}
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <span>Processing...</span>
              {/* Add a loading spinner component here if you have one */}
            </div>
          ) : (
            activeTab.toUpperCase()
          )}
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