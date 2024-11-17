import { ChevronsUpDown } from "lucide-react";
import { Button } from "./ui/button";

interface Props {
  sortFn: () => void;
  title: string;
}

export function SortableTableHeader({ sortFn, title }: Props) {
  return (
    <Button
      variant="ghost"
      onClick={sortFn}
      className="px-0 hover:bg-transparent"
    >
      {title}
      <ChevronsUpDown className="ml-2 h-4 w-4" />
    </Button>
  );
}
