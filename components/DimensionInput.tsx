"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface DimensionInputProps {
  onHeightChange?: (value: string) => void;
  onWidthChange?: (value: string) => void;
  defaultHeight?: string;
  defaultWidth?: string;
}

export default function DimensionInput({
  onHeightChange,
  onWidthChange,
  defaultHeight = "100",
  defaultWidth = "100",
}: DimensionInputProps) {
  const [height, setHeight] = React.useState(defaultHeight);
  const [width, setWidth] = React.useState(defaultWidth);

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/[^0-9]/g, "");
    setHeight(newValue);
    if (onHeightChange) {
      onHeightChange(newValue);
    }
  };

  const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/[^0-9]/g, "");
    setWidth(newValue);
    if (onWidthChange) {
      onWidthChange(newValue);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex flex-row items-center space-x-2">
          <div className="space-y-2">
            <Label htmlFor="width-input">Width</Label>
            <div className="flex w-20 items-center space-x-2">
              <Input
                id="width-input"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                value={width}
                onChange={handleWidthChange}
                className="flex-1"
              />
              <span className="text-sm text-muted-foreground">px</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="height-input">Height</Label>
            <div className="flex w-20 items-center space-x-2">
              <Input
                id="height-input"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                value={height}
                onChange={handleHeightChange}
                className="flex-1"
              />
              <span className="text-sm text-muted-foreground">px</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-sm text-muted-foreground">
        <p>Width: {width}px</p>
        <p>Height: {height}px</p>
      </div>
    </div>
  );
}
