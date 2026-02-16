import type { PaletteOptions } from "@mui/material/styles";
import type { ThemeDefinition } from "../../types";

const cyberpunkLight: PaletteOptions = {
  mode: "light",
  primary: {
    main: "#d500f9",
    light: "#ea80fc",
    dark: "#aa00ff",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "#00e5ff",
    light: "#18ffff",
    dark: "#00b8d4",
    contrastText: "#000000",
  },
  error: {
    main: "#ff1744",
    light: "#ff5252",
    dark: "#d50000",
    contrastText: "#ffffff",
  },
  warning: {
    main: "#ffea00",
    light: "#ffff00",
    dark: "#ffd600",
    contrastText: "#000000",
  },
  success: {
    main: "#00e676",
    light: "#69f0ae",
    dark: "#00c853",
    contrastText: "#000000",
  },
  info: {
    main: "#2979ff",
    light: "#448aff",
    dark: "#2962ff",
    contrastText: "#ffffff",
  },
  background: {
    default: "#faf0ff",
    paper: "#ffffff",
  },
  text: {
    primary: "#1a0025",
    secondary: "#5c3d6e",
    disabled: "#a088b0",
  },
  divider: "#e1bee7",
  action: {
    hover: "rgba(213, 0, 249, 0.06)",
    selected: "rgba(213, 0, 249, 0.12)",
    disabled: "#ce93d8",
    disabledBackground: "#f3e5f5",
  },
};

const cyberpunkDark: PaletteOptions = {
  mode: "dark",
  primary: {
    main: "#ea80fc",
    light: "#f3b4ff",
    dark: "#d500f9",
    contrastText: "#000000",
  },
  secondary: {
    main: "#18ffff",
    light: "#76ffff",
    dark: "#00e5ff",
    contrastText: "#000000",
  },
  error: {
    main: "#ff5252",
    light: "#ff8a80",
    dark: "#ff1744",
    contrastText: "#000000",
  },
  warning: {
    main: "#ffff00",
    light: "#ffff8d",
    dark: "#ffea00",
    contrastText: "#000000",
  },
  success: {
    main: "#69f0ae",
    light: "#b9f6ca",
    dark: "#00e676",
    contrastText: "#000000",
  },
  info: {
    main: "#448aff",
    light: "#82b1ff",
    dark: "#2979ff",
    contrastText: "#000000",
  },
  background: {
    default: "#0a0012",
    paper: "#1a0a2e",
  },
  text: {
    primary: "#f3e5f5",
    secondary: "rgba(243, 229, 245, 0.7)",
    disabled: "rgba(243, 229, 245, 0.38)",
  },
  divider: "rgba(234, 128, 252, 0.2)",
  action: {
    hover: "rgba(234, 128, 252, 0.1)",
    selected: "rgba(234, 128, 252, 0.2)",
    disabled: "rgba(243, 229, 245, 0.26)",
    disabledBackground: "rgba(243, 229, 245, 0.12)",
  },
};

export const cyberpunkTheme: ThemeDefinition = {
  name: "cyberpunk",
  label: "Cyberpunk",
  previewColors: { primary: "#d500f9", secondary: "#00e5ff" },
  light: cyberpunkLight,
  dark: cyberpunkDark,
};
