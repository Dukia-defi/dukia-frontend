import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useWallet } from "@/context/wallet";
import { useAaveSep } from "@/hooks/useAaveSep";
import { handleSelectedToken } from "@/lib/utils";
import { MoreVertical } from "lucide-react";

interface Props {
  data: IAaveAnalytics;
}

export function AaveAnalyticsOptions({ data }: Props) {
  const { asset } = data;

  const { supplyAsset } = useAaveSep();

  const { activeChain } = useWallet();

  const selectedToken = handleSelectedToken({
    chain: activeChain,
    token: asset,
  });

  function handleSupply() {
    if (!selectedToken) console.error("Invalid token"); //handle the error
    supplyAsset({ tokenAddress: selectedToken!, amount: BigInt("1") }); //roheemah use this to send a transaction
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <MoreVertical />
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem onClick={handleSupply}>Supply</DropdownMenuItem>
        <DropdownMenuItem>Borrow</DropdownMenuItem>
        <DropdownMenuItem>Withdraw</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
