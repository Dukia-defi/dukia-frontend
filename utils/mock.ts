import { Github, Twitter } from "lucide-react";

export const protocols = [
  {
    id: 1,
    name: "Uniswap",
    logo: "/svg/uniswap.svg",
    description: "Decentralized trading protocol",
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
  "DukiaDEFI PROTOCOLS": ["Aave", "Uniswap"],
  "DukiaDEFI NETWORK": ["Ethereum", "Lisk", "Sepolia (Testnet)"],
};

export const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter/X" },
  { icon: Github, href: "#", label: "GitHub" },
];

export const defiTabs = [
  { id: "repay", label: "REPAY", description: "Repay your borrowed assets" },
  {
    id: "supply",
    label: "SUPPLY",
    description: "Deposit the selected asset",
  },
  {
    id: "withdraw",
    label: "WITHDRAW",
    description: "Withdraw selected asset",
  },
  {
    id: "borrow",
    label: "BORROW",
    description: "Borrow assets against your collateral",
  },
];

export const tokens = ["ETH", "WBTC", "WETH", "USDT", "USDC", "AAVE", "DAI"];
