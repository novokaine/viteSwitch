import { createContext } from "react";
import type { ThemeContextType } from "./types";

export const ThemeContext = createContext<ThemeContextType>({
  themeName: "default",
  themeMode: "light",
  isDark: false,
  setThemeName: () => {},
  setThemeMode: () => {},
  toggleMode: () => {},
});
