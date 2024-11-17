import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import Heading2 from "../ui/typography/heading2";
import Paragraph from "../ui/typography/paragraph";

interface Props {
  connectFn: () => void;
}

export function ConnectWallet({ connectFn }: Props) {
  return (
    <section className="text-center">
      <div className="mx-auto mt-14 w-1/2 space-y-20 bg-purple-2 py-14">
        <div className="space-y-10">
          <Heading2>Connect Wallet</Heading2>

          <Paragraph>Access all your defi positions.</Paragraph>
        </div>

        <div className="space-y-5">
          <Button
            size={"lg"}
            className="rounded-none hover:bg-black-1"
            onClick={connectFn}
          >
            Connect Wallet
          </Button>

          {/* <ConnectButton
          client={client}
          connectButton={{
            className:
              "!px-8 !py-3 !border-[3px] !text-base !border-purple-1 !bg-gradient-to-r !from-purple-main !via-purple-400 !to-purple-main !rounded-lg !font-bold !hover:shadow-lg !hover:shadow-purple-500/25 !transition-all !duration-300 !text-white",
            label: "Connect Wallet",
          }}
        /> */}

          <Separator />

          <Paragraph className="text-base text-green-1 lg:text-base">
            Manage positions accross several defi protocols from different
            chains, all on Dukia, powered by Lisk.
          </Paragraph>
        </div>
      </div>
    </section>
  );
}
