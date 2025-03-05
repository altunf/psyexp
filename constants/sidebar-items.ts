import {
  Image,
  Mouse,
  Music4,
  SquareMousePointer,
  Timer,
  TypeOutline,
  LucideIcon,
  Keyboard,
} from "lucide-react";

type SidebarItem = {
  title: string;
  type: string;
  itemType: string;
  icon: LucideIcon;
};
export const sidebarItems: SidebarItem[] = [
  {
    title: "Text",
    type: "nodeHeader",
    itemType: "text",
    icon: TypeOutline,
  },
  {
    title: "Sound",
    type: "nodeHeader",
    itemType: "sound",
    icon: Music4,
  },
  {
    title: "Mouse",
    type: "nodeHeader",
    itemType: "mouse",
    icon: Mouse,
  },
  {
    title: "Timer",
    type: "nodeHeader",
    itemType: "timer",
    icon: Timer,
  },
  {
    title: "Image",
    type: "nodeHeader",
    itemType: "image",
    icon: Image,
  },
  {
    title: "Button",
    type: "nodeHeader",
    itemType: "button",
    icon: SquareMousePointer,
  },
  {
    title: "Keyboard",
    type: "nodeHeader",
    itemType: "keyboard",
    icon: Keyboard,
  },
];
