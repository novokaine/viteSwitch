import type { PaletteOptions } from "@mui/material/styles";

export type ThemeName =
  | "default"
  | "ocean"
  | "forest"
  | "sunset"
  | "midnight"
  | "cyberpunk";

export type ThemeMode = "light" | "dark";

export interface ThemeDefinition {
  name: ThemeName;
  label: string;
  previewColors: { primary: string; secondary: string };
  light: PaletteOptions;
  dark: PaletteOptions;
}

export interface ThemeContextType {
  themeName: ThemeName;
  themeMode: ThemeMode;
  isDark: boolean;
  setThemeName: (name: ThemeName) => void;
  setThemeMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
}

export const THEME_NAMES: ThemeName[] = [
  "default",
  "ocean",
  "forest",
  "sunset",
  "midnight",
  "cyberpunk",
];

export const STORAGE_KEY = "app-theme-preferences";
