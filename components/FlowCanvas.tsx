"use client";
import {
  ReactFlow,
  Background,
  Controls,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  Node,
  Edge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import CustomNode from "./CustomNode";

type CustomNode = Node<{
  id: string;
  title: string;
  iconName: string;
  itemType: string;
}>;

const nodeTypes = {
  nodeHeader: CustomNode,
};

export function FlowCanvas() {
  const [nodes, setNodes, onNodesChange] = useNodesState<CustomNode>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

  const onDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const onDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const title = event.dataTransfer.getData("application/nodeTitle");
    const iconName = event.dataTransfer.getData("application/nodeIcon");
    const itemType = event.dataTransfer.getData("application/itemType");

    const position = {
      x: event.clientX - event.currentTarget.getBoundingClientRect().left,
      y: event.clientY - event.currentTarget.getBoundingClientRect().top,
    };
    const nodeId = `node-${Date.now()}`;

    const newNode: CustomNode = {
      id: nodeId,
      type: "nodeHeader",
      position,
      data: {
        id: nodeId,
        title: title || "New Node",
        iconName: iconName || "",
        itemType: itemType || "text",
      },
    };
    setNodes((nds) => [...nds, newNode]);
  };

  return (
    <ReactFlowProvider>
      <div className="h-full w-full">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onDragOver={onDragOver}
          onDrop={onDrop}
          nodeTypes={nodeTypes}
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  );
}
