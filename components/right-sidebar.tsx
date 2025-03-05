"use client";
import * as React from "react";
import { useStore } from "@/lib/store";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { X } from "lucide-react";
import { RightSidebarContent } from "./RightSidebarContent";

export function RightSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const { isRightSidebarOpen, setRightSidebarOpen, selectedItem } = useStore();
  if (!isRightSidebarOpen) return null;
  return (
    <Sidebar
      collapsible="none"
      className="sticky hidden lg:flex top-0 h-svh"
      {...props}
    >
      <SidebarHeader className=" flex-row h-16 border-b border-sidebar-border flex items-center justify-between px-4">
        <span className="text-xl"> Configuration Panel</span>
        <button
          onClick={() => setRightSidebarOpen(false)}
          className="p-2 hover:bg-gray-100 rounded-md"
        >
          <X className="h-4 w-4" />
        </button>
      </SidebarHeader>
      <SidebarContent>
        <SidebarSeparator className="mx-0" />
        <RightSidebarContent type={selectedItem.itemType} />
      </SidebarContent>
    </Sidebar>
  );
}
