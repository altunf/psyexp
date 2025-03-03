
import {
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
      type: "textNode",
      icon: TypeOutline,
      isActive: true,
      data: { label: "Text Node" },
    },
    {
      title: "Sound",
      type: "soundNode",
      icon: Music4,
      isActive: true,
      data: { label: "Sound Node" },
    },
    {
      title: "Mouse Events",
      type: "mouseNode",
      icon: Mouse,
      isActive: true,
      data: { label: "Mouse Events Node" },
    },
    {
      title: "Timer",
      type: "timerNode",
      icon: Timer,
      isActive: false,
      data: { label: "Timer Node" },
    },
    {
      title: "Image",
      type: "imageNode",
      icon: Image,
      isActive: false,
      data: { label: "Image Node" },
    },
    {
      title: "Button",
      type: "buttonNode",
      icon: SquareMousePointer,
      isActive: false,
      data: { label: "Button Node" },
    },
]