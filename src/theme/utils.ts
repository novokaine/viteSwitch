// Theme utilities and helpers

import { alpha, type Theme } from "@mui/material/styles";

// Generate consistent shadows
export const generateShadows = (isDark: boolean) => {
  const shadowColor = isDark
    ? "rgba(255, 255, 255, 0.1)"
    : "rgba(0, 0, 0, 0.1)";
  const shadows: string[] = ["none"];

  for (let i = 1; i <= 24; i++) {
    const opacity = Math.min(0.05 + i * 0.01, 0.25);
    const blur = i * 2;
    const spread = Math.floor(i / 4);
    shadows.push(
      `0px ${i}px ${blur}px ${spread}px ${alpha(shadowColor, opacity)}`,
    );
  }

  return shadows;
};

// Create glassmorphism effect
export const glassmorphism = (theme: Theme, opacity: number = 0.1) => ({
  backgroundColor: alpha(theme.palette.background.paper, opacity),
  backdropFilter: "blur(20px)",
  border: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
});

// Create gradient backgrounds
export const gradientBackground = {
  primary: (theme: Theme) =>
    `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  secondary: (theme: Theme) =>
    `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
  hero: (theme: Theme) =>
    theme.palette.mode === "light"
      ? `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`
      : `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
  sunset: (theme: Theme) =>
    `linear-gradient(135deg, ${theme.palette.error.main} 0%, ${theme.palette.warning.main} 100%)`,
  ocean: (theme: Theme) =>
    `linear-gradient(135deg, ${theme.palette.info.main} 0%, ${theme.palette.primary.main} 100%)`,
  forest: (theme: Theme) =>
    `linear-gradient(135deg, ${theme.palette.success.dark} 0%, ${theme.palette.success.light} 100%)`,
};

// Animation utilities
export const animations = {
  fadeIn: {
    "@keyframes fadeIn": {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
  },
  slideUp: {
    "@keyframes slideUp": {
      from: {
        opacity: 0,
        transform: "translateY(20px)",
      },
      to: {
        opacity: 1,
        transform: "translateY(0)",
      },
    },
  },
  pulse: {
    "@keyframes pulse": {
      "0%, 100%": { transform: "scale(1)" },
      "50%": { transform: "scale(1.05)" },
    },
  },
  glow: (color: string) => ({
    "@keyframes glow": {
      "0%, 100%": {
        boxShadow: `0 0 5px ${alpha(color, 0.5)}`,
      },
      "50%": {
        boxShadow: `0 0 20px ${alpha(color, 0.8)}, 0 0 30px ${alpha(color, 0.6)}`,
      },
    },
  }),
};

// Responsive breakpoint utilities
export const responsiveStyles = {
  hideOnMobile: {
    display: { xs: "none", sm: "block" },
  },
  hideOnDesktop: {
    display: { xs: "block", sm: "none" },
  },
  centerContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  fullHeight: {
    minHeight: "100vh",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: { xs: "0 16px", sm: "0 24px" },
  },
};

// Color manipulation utilities
export const colorUtils = {
  // Get readable text color based on background
  getContrastText: (backgroundColor: string): string => {
    // Simple implementation - in production, use a proper color contrast library
    const hex = backgroundColor.replace("#", "");
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? "#000000" : "#ffffff";
  },

  // Generate color shades
  generateShades: (baseColor: string) => {
    // This would typically use a color manipulation library like polished
    return {
      50: alpha(baseColor, 0.05),
      100: alpha(baseColor, 0.1),
      200: alpha(baseColor, 0.2),
      300: alpha(baseColor, 0.3),
      400: alpha(baseColor, 0.4),
      500: baseColor,
      600: alpha(baseColor, 0.6),
      700: alpha(baseColor, 0.7),
      800: alpha(baseColor, 0.8),
      900: alpha(baseColor, 0.9),
    };
  },
};
