import { type PaletteOptions } from "@mui/material/styles";

export const lightPalette: PaletteOptions = {
  mode: "light",
  primary: {
    main: "#1976d2",
    light: "#42a5f5",
    dark: "#1565c0",
    contrastText: "#fff"
  },
  secondary: {
    main: "#dc004e",
    light: "#ff4081",
    dark: "#9a0036",
    contrastText: "#fff"
  },

  background: {
    default: "#f5f5f5",
    paper: "#ffffff"
  }
};

export const darkPalette: PaletteOptions = {
  mode: "dark",
  primary: {
    main: "#90caf9",
    light: "#e3f2fd",
    dark: "#42a5f5",
    contrastText: "#000"
  },
  secondary: {
    main: "#f48fb1",
    light: "#fce4ec",
    dark: "#ec407a",
    contrastText: "#000"
  },
  background: {
    default: "#121212",
    paper: "#1e1e1e"
  }
};
