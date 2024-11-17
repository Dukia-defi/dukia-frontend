import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import type { Metadata } from "next";

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
    <SidebarProvider>
      <DashboardSidebar />
      <main className="container mx-auto min-h-screen w-8/12 pt-7">
        {/* <SidebarTrigger className="absolute" /> */}
        {children}
      </main>
    </SidebarProvider>
  );
}
