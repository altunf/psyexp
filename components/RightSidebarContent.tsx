import * as React from "react";
import DurationInputCard from "./DurationInputCard";
import SoundInput from "./SoundInput";
import { ImageConfigPanelContent } from "./ImageConfigPanelContent";

interface RightSidebarContentProps {
  type: string;
}


const contentMap: Record<string, React.ComponentType> = {
  image: ImageConfigPanelContent,
  sound: SoundInput,
  timer: DurationInputCard,
};

export function RightSidebarContent({ type }: RightSidebarContentProps) {
  const NodeSettingsComponent = contentMap[type];
  return NodeSettingsComponent ? <NodeSettingsComponent /> : null;
}
