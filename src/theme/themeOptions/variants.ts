import { type PaletteOptions } from "@mui/material/styles";
import { colors } from "./palette";

// Additional theme variants for different use cases

// Ocean Blue Theme
export const oceanPalette: PaletteOptions = {
  mode: "light",
  primary: {
    main: "#006064",
    light: "#4fb3d9",
    dark: "#00363a",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "#0097a7",
    light: "#5ddef4",
    dark: "#006978",
    contrastText: "#ffffff",
  },
  background: {
    default: "#f0fdff",
    paper: "#ffffff",
  },
};

// Forest Green Theme
export const forestPalette: PaletteOptions = {
  mode: "light",
  primary: {
    main: "#2e7d32",
    light: "#60ad5e",
    dark: "#005005",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "#558b2f",
    light: "#85bb5c",
    dark: "#255d00",
    contrastText: "#ffffff",
  },
  background: {
    default: "#f1f8e9",
    paper: "#ffffff",
  },
};

// Sunset Orange Theme
export const sunsetPalette: PaletteOptions = {
  mode: "light",
  primary: {
    main: "#ff6f00",
    light: "#ff9f40",
    dark: "#c43e00",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "#ff8f00",
    light: "#ffc046",
    dark: "#c56000",
    contrastText: "#ffffff",
  },
  background: {
    default: "#fff8e1",
    paper: "#ffffff",
  },
};

// Midnight Purple Theme (Dark)
export const midnightPalette: PaletteOptions = {
  mode: "dark",
  primary: {
    main: "#7c4dff",
    light: "#b085f5",
    dark: "#3f1dcb",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "#ab47bc",
    light: "#df78ef",
    dark: "#790e8b",
    contrastText: "#ffffff",
  },
  background: {
    default: "#0d0d0d",
    paper: "#1a1a2e",
  },
  text: {
    primary: "#ffffff",
    secondary: "rgba(255, 255, 255, 0.7)",
  },
};

// Cyberpunk Theme (Dark)
export const cyberpunkPalette: PaletteOptions = {
  mode: "dark",
  primary: {
    main: "#00ffff",
    light: "#64ffda",
    dark: "#00acc1",
    contrastText: "#000000",
  },
  secondary: {
    main: "#ff007f",
    light: "#ff5722",
    dark: "#c51162",
    contrastText: "#ffffff",
  },
  background: {
    default: "#0a0a0a",
    paper: "#1a0a1a",
  },
  text: {
    primary: "#00ffff",
    secondary: "#ff007f",
  },
};

export const themeVariants = {
  default: { light: "lightPalette", dark: "darkPalette" },
  ocean: { light: "oceanPalette", dark: "darkPalette" },
  forest: { light: "forestPalette", dark: "darkPalette" },
  sunset: { light: "sunsetPalette", dark: "darkPalette" },
  midnight: { light: "lightPalette", dark: "midnightPalette" },
  cyberpunk: { light: "lightPalette", dark: "cyberpunkPalette" },
} as const;

export type ThemeVariant = keyof typeof themeVariants;
