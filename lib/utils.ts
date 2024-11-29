import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { deployed_contracts, token_addresses } from "./addresses";
import {
  IFunctionSig,
  IOrder,
  IUserBalances,
  TChainIdToNameMap,
  TDefiName,
  TTokenName,
} from "./types";
import { aaveFunctions, TOKEN_DECIMALS, uniswapFunctions } from "@/utils/mock";
import { ethers } from "ethers";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const chainIdToName: TChainIdToNameMap = {
  "4202": "lisk",
  "11155111": "sepolia",
  // "42161": "arbitrum",
  "11155420": "optimism",
};

export function getTokenAddress({
  chain,
  token,
}: {
  chain: number;
  token: string;
}): string | undefined {
  const selectedChain = chainIdToName[chain];
  console.log("chain", selectedChain);

  if (!selectedChain) {
    console.error(`Unsupported chain ID: ${chain}`);
    return undefined;
  }

  const chainTokens = token_addresses[selectedChain];
  console.log("chainTokens", chainTokens, token);
  console.log("chain in chainTokens", token in chainTokens);
  if (!(token in chainTokens)) {
    console.error(`Token '${token}' not found on chain '${selectedChain}'`);
    return undefined;
  }

  return chainTokens[token as TTokenName];
}

export function getDefiAddress({
  defi,
  chain,
}: {
  defi: string;
  chain: number;
}): string | undefined {
  const selectedChain = chainIdToName[chain];

  if (!selectedChain) {
    console.error(`Unsupported chain ID: ${chain}`);
    return undefined;
  }

  const chainDeployments = deployed_contracts[selectedChain];
  if (!(defi in chainDeployments)) {
    console.error(`${defi} not found on chain '${selectedChain}'`);
    return undefined;
  }

  return chainDeployments[defi as TDefiName];
}

export function getDefiFunction({
  defi,
  action,
}: {
  defi: string;
  action: string;
}): IFunctionSig | undefined {
  const defiFunctions = {
    aave: aaveFunctions,
    uniswap: uniswapFunctions,
  };

  const selectedDefi = defiFunctions[defi as keyof typeof defiFunctions];

  if (!selectedDefi) {
    console.error(`Unsupported defi: ${defi}`);
    return undefined;
  }

  const defiFunction: IFunctionSig =
    selectedDefi[action as keyof typeof selectedDefi];

  if (!(action in selectedDefi)) {
    console.error(`${action} not supported on ${defi}`);
    return undefined;
  }

  return defiFunction;
}

export function getCallData({
  action,
  params,
}: {
  action?: IFunctionSig;
  params: string[];
}): string | undefined {
  if (!action?.functionSig) {
    console.error(`Unsupported action: ${action}`);
    return undefined;
  }

  const { functionSig, params: functionParams } = action;

  if (functionParams.length !== params.length) {
    console.error(`Invalid number of parameters for ${action.functionSig}`);
    return undefined;
  }

  const iface = new ethers.Interface([functionSig]);
  const callData = iface.encodeFunctionData(functionSig, params);

  return callData;
}

export function getParams({ order, chain }: { order: IOrder; chain: number }) {
  const convertedAmount = ethers.parseUnits(order.amount, 18); // 18 decimals
  if (order.defi === "Uniswap") {
    const tokenA = getTokenAddress({ chain, token: order.tokenA });
    const tokenB = getTokenAddress({ chain, token: order.tokenB! });
    const addressZero = ethers.ZeroAddress;

    switch (order.action) {
      case "Swap":
        return [
          convertedAmount,
          convertedAmount, //todo fix this amount
          [tokenA, tokenB],
          addressZero, //todo replace with right address
          360,
        ];
      case "Add liquidity":
        return [
          tokenA,
          tokenB,
          convertedAmount,
          convertedAmount, //todo fix this amount
          30,
        ];
      case "Remove liquidity":
        return [
          tokenA,
          tokenB,
          convertedAmount, //todo fix
          convertedAmount, //todo fix
          convertedAmount, //todo fix
          30,
        ];
      default:
        console.error("Unsupported action");
        return [];
    }
  }

  if (order.defi === "Aave") {
    const token = getTokenAddress({ chain, token: order.tokenA });

    switch (order.action) {
      case "Supply":
        return [token, convertedAmount];
      case "Borrow":
        return [token, convertedAmount, 3];
      case "Repay":
        return [token, convertedAmount, 3];
      case "Withdraw":
        return [token, convertedAmount];
      default:
        console.error("Unsupported action");
        return [];
    }
  }
}

export const getTokenDecimalPlaces = (tokenSymbol: string): number => {
  return TOKEN_DECIMALS[tokenSymbol.toLowerCase()] || TOKEN_DECIMALS["default"];
};

export const getTokenBalance = ({
  token,
  data,
}: {
  token: string;
  data: IUserBalances;
}): number => {
  const { dai, usdc, lsk, weth, usdt, link } = data;

  switch (token.toLowerCase()) {
    case "dai":
      return +parseFloat(dai.displayValue).toFixed(2);
    case "usdc":
      return +parseFloat(usdc.displayValue).toFixed(2);
    case "usdt":
      return +parseFloat(usdt.displayValue).toFixed(2);
    case "link":
      return +parseFloat(link.displayValue).toFixed(2);
    case "lsk":
      return +parseFloat(lsk.displayValue).toFixed(2);
    case "weth":
      return +parseFloat(weth.displayValue).toFixed(2);
    default:
      return 0;
  }
};
