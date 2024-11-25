import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useWallet } from "@/context/wallet";
// import { useAaveSep } from "@/hooks/useAaveSep";
import { useAaveInteractions } from "@/hooks/useAaveInteractions";
import { IAaveAnalytics } from "@/lib/types";
import { handleSelectedToken } from "@/lib/utils";
import { MoreVertical } from "lucide-react";
import { token_addresses } from "@/lib/addresses";
import { useState } from "react";

interface Props {
  data: IAaveAnalytics;
}

export function AaveAnalyticsOptions({ data }: Props) {
  const { asset } = data;

  const { approve, supply } = useAaveInteractions();

  const { chain } = useWallet();

  const [amount, setAmount] = useState<string>("");

  const { sepolia } = token_addresses;

  const selectedToken = handleSelectedToken({
    chain: chain || 11155111,
    token: asset || '',
  });

  const handleSupply = async() => {
    if (!amount) return;

    const amountInWei = BigInt(parseFloat(amount) * Math.pow(10, 18));
    const tokenAddress = selectedToken === "DAI" ? sepolia.dai : sepolia.usdc;

    try {
      await approve.execute(tokenAddress, amountInWei);
      supply.execute(tokenAddress, amountInWei);
    } catch (error) {
      console.error("Supply failed:", error);
    }
  };

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
