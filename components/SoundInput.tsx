"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Upload, File, X, Play, Pause } from "lucide-react";
import { useStore } from "@/lib/store";  // Update import path

export default function SoundInput() {
  const { selectedItem, setNodeSound, getNodeSound } = useStore();
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (selectedItem.itemId) {
      const existingSound = getNodeSound(selectedItem.itemId);
      if (existingSound) {
        setAudioUrl(existingSound);
      } else {
        clearFile();
      }
    }
  }, [selectedItem.itemId, getNodeSound]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && selectedItem.itemId) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const audioDataUrl = reader.result as string;
        setNodeSound(selectedItem.itemId, audioDataUrl);
        setAudioUrl(audioDataUrl);
        setAudioFile(file);
      };
      reader.readAsDataURL(file);
      setIsPlaying(false);
    }
  };

  const clearFile = () => {
    if (selectedItem.itemId) {
      setNodeSound(selectedItem.itemId, null as any );
    }
    setAudioFile(null);
    setAudioUrl(null);
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Sound Upload</CardTitle>
      </CardHeader>
      <CardContent>
        {audioFile ? (
          <div className="flex items-center justify-between p-3 bg-muted rounded-md">
            <div className="flex items-center space-x-3">
              <File className="h-5 w-5 text-primary" />
              <div className="text-sm font-medium truncate max-w-[200px]">
                {audioFile.name}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={togglePlay}
                className="h-8 w-8"
              >
                {isPlaying ? (
                  <Pause className="h-4 w-4" />
                ) : (
                  <Play className="h-4 w-4" />
                )}
                <span className="sr-only">{isPlaying ? "Pause" : "Play"}</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={clearFile}
                className="h-8 w-8"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Remove file</span>
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-20 border-2 border-dashed rounded-md border-muted-foreground/25">
            <p className="text-sm text-muted-foreground">
              No sound file selected
            </p>
          </div>
        )}
        {audioUrl && (
          <audio
            ref={audioRef}
            src={audioUrl}
            onEnded={() => setIsPlaying(false)}
          />
        )}
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full" asChild>
          <label className="cursor-pointer">
            <Upload className="h-4 w-4 mr-2" />
            Upload Sound
            <input
              type="file"
              accept="audio/*"
              className="sr-only"
              onChange={handleFileUpload}
            />
          </label>
        </Button>
      </CardFooter>
    </Card>
  );
}
