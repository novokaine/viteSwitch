import { type Theme, alpha } from "@mui/material/styles";

// Glassmorphism effect using MUI theme
export const glassmorphism = (theme: Theme, opacity: number = 0.1) => ({
  backgroundColor: alpha(theme.palette.background.paper, opacity),
  backdropFilter: "blur(10px)",
  border: `1px solid ${theme.palette.divider}`,
});

// Gradient utilities using MUI theme colors
export const gradients = {
  primary: (theme: Theme) =>
    `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.dark} 100%)`,
  secondary: (theme: Theme) =>
    `linear-gradient(135deg, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.dark} 100%)`,
  hero: (theme: Theme) =>
    `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  sunset: (theme: Theme) =>
    `linear-gradient(135deg, ${theme.palette.error.main} 0%, ${theme.palette.warning.main} 100%)`,
  ocean: (theme: Theme) =>
    `linear-gradient(135deg, ${theme.palette.info.main} 0%, ${theme.palette.primary.main} 100%)`,
  forest: (theme: Theme) =>
    `linear-gradient(135deg, ${theme.palette.success.dark} 0%, ${theme.palette.success.light} 100%)`,
};

// Legacy compatibility - now requires theme parameter
export const gradientBackground = {
  primary: (theme: Theme) => gradients.primary(theme),
  secondary: (theme: Theme) => gradients.secondary(theme),
  hero: (theme: Theme) => gradients.hero(theme),
  sunset: (theme: Theme) => gradients.sunset(theme),
  ocean: (theme: Theme) => gradients.ocean(theme),
  forest: (theme: Theme) => gradients.forest(theme),
};

// These theme detection functions are no longer needed with proper MUI theming
// The theme mode is handled by MUI's ThemeProvider context
// Remove or keep for legacy compatibility if other parts of your app use them
