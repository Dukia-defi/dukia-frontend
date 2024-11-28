import { deployed_contracts, token_addresses } from "./addresses";

interface ISidebarItem {
  title: string;
  url: string;
}

interface IWallet extends IPortfolioDetails {
  address: string;
  balance: number;
}

interface IPortfolioDetails {
  networth: number;
  supplied: number;
  claimable: number;
  staked: number;
  borrowed: number;
}

interface IProgressBar {
  value: number;
  gradient: string;
  max?: number;
}

interface IStatCard {
  title: string;
  value: string | number;
  tooltipContent: string;
  valueColor?: string;
  className?: string;
  icon?: Icon;
}

interface IStatTooltip {
  content: string;
  children: React.ReactNode;
}
interface IAaveAnalytics {
  asset: string;
  totalSupplied: string;
  supplyApy: string;
  totalBorrowed: string;
  variableApy: string;
}

interface IUniswapAnalytics {
  pool: string;
  tvl: string;
  apr: string;
  dailyVolume: string;
  monthlyVolume: string;
}

interface IAaveStats {
  netApy: number;
  supplyBalance: number;
  supplyComposition: number;
  borrowBalance: number;
  borrowPowerUsed: number;
  safetyRatio: number;
  borrowLimit: number;
  leftToBorrow: number;
}

interface IConnectButton {
  label?: string;
}
interface IWallet {
  address: string;
  balance: number;
  networth: number;
  borrowed: number;
  staked: number;
  supplied: number;
  claimable: number;
  chain: number;
}

interface INetwork {
  id: string;
  name: string;
  icon: string;
}

interface IWalletContext {
  wallet: IWallet;
  isConnecting: boolean;
  isConnected: boolean;
  network: INetwork;
  setNetwork: (network: INetwork) => void;
  networkOptions: INetwork[];
  isUnsupportedNetwork: boolean;
  chain: number;
}

interface IItemWrapper {
  title: string;
  value: number | string;
  main?: boolean;
  color: string;
  full?: boolean;
}

interface IDashHeader {
  title: React.ReactNode;
}

interface INetworkSelector {
  current: INetwork;
  options: INetwork[];
  onChange: (network: INetwork) => void;
}

interface IUniswapStats {
  liquityProvided: number;
  poolsProvided: number;
  profit: number;
  netApy: number;
}

interface IDefiTabs {
  id: string;
  label: string;
  description: string;
}

type TContractEvent = `event ${string}`;
type TBytes = readonly `0x${string}`;

type TChainName = keyof typeof token_addresses;
type TTokenName = keyof (typeof token_addresses)[TChainName];
type TDefiName = keyof (typeof deployed_contracts)[TChainName];
type TChainIdToNameMap = Record<number, TChainName>;

interface IOrder {
  action: string;
  amount: string;
  defi: string;
  tokenA: string;
  tokenB?: string;
  tokenPair?: boolean;
}

interface IFunctionSig {
  functionSig: string;
  params: string[];
}

interface IUserBalances {
  usdc: GetWalletBalanceResult | undefined;
  dai: GetWalletBalanceResult | undefined;
  lsk: GetWalletBalanceResult | undefined;
  weth: GetWalletBalanceResult | undefined;
  usdt: GetWalletBalanceResult | undefined;
  link: GetWalletBalanceResult | undefined;
}
