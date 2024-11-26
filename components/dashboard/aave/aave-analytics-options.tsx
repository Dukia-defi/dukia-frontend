import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { useWallet } from "@/context/wallet";
// import { useAaveSep } from "@/hooks/useAaveSep";
// import { IAaveAnalytics } from "@/lib/types";
// import { getTokenAddress } from "@/lib/utils";
import { MoreVertical } from "lucide-react";
// import { token_addresses } from "@/lib/addresses";
// import { useState } from "react";

// interface Props {
//   data: IAaveAnalytics;
// }

export function AaveAnalyticsOptions() {
  // const { asset } = data;

  // const {
  //   chain,
  //   wallet: { address },
  // } = useWallet();

  // const { approve, supply } = useAaveInteractions(address);

  // const [amount, setAmount] = useState<string>("");

  // const selectedToken = getTokenAddress({
  //   chain: chain,
  //   token: asset,
  // });

  // function handleSupply() {
  //   if (!selectedToken) console.error("Invalid token"); //handle the error
  //   supplyAsset({ tokenAddress: selectedToken!, amount: BigInt("1") }); //roheemah use this to send a transaction
  // }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <MoreVertical />
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem>Supply</DropdownMenuItem>
        <DropdownMenuItem>Borrow</DropdownMenuItem>
        <DropdownMenuItem>Withdraw</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
