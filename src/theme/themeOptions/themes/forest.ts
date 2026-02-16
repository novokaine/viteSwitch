import type { PaletteOptions } from "@mui/material/styles";
import type { ThemeDefinition } from "../../types";

const forestLight: PaletteOptions = {
  mode: "light",
  primary: {
    main: "#2e7d32",
    light: "#4caf50",
    dark: "#1b5e20",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "#6d4c41",
    light: "#8d6e63",
    dark: "#4e342e",
    contrastText: "#ffffff",
  },
  error: {
    main: "#d32f2f",
    light: "#ef5350",
    dark: "#c62828",
    contrastText: "#ffffff",
  },
  warning: {
    main: "#ed6c02",
    light: "#ff9800",
    dark: "#e65100",
    contrastText: "#ffffff",
  },
  success: {
    main: "#388e3c",
    light: "#66bb6a",
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
    default: "#f1f8e9",
    paper: "#ffffff",
  },
  text: {
    primary: "#1b2e1b",
    secondary: "#4a5d4a",
    disabled: "#8fa08f",
  },
  divider: "#c8e6c9",
  action: {
    hover: "rgba(46, 125, 50, 0.06)",
    selected: "rgba(46, 125, 50, 0.12)",
    disabled: "#a5d6a7",
    disabledBackground: "#e8f5e9",
  },
};

const forestDark: PaletteOptions = {
  mode: "dark",
  primary: {
    main: "#66bb6a",
    light: "#81c784",
    dark: "#388e3c",
    contrastText: "#000000",
  },
  secondary: {
    main: "#bcaaa4",
    light: "#d7ccc8",
    dark: "#8d6e63",
    contrastText: "#000000",
  },
  error: {
    main: "#ef5350",
    light: "#e57373",
    dark: "#d32f2f",
    contrastText: "#ffffff",
  },
  warning: {
    main: "#ffa726",
    light: "#ffb74d",
    dark: "#f57c00",
    contrastText: "#000000",
  },
  success: {
    main: "#81c784",
    light: "#a5d6a7",
    dark: "#4caf50",
    contrastText: "#000000",
  },
  info: {
    main: "#4fc3f7",
    light: "#81d4fa",
    dark: "#0288d1",
    contrastText: "#000000",
  },
  background: {
    default: "#0d1f0d",
    paper: "#1a2e1a",
  },
  text: {
    primary: "#e8f5e9",
    secondary: "rgba(232, 245, 233, 0.7)",
    disabled: "rgba(232, 245, 233, 0.38)",
  },
  divider: "rgba(102, 187, 106, 0.2)",
  action: {
    hover: "rgba(102, 187, 106, 0.1)",
    selected: "rgba(102, 187, 106, 0.2)",
    disabled: "rgba(232, 245, 233, 0.26)",
    disabledBackground: "rgba(232, 245, 233, 0.12)",
  },
};

export const forestTheme: ThemeDefinition = {
  name: "forest",
  label: "Forest",
  previewColors: { primary: "#2e7d32", secondary: "#6d4c41" },
  light: forestLight,
  dark: forestDark,
};
