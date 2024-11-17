import { Icons } from "../icons";
import { Button } from "../ui/button";
import Heading1 from "../ui/typography/heading1";
import Paragraph from "../ui/typography/paragraph";

interface Props {
  address: string;
  balance: number;
  connectFn: () => void;
}

export function DashboardHeader({ address, balance, connectFn }: Props) {
  return (
    <header className="mb-10 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="rounded-md bg-purple-2 p-2">
          <Icons.portfolioIcon />
        </div>
        <Heading1>Portfolio</Heading1>
      </div>

      {address !== "" && (
        <div className="flex items-center gap-4">
          <Paragraph>{balance} ETH</Paragraph>
          <Button onClick={connectFn} className="hover:bg-black-1">
            {address}
          </Button>
        </div>
      )}
    </header>
  );
}
