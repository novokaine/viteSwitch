import { useCallback, useMemo, useState, type FC, type ReactNode } from "react";
import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  type Theme
} from "@mui/material";
import { DARK, LIGHT, ThemeContext, type THEME_OPTIONS } from "./const";
import { themeComponents } from "./themeOptions/themeComponents";
import { darkPalette, lightPalette } from "./themeOptions/palette";

const ThemeProviderWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<THEME_OPTIONS>(LIGHT);

  const selectedTheme: Theme = useMemo(() => {
    const palette = themeMode === DARK ? darkPalette : lightPalette;

    return createTheme({
      palette,
      components: themeComponents
    });
  }, [themeMode]);

  const toggleTheme = useCallback(
    () => setThemeMode((prev) => (prev === DARK ? LIGHT : DARK)),
    []
  );

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={selectedTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProviderWrapper;
