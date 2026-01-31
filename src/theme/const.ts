import { createContext } from "react";
import type { IThemeContext, THEME_OPTIONS } from "./types";

export const LIGHT: THEME_OPTIONS = "light";
export const DARK: THEME_OPTIONS = "dark";

const InitialThemeState: IThemeContext = {
  toggleTheme: () => {},
  themeMode: LIGHT,
  setThemeMode: () => {},
  isDark: false,
};

export const ThemeContext = createContext<IThemeContext>(InitialThemeState);
