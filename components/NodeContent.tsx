import * as React from "react";
import { EditableContent } from "./EditableContent";
import { useStore } from "@/lib/store";

interface NodeContentProps {
  type: string;
  nodeId: string; 
}

const NodeImageContent = ({ nodeId }: { nodeId: string }) => {
  const { getNodeImage} = useStore();
  const nodeImage = getNodeImage(nodeId);

  return nodeImage ? (
    <img
      src={nodeImage}
      alt="Preview"
      className="max-w-full h-auto rounded-lg"
      style={{ maxHeight: "200px" }}
    />
  ) : (
    <EditableContent initialContent="No image selected" />
  );
};

const NodeSoundContent = ({ nodeId }: { nodeId: string }) => {
  const { getNodeSound } = useStore();
  const audioUrl = getNodeSound(nodeId);

  return audioUrl ? (
    <div className="p-2">
      <audio controls>
        <source src={audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  ) : (
    <EditableContent initialContent="No audio selected" />
  );
};

const contentMap = (nodeId: string): Record<string, () => React.ReactNode> => ({
  text: () => <EditableContent initialContent="Node Content" />,
  image: () => <NodeImageContent nodeId={nodeId} />,
  mouse: () => <EditableContent initialContent="Configure mouse events" />,
  sound: () => <NodeSoundContent nodeId={nodeId} />,
  button: () => <EditableContent initialContent="Button configuration" />,
  timer: () => <EditableContent initialContent="Timer settings" />,
});

export function NodeContent({ type, nodeId }: NodeContentProps) {
  return contentMap(nodeId)[type as keyof ReturnType<typeof contentMap>]?.() || null;
}
