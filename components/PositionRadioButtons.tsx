"use client"

import * as React from "react"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import PositionPreview from "./PositionPreview"

type Position = "left" | "right" | "top" | "bottom" | "center"

interface PositionRadioButtonsProps {
  onValueChange?: (value: Position) => void
  defaultValue?: Position
}

const positions: Array<{ value: Position; label: string }> = [
  { value: "left", label: "Left" },
  { value: "right", label: "Right" },
  { value: "top", label: "Top" },
  { value: "bottom", label: "Bottom" },
  { value: "center", label: "Center" },
]

export default function PositionRadioButtons({ 
  onValueChange, 
  defaultValue = "center" 
}: PositionRadioButtonsProps) {
  const [value, setValue] = React.useState<Position>(defaultValue)

  const handleValueChange = (newValue: string) => {
    const position = newValue as Position
    setValue(position)
    onValueChange?.(position)
  }

  return (
    <div className="space-y-4">
      <RadioGroup
        defaultValue={defaultValue}
        value={value}
        onValueChange={handleValueChange}
        className="flex flex-wrap gap-4 sm:grid-cols-3 md:grid-cols-5"
      >
        {positions.map(({ value, label }) => (
          <div key={value} className="flex items-center space-x-2">
            <RadioGroupItem value={value} id={`location-${value}`} />
            <Label htmlFor={`location-${value}`}>{label}</Label>
          </div>
        ))}
      </RadioGroup>
      <PositionPreview position={value} />
      <p className="text-sm text-muted-foreground">Selected position: {value}</p>
   
    </div>
  )
}

