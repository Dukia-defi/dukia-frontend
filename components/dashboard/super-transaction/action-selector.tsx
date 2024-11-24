import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MinusCircle, PlusCircle } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

interface Props {
  selectedDefi: string;
  defiChangeFn: Dispatch<SetStateAction<string>>;
  actionChangeFn: Dispatch<SetStateAction<string>>;
  defiOptions: string[];
  selectedAction: string;
  actions: string[];
  saveFn: () => void;
  showInput: boolean;
}

export function ActionSelector({
  selectedDefi,
  defiChangeFn,
  defiOptions,
  selectedAction,
  actionChangeFn,
  actions,
  saveFn,
  showInput,
}: Props) {
  return (
    <div className="flex items-center gap-3">
      <Select defaultValue={selectedDefi} onValueChange={defiChangeFn}>
        <SelectTrigger className="rounded-lg border-gray-500 bg-gray-700/50 px-4 py-2 text-gray-200">
          <SelectValue placeholder="Choose DeFi protocol" />
        </SelectTrigger>
        <SelectContent>
          {defiOptions.map((defi) => (
            <SelectItem key={defi} value={defi}>
              {defi}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select defaultValue={selectedAction} onValueChange={actionChangeFn}>
        <SelectTrigger className="rounded-lg border-gray-500 bg-gray-700/50 px-4 py-2 text-gray-200">
          <SelectValue placeholder="Choose Action" />
        </SelectTrigger>
        <SelectContent>
          {actions.map((action) => (
            <SelectItem key={action} value={action}>
              {action}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div>
        <Button
          onClick={saveFn}
          disabled={selectedDefi === "" || selectedAction === ""}
        >
          {showInput ? <MinusCircle /> : <PlusCircle />}
        </Button>
      </div>
    </div>
  );
}
