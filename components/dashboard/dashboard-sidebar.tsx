"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { Icons } from "../icons";
import { Infinity } from "lucide-react";
import { usePathname } from "next/navigation";
import { Logo } from "../logo";

export function DashboardSidebar() {
  const pathname = usePathname();

  const isActive = (url: string): boolean => {
    return pathname === url;
  };

  return (
    <Sidebar collapsible="icon" variant="floating">
      <SidebarHeader className="bg-purple-2 pb-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="rounded nodata-[state=open]:bg-transparent data-[state=open]:text-sidebar-accent-foreground"
              asChild
            >
              <Logo />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="bg-purple-2 text-white border-r-0">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className={isActive("/dashboard") ? "bg-green-1" : ""}
                >
                  <Link href="/dashboard">
                    <Icons.portfolioIcon />
                    <span>Portfolio</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup className="h-1/5">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className={isActive("/dashboard/aave") ? "bg-green-1" : ""}
                >
                  <Link href="/dashboard/aave">
                    <Icons.aaveIcon />
                    <span>Aave</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className={isActive("/dashboard/uniswap") ? "bg-green-1" : ""}
                >
                  <Link href="/dashboard/uniswap">
                    <Icons.uniswapIcon />
                    <span>Uniswap</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className={isActive("/dashboard/bridge") ? "bg-green-1" : ""}
                >
                  <Link href="/dashboard/bridge">
                    <Infinity />
                    <span>Bridge</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
