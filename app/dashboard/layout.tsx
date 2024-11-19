import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { WalletProvider } from "@/context/wallet";
import type { Metadata } from "next";
import { ThirdwebProvider } from "thirdweb/react";

export const metadata: Metadata = {
  title: "Portfolio | Dukia deFi",
  description: "Dukia deFi",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThirdwebProvider>
      <SidebarProvider>
        <DashboardSidebar />
        <main className="container min-h-screen w-full px-4 pt-7 font-figTree md:px-10">
          <WalletProvider>
            {/* <SidebarTrigger className="absolute" /> */}
            {children}
          </WalletProvider>
        </main>
      </SidebarProvider>
    </ThirdwebProvider>
  );
}
