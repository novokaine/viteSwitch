import { type PaletteOptions } from "@mui/material/styles";

export const lightPalette: PaletteOptions = {
  mode: "light",
  primary: {
    main: "#00544a",
    light: "#00796b",
    dark: "#339388"
  },
  secondary: {
    main: "#00b0ff",
    light: "#339388",
    dark: "#06ecd5"
  }
};

export const darkPalette: PaletteOptions = {
  mode: "dark",
  primary: {
    main: "#b71c1c",
    light: "#ff4569",
    dark: "#620d16",
    // dark: "#339388",
    contrastText: "#ffffff"
  },
  secondary: {
    main: "#b71c1c",
    light: "#ff4569",
    dark: "#620d16"
  },

  // text: {
  //   secondary: "rgba(239,239,239,0.7)"
  // },
  info: {
    main: "#dada16"
  }
};
