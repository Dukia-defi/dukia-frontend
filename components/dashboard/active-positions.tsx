"use client";

import { motion } from "framer-motion";
import Heading3 from "../ui/typography/heading3";
import { useWallet } from "@/context/wallet";
import { AavePortfolioSummary } from "./aave/aave-portfolio-summary";
import { UniswapPortfolioSummary } from "./uniswap/uniswap-portfolio-summary";
import Image from "next/image";
import { INetwork } from "@/lib/types";

export function ActivePositions() {
  const { network, networkOptions, setNetwork, isConnected } = useWallet();

  const handleOptionClick = (selectedNetwork: INetwork) =>
    setNetwork(selectedNetwork);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-auto mt-14 w-full space-y-4 rounded-md bg-gray-800 lg:w-10/12"
    >
      <div className="flex items-center justify-between rounded-t-md bg-gray-700 px-8 py-4">
        <Heading3 className="text-xl">Active Positions</Heading3>

        <ChainFilter
          options={networkOptions}
          currentOption={network}
          changeOptionFn={handleOptionClick}
        />
      </div>

      <div className="p-3">
        {isConnected ? (
          <div className="space-y-3">
            <AavePortfolioSummary />
            <UniswapPortfolioSummary />
          </div>
        ) : (
          <p className="text-left text-white">
            Connect your wallet to view active positions
          </p>
        )}
      </div>
    </motion.section>
  );
}

function ChainFilter({
  options,
  currentOption,
  changeOptionFn,
}: {
  options: INetwork[];
  currentOption: INetwork;
  changeOptionFn: (option: INetwork) => void;
}) {
  return (
    <div className="flex items-center space-x-2 rounded-md bg-black-bg px-2 py-1">
      {options?.map((option) => (
        <motion.div
          key={option.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => changeOptionFn(option)}
          className={` ${option.id === currentOption.id ? "bg-gray-800" : ""} flex items-center gap-2 rounded-md px-2 py-1 text-lg uppercase hover:cursor-pointer hover:bg-gray-600`}
          role="button"
        >
          <Image
            src={option.icon}
            width={0}
            height={0}
            alt={`${option.name} icon`}
            className="h-5 w-5"
          />
          <span className="hidden md:block">{option.name}</span>
        </motion.div>
      ))}
    </div>
  );
}
