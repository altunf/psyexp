"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import DurationInput from "@/components/DurationInput"

export default function DurationInputCard() {
  const [duration, setDuration] = useState<number>(65.123) 
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Duration</CardTitle>
        <CardDescription>Enter a duration</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <DurationInput value={duration} onChange={setDuration} />
        <div className="text-sm text-muted-foreground">
          <p>Total seconds: {duration.toFixed(3)}</p>
        </div>
      </CardContent>
    </Card>
  )
}

