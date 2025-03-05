import * as React from "react";
import { ImageInput } from "./ImageInput";
import PositionRadioButtons from "./PositionRadioButtons";
import DimensionInput from "./DimensionInput";

export function ImageConfigPanelContent() {
  return (
    <div className="space-y-4">
      <ImageInput />
      <h3 className="text-sm font-medium mb-4">Image Position</h3>
      <PositionRadioButtons />
      <h3 className="text-sm font-medium mb-4">Image Dimensions (px)</h3>
      <DimensionInput
        onHeightChange={(value) => console.log(`Height: ${value}px`)}
        onWidthChange={(value) => console.log(`Width: ${value}px`)}
      />
    </div>
  );
}
