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
        <main className="container mx-auto min-h-screen w-8/12 pt-7 font-figTree">
          <WalletProvider>
            {/* <SidebarTrigger className="absolute" /> */}
            {children}
          </WalletProvider>
        </main>
      </SidebarProvider>
    </ThirdwebProvider>
  );
}
