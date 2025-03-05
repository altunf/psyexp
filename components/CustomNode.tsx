import { useStore } from "@/lib/store";
import { memo } from "react";
import { NodeProps } from "@xyflow/react";
import { BaseNode } from "@/components/reactflow-ui/base-node";
import {
  NodeHeader,
  NodeHeaderActions,
  NodeHeaderIcon,
  NodeHeaderDeleteAction,
  NodeHeaderAction,
} from "@/components/reactflow-ui/node-header";

import {
  TypeOutline,
  Image,
  Mouse,
  Music4,
  SquareMousePointer,
  Timer,
  LucideIcon,
  EllipsisVertical,
  Keyboard,
} from "lucide-react";
import { EditableTitle } from "./EditableTitle";
import { NodeContent } from "./NodeContent";

const iconMap: Record<string, LucideIcon> = {
  Text: TypeOutline,
  Image: Image,
  Mouse: Mouse,
  Sound: Music4,
  Button: SquareMousePointer,
  Timer: Timer,
  Keyboard: Keyboard,
};

const CustomNode = memo(({ selected, data }: NodeProps) => {
  const Icon = iconMap[data?.title as string] || TypeOutline;
  const { toggleRightSidebar, setSelectedItem } = useStore();
  const handleClick = () => {
    setSelectedItem({
      itemType: data?.itemType as string,
      itemId: data.id as string,
      title: data.title as string,
    });
    toggleRightSidebar();
  };

  return (
    <BaseNode selected={selected} className="px-3 py-2">
      <NodeHeader className="-mx-3 -mt-2 border-b">
        <NodeHeaderIcon>
          <Icon />
        </NodeHeaderIcon>
        <EditableTitle initialTitle={String(data.title || "Node Title")} />
        <NodeHeaderActions>
          <NodeHeaderAction
            variant="ghost"
            label="Open sidebar"
            onClick={handleClick}
          >
            <EllipsisVertical size={18} />
          </NodeHeaderAction>

          <NodeHeaderDeleteAction />
        </NodeHeaderActions>
      </NodeHeader>
      <NodeContent type={data.itemType as string} nodeId={data.id as string} />
    </BaseNode>
  );
});

export default CustomNode;
