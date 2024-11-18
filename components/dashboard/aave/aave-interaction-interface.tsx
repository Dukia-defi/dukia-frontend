"use client";

import { aaveTabs } from "@/utils/mock";
import { Button } from "@/components/ui/button";
import { tokens } from "@/utils/mock";
import {
  DefiInteractionInterface,
  InteractionInferaceInput,
} from "../defi-interaction-interface";
import { useState } from "react";

export function AaveInteractionInterface() {
  const [selectedToken, setSelectedToken] = useState<string>("ETH");
  const [activeTab, setActiveTab] = useState<string>("supply");

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
          />

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
    </DefiInteractionInterface>
  );
}
