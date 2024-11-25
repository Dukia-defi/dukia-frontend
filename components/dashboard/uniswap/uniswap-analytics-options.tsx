import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IUniswapAnalytics } from "@/lib/types";
import { MoreVertical } from "lucide-react";

// interface Props {
//   data: IUniswapAnalytics;
// }

export function UniswapAnalyticsOptions() {
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
