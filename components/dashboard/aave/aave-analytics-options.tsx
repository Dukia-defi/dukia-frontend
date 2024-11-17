import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";

interface Props {
  data: IAaveAnalytics;
}

export function AaveAnalyticsOptions({ data }: Props) {
  console.log(data.asset);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <MoreVertical />
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem>Lend</DropdownMenuItem>
        <DropdownMenuItem>Borrow</DropdownMenuItem>
        <DropdownMenuItem>Withdraw</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
