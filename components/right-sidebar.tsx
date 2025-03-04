"use client"
import * as React from "react"
import { Plus } from "lucide-react"
import { useStore } from "@/lib/store"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"

export function RightSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const { isRightSidebarOpen } = useStore();

  if (!isRightSidebarOpen) return null;

  return (
    <Sidebar
      collapsible="none"
      className="sticky hidden lg:flex top-0 h-svh"
      {...props}
    >
      <SidebarHeader className="h-16 border-b border-sidebar-border">
        Header
      </SidebarHeader>
      <SidebarContent>
        <SidebarSeparator className="mx-0" />
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Plus />
              <span>New Calendar</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
