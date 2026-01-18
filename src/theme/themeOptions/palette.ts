import { type PaletteOptions } from "@mui/material/styles";

export const lightPalette: PaletteOptions = {
  mode: "light",
  primary: {
    main: "#00d4e7"
  },
  secondary: {
    main: "#ff8178"
  },

  background: {
    default: "#fff"
  },

  text: {
    primary: "#00d4e7"
  }
};

export const darkPalette: PaletteOptions = {
  mode: "dark",
  primary: {
    main: "#000"
    // light: "#e3f2fd",
    // dark: "#42a5f5",
    // contrastText: "#000"
  },
  secondary: {
    main: "#f48fb1"
    // light: "#fce4ec",
    // dark: "#ec407a",
    // contrastText: "#000"
  },
  background: {
    default: "#121212",
    paper: "#1e1e1e"
  }
};
