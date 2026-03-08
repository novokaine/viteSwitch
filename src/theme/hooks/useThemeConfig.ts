import { createTheme } from "@mui/material/styles";
import { themeComponents } from "../themeOptions/themeComponents";
import { useMemo } from "react";
import { breakpoints, spacing, typography } from "../themeOptions";
import { getThemePalette } from "../themeOptions/themes";
import type { ThemeMode, ThemeName } from "../types";

export const useThemeConfig = (themeName: ThemeName, themeMode: ThemeMode) => {
  const palette = getThemePalette(themeName, themeMode);

  return useMemo(
    () =>
      createTheme({
        palette,
        typography,
        breakpoints,
        spacing,
        components: themeComponents,
        shape: { borderRadius: 8 },
        transitions: {
          easing: {
            easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)"
          },
          duration: {
            shortest: 150,
            shorter: 200,
            short: 250,
            standard: 300,
            complex: 375,
            enteringScreen: 225,
            leavingScreen: 195
          }
        }
      }),
    [palette]
  );
};
