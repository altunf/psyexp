import { memo } from "react";
import { NodeProps } from "@xyflow/react";
import { BaseNode } from "@/components/reactflow-ui/base-node";
import {
  NodeHeader,
  NodeHeaderActions,
  NodeHeaderMenuAction,
  NodeHeaderIcon,
  NodeHeaderDeleteAction,
} from "@/components/reactflow-ui/node-header";
import {
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { 
  TypeOutline,
  Image,
  Mouse,
  Music4,
  SquareMousePointer,
  Timer,
  LucideIcon 
} from "lucide-react";
import { EditableTitle } from "./EditableTitle";
import { EditableContent } from "./EditableContent";

const iconMap: Record<string, LucideIcon> = {
    "Text": TypeOutline,
    "Image": Image,
    "Mouse Events": Mouse,
    "Sound": Music4,
    "Button": SquareMousePointer,
    "Timer": Timer,
};

import { useStore } from "@/lib/store";

const NodeHeaderDemo = memo(({ selected, data }: NodeProps) => {
  const Icon = iconMap[data?.title] || TypeOutline;
  const { toggleRightSidebar } = useStore();

  return (
    <BaseNode selected={selected} className="px-3 py-2">
      <NodeHeader className="-mx-3 -mt-2 border-b">
        <NodeHeaderIcon>
          <Icon />
        </NodeHeaderIcon>
        <EditableTitle initialTitle={String(data.title || "Node Title")} />
        <NodeHeaderActions>
          <NodeHeaderMenuAction 
            label="Expand account options" 
            onClick={toggleRightSidebar}
          >
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </NodeHeaderMenuAction>
          <NodeHeaderDeleteAction />
        </NodeHeaderActions>
      </NodeHeader>
      <EditableContent initialContent={String(data.content || "Node Content")} />
    </BaseNode>
  );
});

export default NodeHeaderDemo;