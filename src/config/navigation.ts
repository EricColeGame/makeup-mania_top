import type { LucideIcon } from "lucide-react";
import { BookOpen, Boxes, Code2, Compass, ScrollText, Zap } from "lucide-react";

export interface NavigationItem {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Zap, isContentType: true },
  { key: "items", path: "/items", icon: Boxes, isContentType: true },
  { key: "codes", path: "/codes", icon: Code2, isContentType: true },
  { key: "controls", path: "/controls", icon: Compass, isContentType: true },
  { key: "reviews", path: "/reviews", icon: ScrollText, isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG
  .filter((item) => item.isContentType)
  .map((item) => item.path.replace(/^\//, ""));
