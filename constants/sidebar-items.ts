import {
  Image,
  Mouse,
  Music4,
  SquareMousePointer,
  Timer,
  TypeOutline,
  LucideIcon,
} from "lucide-react";

type SidebarItem = {
  title: string;
  type: string;
  icon: LucideIcon;
};
export const sidebarItems: SidebarItem[] = [
  {
    title: "Text",
    type: "nodeHeader",
    icon: TypeOutline,
  },
  {
    title: "Sound",
    type: "nodeHeader",
    icon: Music4,
  },
  {
    title: "Mouse Events",
    type: "nodeHeader",
    icon: Mouse,
  },
  {
    title: "Timer",
    type: "nodeHeader",
    icon: Timer,
  },
  {
    title: "Image",
    type: "nodeHeader",
    icon: Image,
  },
  {
    title: "Button",
    type: "nodeHeader",
    icon: SquareMousePointer,
  },
];
