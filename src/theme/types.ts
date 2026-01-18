import type { THEME_OPTIONS } from "./const";

export interface IThemeContext {
  themeMode: THEME_OPTIONS;
  toggleTheme: () => void;
}
