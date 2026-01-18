import { createContext } from "react";
import type { IThemeContext } from "./types";

export enum THEME_OPTIONS {
  LIGHT = "light",
  DARK = "dark"
}
export const { LIGHT, DARK } = THEME_OPTIONS;

const InitialThemeState = {
  themeMode: LIGHT,
  toggleTheme: () => {}
};

export const ThemeContext = createContext<IThemeContext>(InitialThemeState);
