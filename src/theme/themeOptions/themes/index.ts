import type { PaletteOptions } from "@mui/material/styles";
import type { ThemeName, ThemeMode, ThemeDefinition } from "../../types";
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
  cyberpunk: cyberpunkTheme,
};

export const getThemePalette = (
  name: ThemeName,
  mode: ThemeMode,
): PaletteOptions => {
  const definition = themeRegistry[name];
  return mode === "dark" ? definition.dark : definition.light;
};
