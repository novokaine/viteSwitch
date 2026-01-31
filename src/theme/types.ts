export interface IThemeContext {
  toggleTheme: () => void;
  themeMode: THEME_OPTIONS;
  setThemeMode: (mode: THEME_OPTIONS) => void;
  isDark: boolean;
}

export type THEME_OPTIONS = "light" | "dark";
