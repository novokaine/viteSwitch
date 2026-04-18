import type { ThemeName, ThemeDefinition } from "../../types";
import { defaultTheme } from "./default";
import { oceanTheme } from "./ocean";
import { forestTheme } from "./forest";
import { sunsetTheme } from "./sunset";
import { midnightTheme } from "./midnight";
import { cyberpunkTheme } from "./cyberpunk";

export const themeRegistry: Record<ThemeName, ThemeDefinition> = {
  default: defaultTheme,
  ocean: oceanTheme,
  forest: forestTheme,
  sunset: sunsetTheme,
  midnight: midnightTheme,
  cyberpunk: cyberpunkTheme
};
