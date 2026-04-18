import type { PaletteOptions } from "@mui/material/styles";
import type { ThemeDefinition } from "../../types";

const sunsetLight: PaletteOptions = {
  mode: "light",
  primary: {
    main: "#e65100",
    light: "#ff6d00",
    dark: "#bf360c",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "#ad1457",
    light: "#d81b60",
    dark: "#880e4f",
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
    main: "#0277bd",
    light: "#0288d1",
    dark: "#01579b",
    contrastText: "#ffffff",
  },
  background: {
    default: "#fff8f0",
    paper: "#ffffff",
  },
  text: {
    primary: "#3e2723",
    secondary: "#6d4c41",
    disabled: "#a1887f",
  },
  divider: "#ffccbc",
  action: {
    hover: "rgba(230, 81, 0, 0.06)",
    selected: "rgba(230, 81, 0, 0.12)",
    disabled: "#bcaaa4",
    disabledBackground: "#efebe9",
  },
};

const sunsetDark: PaletteOptions = {
  mode: "dark",
  primary: {
    main: "#ff6d00",
    light: "#ff9100",
    dark: "#e65100",
    contrastText: "#000000",
  },
  secondary: {
    main: "#f06292",
    light: "#f48fb1",
    dark: "#e91e63",
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
    main: "#29b6f6",
    light: "#4fc3f7",
    dark: "#0288d1",
    contrastText: "#000000",
  },
  background: {
    default: "#1a0e0a",
    paper: "#2d1b14",
  },
  text: {
    primary: "#fff3e0",
    secondary: "rgba(255, 243, 224, 0.7)",
    disabled: "rgba(255, 243, 224, 0.38)",
  },
  divider: "rgba(255, 109, 0, 0.2)",
  action: {
    hover: "rgba(255, 109, 0, 0.1)",
    selected: "rgba(255, 109, 0, 0.2)",
    disabled: "rgba(255, 243, 224, 0.26)",
    disabledBackground: "rgba(255, 243, 224, 0.12)",
  },
};

export const sunsetTheme: ThemeDefinition = {
  name: "sunset",
  label: "Sunset",
  previewColors: { primary: "#e65100", secondary: "#ad1457" },
  light: sunsetLight,
  dark: sunsetDark,
};
