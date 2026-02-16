import type { PaletteOptions } from "@mui/material/styles";
import type { ThemeDefinition } from "../../types";

const midnightLight: PaletteOptions = {
  mode: "light",
  primary: {
    main: "#5e35b1",
    light: "#7e57c2",
    dark: "#4527a0",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "#3949ab",
    light: "#5c6bc0",
    dark: "#283593",
    contrastText: "#ffffff",
  },
  error: {
    main: "#d32f2f",
    light: "#ef5350",
    dark: "#c62828",
    contrastText: "#ffffff",
  },
  warning: {
    main: "#f9a825",
    light: "#fdd835",
    dark: "#f57f17",
    contrastText: "#000000",
  },
  success: {
    main: "#2e7d32",
    light: "#4caf50",
    dark: "#1b5e20",
    contrastText: "#ffffff",
  },
  info: {
    main: "#0288d1",
    light: "#03a9f4",
    dark: "#01579b",
    contrastText: "#ffffff",
  },
  background: {
    default: "#f3f0f9",
    paper: "#ffffff",
  },
  text: {
    primary: "#1a1035",
    secondary: "#4a3f65",
    disabled: "#9e97b5",
  },
  divider: "#d1c4e9",
  action: {
    hover: "rgba(94, 53, 177, 0.06)",
    selected: "rgba(94, 53, 177, 0.12)",
    disabled: "#b39ddb",
    disabledBackground: "#ede7f6",
  },
};

const midnightDark: PaletteOptions = {
  mode: "dark",
  primary: {
    main: "#b39ddb",
    light: "#d1c4e9",
    dark: "#7e57c2",
    contrastText: "#000000",
  },
  secondary: {
    main: "#9fa8da",
    light: "#c5cae9",
    dark: "#7986cb",
    contrastText: "#000000",
  },
  error: {
    main: "#ef5350",
    light: "#e57373",
    dark: "#d32f2f",
    contrastText: "#ffffff",
  },
  warning: {
    main: "#fdd835",
    light: "#ffee58",
    dark: "#f9a825",
    contrastText: "#000000",
  },
  success: {
    main: "#66bb6a",
    light: "#81c784",
    dark: "#388e3c",
    contrastText: "#000000",
  },
  info: {
    main: "#4fc3f7",
    light: "#81d4fa",
    dark: "#0288d1",
    contrastText: "#000000",
  },
  background: {
    default: "#0d0a1a",
    paper: "#1a1432",
  },
  text: {
    primary: "#ede7f6",
    secondary: "rgba(237, 231, 246, 0.7)",
    disabled: "rgba(237, 231, 246, 0.38)",
  },
  divider: "rgba(179, 157, 219, 0.2)",
  action: {
    hover: "rgba(179, 157, 219, 0.1)",
    selected: "rgba(179, 157, 219, 0.2)",
    disabled: "rgba(237, 231, 246, 0.26)",
    disabledBackground: "rgba(237, 231, 246, 0.12)",
  },
};

export const midnightTheme: ThemeDefinition = {
  name: "midnight",
  label: "Midnight",
  previewColors: { primary: "#5e35b1", secondary: "#3949ab" },
  light: midnightLight,
  dark: midnightDark,
};
