
import {
    Command,
    Image,
    Mouse,
    Music4,
    SquareMousePointer,
    Timer,
    TypeOutline,
  } from "lucide-react";

export const sidebarItems = [
    {
      title: "Text",
      url: "#",
      icon: TypeOutline,
      isActive: true,
    },
    {
      title: "Sound",
      url: "#",
      icon: Music4,
      isActive: true,
    },
    {
      title: "Mouse Events",
      url: "#",
      icon: Mouse,
      isActive: true,
    },
    {
      title: "Timer",
      url: "#",
      icon: Timer,
      isActive: false,
    },
    {
      title: "Image",
      url: "#",
      icon: Image,
      isActive: false,
    },
    {
      title: "Button",
      url: "#",
      icon: SquareMousePointer,
      isActive: false,
    },
  ]