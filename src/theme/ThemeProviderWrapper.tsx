import type { FC, ReactNode } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { ThemeContext } from "./context";
import { useMultiThemeProvider, useThemeConfig } from "./hooks";

interface MUIThemeProviderProps {
  children: ReactNode;
}

const ThemeProviderWrapper: FC<MUIThemeProviderProps> = ({ children }) => {
  const themeControls = useMultiThemeProvider();
  const theme = useThemeConfig(
    themeControls.themeName,
    themeControls.themeMode
  );

  return (
    <ThemeContext.Provider value={themeControls}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProviderWrapper;
