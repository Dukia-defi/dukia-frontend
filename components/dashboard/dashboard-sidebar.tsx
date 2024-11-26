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
import { Infinity, Star } from "lucide-react";
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
              className="nodata-[state=open]:bg-transparent rounded data-[state=open]:text-sidebar-accent-foreground"
              asChild
            >
              <Logo />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="border-r-0 bg-purple-2 text-white">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  variant="custom"
                  asChild
                  className={
                    isActive("/dashboard")
                      ? "border border-purple-1 bg-purple-600/20"
                      : ""
                  }
                >
                  <Link href="/dashboard">
                    <Icons.PortfolioIcon />
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
                  variant="custom"
                  asChild
                  className={
                    isActive("/dashboard/aave")
                      ? "border border-purple-1 bg-purple-600/20"
                      : ""
                  }
                >
                  <Link href="/dashboard/aave">
                    <Icons.aaveIcon />
                    <span>Aave</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  variant="custom"
                  asChild
                  className={
                    isActive("/dashboard/uniswap")
                      ? "border border-purple-1 bg-purple-600/20"
                      : ""
                  }
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
                  variant="custom"
                  asChild
                  className={
                    isActive("/dashboard/bridge")
                      ? "border border-purple-1 bg-purple-600/20"
                      : ""
                  }
                >
                  <Link href="/dashboard/bridge">
                    <Infinity />
                    <span>Bridge</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>

            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  variant="custom"
                  asChild
                  className={
                    isActive("/dashboard/super-transaction")
                      ? "border border-purple-1 bg-purple-600/20"
                      : ""
                  }
                >
                  <Link href="/dashboard/super-transaction">
                    <Star />
                    <span>Super Transaction</span>
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
