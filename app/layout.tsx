import type { Metadata } from "next";
import "./globals.css";
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
        <WalletProvider>{children}</WalletProvider>
      </body>
    </html>
  );
}
