import { IDefiTabs } from "@/lib/types";
import { Github, Twitter } from "lucide-react";

export const protocols = [
  {
    id: 1,
    name: "Uniswap",
    logo: "/svg/uniswap.svg",
    description: "Decentralized swapping protocol",
  },
  {
    id: 2,
    name: "Aave",
    logo: "/svg/aave.svg",
    description: "Decentralized lending protocol",
  },
];

export const networks = [
  {
    id: 1,
    name: "Ethereum",
    logo: "/svg/ethereum.svg",
    bgGradient: "from-blue-500/20 to-blue-900/20",
  },
  {
    id: 2,
    name: "Lisk",
    logo: "/svg/lisk.svg",
    bgGradient: "from-indigo-500/20 to-indigo-900/20",
  },
  {
    id: 3,
    name: "Arbitrum",
    logo: "/svg/arbitrum.svg",
    bgGradient: "from-sky-500/20 to-sky-900/20",
  },
];

export const performance = [
  {
    value: "1k+",
    label: "Positions Automated",
    gradient: "from-purple-900/20",
  },
  {
    value: "$31M+",
    label: "Total Pool Supply",
    gradient: "from-indigo-900/20",
  },
  {
    value: "$10k+",
    label: "ETH Amounted",
    gradient: "from-sky-900/20",
  },
];

export const footerLinks = {
  "Dukia DeFi Protocols": ["Aave", "Uniswap"],
  "Dukia DeFi Networks": ["Ethereum", "Lisk", "Arbitrum"],
};

export const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter/X" },
  { icon: Github, href: "#", label: "GitHub" },
];

export const aaveTabs: IDefiTabs[] = [
  {
    id: "supply",
    label: "SUPPLY",
    description: "Deposit the selected asset into Aave v3",
  },
  {
    id: "borrow",
    label: "BORROW",
    description: "Borrow assets against your collateral",
  },
  { id: "repay", label: "REPAY", description: "Repay your borrowed assets" },
  {
    id: "withdraw",
    label: "WITHDRAW",
    description: "Withdraw selected asset from Aave",
  },
];

export const uniswapTabs: IDefiTabs[] = [
  {
    id: "swap",
    label: "SWAP",
    description: "Swap token pairs",
  },
  {
    id: "add liquidity",
    label: "ADD LIQUIDITY",
    description: "Add your liquidity to a token pair pool",
  },
  {
    id: "remove liquidity",
    label: "REMOVE LIQUIDITY",
    description: "Remove your liquidity from a token pair pool",
  },
];

export const tokens = ["USDT", "USDC", "WETH", "LISK", "DAI", "LINK"];

export const TOKEN_DECIMALS: { [key: string]: number } = {
  usdc: 6,
  usdt: 6,
  wbtc: 8,
  // Default to 18 for all other tokens
  default: 18,
};

export const INTEREST_RATE_MODES: { [key: string]: number } = {
  usdc: 1, // Stable
  usdt: 1, // Stable
  dai: 1, // Stable
  link: 2, // Variable
  wbtc: 0, // none
  aave: 0, // none
};

export const defiOptions = ["Aave", "Uniswap"];

export const defiActions = {
  Aave: ["Supply", "Borrow", "Repay", "Withdraw"],
  Uniswap: ["Swap", "Add liquidity", "Remove liquidity"],
};

export const aaveFunctions = {
  supply: {
    functionSig: "supply(address,uint256)",
    params: ["address", "uint256"],
  },
  borrow: {
    functionSig: "borrow(address,uint256,uint256)",
    params: ["address", "uint256", "uint256"],
  },
  repay: {
    functionSig: "repay(address,uint256,uint256)",
    params: ["address", "uint256", "uint256"],
  },
  withdraw: {
    functionSig: "withdraw(address,uint256)",
    params: ["address", "uint256"],
  },
};

export const uniswapFunctions = {
  swap: {
    functionSig:
      "swapExactTokensForTokens(uint256,uint256,address[],address,uint256)",
    params: ["uint256", "uint256", "address[]", "address", "uint256"],
  },
  addLiquidity: {
    functionSig: "addLiquidity(address,address,uint256,uint256,uint256)",
    params: ["address", "address", "uint256", "uint256", "uint256"],
  },
  addLiquidityEth: {
    functionSig: "addLiquidityEth(address,uint256,uint256,uint256,uint256)",
    params: ["address", "uint256", "uint256", "uint256", "uint256"],
  },
  removeLiquidity: {
    functionSig:
      "removeLiquidity(address,address,uint256,uint256,uint256,uint256)",
    params: ["address", "address", "uint256", "uint256", "uint256", "uint256"],
  },
};
