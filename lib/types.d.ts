import { token_addresses } from "./addresses";

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
  chain:
    | Readonly<
        ChainOptions & {
          rpc: string;
        }
      >
    | undefined;
}

interface IItemWrapper {
  title: string;
  value: number;
  main?: boolean;
  color: string;
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

type TChainName = keyof typeof token_addresses;
type TTokenName = keyof (typeof token_addresses)[TChainName];
type TChainIdToNameMap = Record<number, TChainName>;
