import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="container mx-auto min-h-screen w-9/12 pt-7">
        {/* <SidebarTrigger className="absolute" /> */}
        {children}
      </main>
    </SidebarProvider>
  );
}
