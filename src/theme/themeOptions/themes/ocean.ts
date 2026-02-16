import type { PaletteOptions } from "@mui/material/styles";
import type { ThemeDefinition } from "../../types";

const oceanLight: PaletteOptions = {
  mode: "light",
  primary: {
    main: "#0097a7",
    light: "#26c6da",
    dark: "#00838f",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "#00796b",
    light: "#48a999",
    dark: "#004d40",
    contrastText: "#ffffff",
  },
  error: {
    main: "#e53935",
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
    default: "#f0f9fa",
    paper: "#ffffff",
  },
  text: {
    primary: "#1a2b3c",
    secondary: "#4a6572",
    disabled: "#90a4ae",
  },
  divider: "#b2dfdb",
  action: {
    hover: "rgba(0, 151, 167, 0.06)",
    selected: "rgba(0, 151, 167, 0.12)",
    disabled: "#b0bec5",
    disabledBackground: "#eceff1",
  },
};

const oceanDark: PaletteOptions = {
  mode: "dark",
  primary: {
    main: "#26c6da",
    light: "#4dd0e1",
    dark: "#0097a7",
    contrastText: "#000000",
  },
  secondary: {
    main: "#80cbc4",
    light: "#b2dfdb",
    dark: "#4db6ac",
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
    default: "#0a1929",
    paper: "#132f4c",
  },
  text: {
    primary: "#e0f7fa",
    secondary: "rgba(224, 247, 250, 0.7)",
    disabled: "rgba(224, 247, 250, 0.38)",
  },
  divider: "rgba(38, 198, 218, 0.2)",
  action: {
    hover: "rgba(38, 198, 218, 0.1)",
    selected: "rgba(38, 198, 218, 0.2)",
    disabled: "rgba(224, 247, 250, 0.26)",
    disabledBackground: "rgba(224, 247, 250, 0.12)",
  },
};

export const oceanTheme: ThemeDefinition = {
  name: "ocean",
  label: "Ocean",
  previewColors: { primary: "#0097a7", secondary: "#00796b" },
  light: oceanLight,
  dark: oceanDark,
};
