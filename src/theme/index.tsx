import { useMemo, useState, type FC, type ReactNode } from "react";
import { DARK, LIGHT, ThemeContext, type THEME_OPTIONS } from "./const";

const ThemeProviderContext: FC<{ children: ReactNode }> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<THEME_OPTIONS>(LIGHT);
  const theme = useMemo(() => (themeMode === DARK ? LIGHT : DARK), [themeMode]);

  const toggleTheme = () =>
    setThemeMode((prev) => (prev === DARK ? LIGHT : DARK));

  return (
    <ThemeContext.Provider value={{ themeMode: theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProviderContext;
