import { createTheme } from "@mui/material";
import { useContext } from "react";
import { themeComponents } from "./themeComponents";
import { DARK, ThemeContext } from "../const";
import { darkPalette, lightPalette } from "./palette";

export const useGetTheme = () => {
  const { themeMode } = useContext(ThemeContext);
  const palette = themeMode === DARK ? darkPalette : lightPalette;
  const currentTheme = createTheme({
    palette,
    components: themeComponents
  });

  return {
    theme: currentTheme
  };
};
export const currentTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: "red",
          padding: 30,
          border: "1px solid red"
        }
      }
    }
  }
});
