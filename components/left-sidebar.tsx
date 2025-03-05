"use client";
import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { sidebarItems } from "@/constants/sidebar-items";
import { Command, GripVertical } from "lucide-react";
import { DragEvent } from "react";

export function LeftSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [activeItem, setActiveItem] = React.useState(sidebarItems[0]);
  const { setOpen } = useSidebar();

  const onDragStart = (event: DragEvent<HTMLLIElement>, item: any) => {
    event.dataTransfer.setData('application/reactflow', item.type);
    event.dataTransfer.setData('application/nodeTitle', item.title);
    event.dataTransfer.setData('application/itemType', item.itemType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <Sidebar collapsible="icon" variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">PsyExp</span>
                  <span className="truncate text-xs">
                    Psychological Experiments Tool
                  </span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="px-1.5 md:px-0">
            <SidebarMenu>
              <SidebarTrigger className="ml-1" />
              {sidebarItems.map((item) => (
                <SidebarMenuItem 
                  key={item.title}
                  draggable
                  onDragStart={(e) => onDragStart(e, item)}
                >
                  <SidebarMenuButton
                    tooltip={{
                      children: item.title,
                      hidden: false,
                    }}
                    onClick={() => {
                      setActiveItem(item);
                      setOpen(true);
                    }}
                    isActive={activeItem.title === item.title}
                    className="px-2.5 md:px-2 cursor-move flex items-center jus"
                  >
                    <item.icon />
                    <span>{item.title}</span>
                  <GripVertical  className="ml-auto"/>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
}
