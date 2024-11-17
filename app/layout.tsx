import type { Metadata } from "next";
import "./globals.css";
import { ThirdwebProvider } from "thirdweb/react";
import WalletProvider from "@/context/wallet";

export const metadata: Metadata = {
  title: "Dukia deFi",
  description: "Dukia deFi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-black-bg font-figTree text-white antialiased`}>
        <ThirdwebProvider>
          <WalletProvider>{children}</WalletProvider>
        </ThirdwebProvider>
      </body>
    </html>
  );
}
