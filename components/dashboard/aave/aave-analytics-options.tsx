import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAaveSep } from "@/hooks/useAaveSep";
import { handleSelectedToken } from "@/lib/utils";
import { MoreVertical } from "lucide-react";

interface Props {
  data: IAaveAnalytics;
}

export function AaveAnalyticsOptions({ data }: Props) {
  console.log(data.asset);

  const { supplyAsset } = useAaveSep();

  const {}

  const {} = handleSelectedToken({chain: , :});

  function handleSupply() {

    supplyAsset({ tokenAddress: "", amount: BigInt("1") }); //roheemah use this to send a transaction
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
