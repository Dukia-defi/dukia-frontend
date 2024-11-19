import { client } from "@/app/client";
import { ConnectButton as ConnectionButton } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";

import React from "react";

export const ConnectButton = (props: IConnectButton) => {
  const wallets = [createWallet("io.metamask")];

  return (
    <ConnectionButton
      client={client}
      wallets={wallets}
      connectButton={{
        className:
          "!px-8 !py-3 !border-[3px] !text-base !border-purple-1 !bg-gradient-to-r !from-purple-main !via-purple-400 !to-purple-main !rounded-lg !font-bold !hover:shadow-lg !hover:shadow-purple-500/25 !transition-all !duration-300 !text-white",
        label: props.label ?? "Connect Wallet",
      }}
      connectModal={{
        title: "Connect Wallet",
        titleIcon: "/svg/logo.svg",
        showThirdwebBranding: false,
        size: "compact",
      }}
    />
  );
};
