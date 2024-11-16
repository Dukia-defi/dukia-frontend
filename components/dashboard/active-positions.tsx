"use client";

import Heading3 from "../ui/typography/heading3";
import { useWallet } from "@/context/wallet";
import { AavePortfolioSummary } from "./aave/aave-portfolio-summary";
import { UniswapPortfolioSummary } from "./uniswap/uniswap-portfolio-summary";

export function ActivePositions() {
  const { network, networkOptions, setNetwork } = useWallet();

  const handleOptionClick = (selectedOption: string) =>
    setNetwork(selectedOption);

  //   const isActivePosition = true;

  //todo export network and options from wallet context

  return (
    <section className="mx-auto mt-14 w-10/12 space-y-4 rounded-md bg-gray-800">
      <div className="flex items-center justify-between rounded-t-md bg-gray-700 px-8 py-4">
        <Heading3 className="lg:text-xl">Active Positions</Heading3>

        <ChainFilter
          options={networkOptions}
          currentOption={network}
          changeOptionFn={handleOptionClick}
        />
      </div>

      <div className="p-3">
        {/* {isActivePosition ? ( */}
        <div className="space-y-3">
          <AavePortfolioSummary />

          <UniswapPortfolioSummary />
        </div>
        {/* ) : (
          <Paragraph className="text-left text-white">
             This address has no active positions
           </Paragraph>
         )}
        {/* create a bar for uniswap, aave */}
      </div>
    </section>
  );
}

function ChainFilter({
  options,
  currentOption,
  changeOptionFn,
}: {
  options: string[];
  currentOption: string;
  changeOptionFn: (option: string) => void;
}) {
  return (
    <div className="flex items-center space-x-2 rounded-md bg-black-bg px-2 py-1">
      {options.map((option) => (
        <div
          key={option}
          onClick={() => changeOptionFn(option)}
          className={`${option === currentOption && "bg-gray-800"} rounded-md px-2 py-1 text-lg uppercase hover:cursor-pointer hover:bg-gray-600`}
          role="button"
        >
          {option}
        </div>
      ))}
    </div>
  );
}
