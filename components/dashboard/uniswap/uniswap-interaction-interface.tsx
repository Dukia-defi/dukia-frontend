"use client";

import { uniswapTabs } from "@/utils/mock";
import { Button } from "@/components/ui/button";
import { tokens } from "@/utils/mock";
import {
  DefiInteractionInterface,
  InteractionInferaceInput,
} from "../defi-interaction-interface";
import { useState } from "react";

export function UniswapInteractionInterface() {
  const [selectedAToken, setSelectedAToken] = useState<string>("USDC");
  const [selectedBToken, setSelectedBToken] = useState<string>("ETH");
  const [activeTab, setActiveTab] = useState<string>("swap");
  const [amountA, setAmountA] = useState<string>("");

  return (
    <DefiInteractionInterface
      tabs={uniswapTabs}
      activeTab={activeTab}
      tabChangeFn={setActiveTab}
    >
      <div className="space-y-6">
        <div className="relative">
          <InteractionInferaceInput
            tokens={tokens}
            selectedToken={selectedAToken}
            tokenChangeHandler={setSelectedAToken}
            amount={amountA}
            handleInput={setAmountA}
            tokenPair
            selectedTokenB={selectedBToken}
            tokenBChangeHandler={setSelectedBToken}
          />
        </div>

        <Button
          className="w-full bg-purple-600 py-6 text-lg font-medium text-white hover:bg-purple-500"
          onClick={() => {}} // Todo: Action logic
        >
          {activeTab.toUpperCase()}
        </Button>
      </div>
    </DefiInteractionInterface>
  );
}
