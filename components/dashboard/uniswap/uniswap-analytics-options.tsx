import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";

interface Props {
  data: IUniswapAnalytics;
}

export function UniswapAnalyticsOptions({ data }: Props) {
  console.log(data.pool);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <MoreVertical />
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem>Swap</DropdownMenuItem>
        <DropdownMenuItem>Add Liquidity</DropdownMenuItem>
        <DropdownMenuItem>Remove Liquidity</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
