import { type FC, type ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useThemeConfig } from "./hooks/useThemeConfig";
import { useMultiTheme } from "./hooks/useMultiTheme";
import { ThemeContext } from "./context";

interface MUIThemeProviderProps {
  children: ReactNode;
}

const ThemeProviderWrapper: FC<MUIThemeProviderProps> = ({ children }) => {
  const themeControls = useMultiTheme();
  const theme = useThemeConfig(themeControls.themeName, themeControls.themeMode);

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
