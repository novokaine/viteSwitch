import type { PaletteOptions } from "@mui/material/styles";

export const colors = {
  // Modern Blue Palette
  blue: {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
  },
  // Professional Slate
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
  },
  // Professional Grays
  gray: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
  },
  // Success Green
  green: {
    50: "#e8f5e8",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
  },
  // Warning Orange
  orange: {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
  },
  // Error Red
  red: {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
  },
};

export const lightPalette: PaletteOptions = {
  mode: "light",
  primary: {
    main: colors.blue[600],
    light: colors.blue[400],
    dark: colors.blue[800],
    contrastText: "#ffffff",
  },
  secondary: {
    main: colors.slate[600],
    light: colors.slate[400],
    dark: colors.slate[800],
    contrastText: "#ffffff",
  },
  error: {
    main: colors.red[500],
    light: colors.red[300],
    dark: colors.red[700],
    contrastText: "#ffffff",
  },
  warning: {
    main: colors.orange[500],
    light: colors.orange[300],
    dark: colors.orange[700],
    contrastText: "#ffffff",
  },
  success: {
    main: colors.green[500],
    light: colors.green[300],
    dark: colors.green[700],
    contrastText: "#ffffff",
  },
  info: {
    main: colors.blue[400],
    light: colors.blue[200],
    dark: colors.blue[600],
    contrastText: "#ffffff",
  },
  background: {
    default: "#fafafa",
    paper: "#ffffff",
  },
  text: {
    primary: colors.gray[900],
    secondary: colors.gray[600],
    disabled: colors.gray[400],
  },
  divider: colors.gray[200],
  action: {
    hover: "rgba(0, 0, 0, 0.04)",
    selected: "rgba(0, 0, 0, 0.08)",
    disabled: colors.gray[300],
    disabledBackground: colors.gray[100],
  },
};

export const darkPalette: PaletteOptions = {
  mode: "dark",
  primary: {
    main: colors.blue[400],
    light: colors.blue[300],
    dark: colors.blue[600],
    contrastText: "#ffffff",
  },
  secondary: {
    main: colors.slate[400],
    light: colors.slate[300],
    dark: colors.slate[600],
    contrastText: "#ffffff",
  },
  error: {
    main: colors.red[400],
    light: colors.red[300],
    dark: colors.red[600],
    contrastText: "#ffffff",
  },
  warning: {
    main: colors.orange[400],
    light: colors.orange[300],
    dark: colors.orange[600],
    contrastText: "#000000",
  },
  success: {
    main: colors.green[400],
    light: colors.green[300],
    dark: colors.green[600],
    contrastText: "#000000",
  },
  info: {
    main: colors.blue[300],
    light: colors.blue[200],
    dark: colors.blue[500],
    contrastText: "#000000",
  },
  background: {
    default: "#0a0a0a",
    paper: "#1a1a1a",
  },
  text: {
    primary: "#ffffff",
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.38)",
  },
  divider: "rgba(255, 255, 255, 0.12)",
  action: {
    hover: "rgba(255, 255, 255, 0.08)",
    selected: "rgba(255, 255, 255, 0.16)",
    disabled: "rgba(255, 255, 255, 0.26)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
  },
};

export const breakpoints = {
  values: {
    xs: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  },
};

export const spacing = (factor: number) => `${0.25 * factor}rem`;
