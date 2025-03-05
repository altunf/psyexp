"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

interface DurationInputProps {
  value?: number
  onChange?: (value: number) => void
  className?: string
  disabled?: boolean
}

export default function DurationInput({ value = 0, onChange, className, disabled = false }: DurationInputProps) {
  const [seconds, setSeconds] = useState<number>(0)
  const [milliseconds, setMilliseconds] = useState<number>(0)

 
  useEffect(() => {
    if (value !== undefined) {
      const s = Math.floor(value % 60)
      const ms = Math.round((value % 1) * 1000)
      setSeconds(s)
      setMilliseconds(ms)
    }
  }, [value])


  const updateDuration = ( s: number, ms: number) => {
    const totalSeconds =  s + ms / 1000
    onChange?.(totalSeconds)
  }


  const handleSecondsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const s = e.target.value === "" ? 0 : Number.parseInt(e.target.value, 10)
    if (!isNaN(s) && s >= 0 && s < 60) {
      setSeconds(s)
      updateDuration( s, milliseconds)
    }
  }

  const handleMillisecondsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const ms = e.target.value === "" ? 0 : Number.parseInt(e.target.value, 10)
    if (!isNaN(ms) && ms >= 0 && ms < 1000) {
      setMilliseconds(ms)
      updateDuration(seconds, ms)
    }
  }

  return (
    <div className={cn("flex flex-col space-y-2", className)}>
      <div className="flex flex-row items-end gap-2">
        <div className="flex flex-col space-y-1">
          <Label htmlFor="seconds">Seconds</Label>
          <Input
            id="seconds"
            type="number"
            min={0}
            max={59}
            value={seconds || ""}
            onChange={handleSecondsChange}
            className="w-20"
            disabled={disabled}
          />
        </div>
        <div className="pb-2">.</div>
        <div className="flex flex-col space-y-1">
          <Label htmlFor="milliseconds">Milliseconds</Label>
          <Input
            id="milliseconds"
            type="number"
            min={0}
            max={999}
            value={milliseconds || ""}
            onChange={handleMillisecondsChange}
            className="w-24"
            disabled={disabled}
          />
        </div>
      </div>
    </div>
  )
}

