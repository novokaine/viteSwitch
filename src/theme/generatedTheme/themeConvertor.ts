import { type PaletteOptions } from "@mui/material/styles";

export const convertToMuiTheme = (
  builderJson: MaterialThemeBuilderJson,
  contrast: "normal" | "medium" | "high" = "normal"
) => {
  const schemeKey =
    contrast === "normal" ? "light" : `light-${contrast}-contrast`;
  const darkSchemeKey =
    contrast === "normal" ? "dark" : `dark-${contrast}-contrast`;
  debugger;
  // const lightScheme = builderJson.schemes[schemeKey];
  // const darkScheme = builderJson.schemes[darkSchemeKey];
  const lightScheme = builderJson.schemes.light;
  const darkScheme = builderJson.schemes.dark;

  return {
    light: convertSchemeToMuiPalette(lightScheme, builderJson.palettes),
    dark: convertSchemeToMuiPalette(darkScheme, builderJson.palettes)
  };
};

const convertSchemeToMuiPalette = (
  scheme: Record<string, string>,
  palettes: MaterialThemeBuilderJson["palettes"]
): PaletteOptions => {
  return {
    mode: scheme.primary?.includes("#FFFFFF") ? "dark" : "light",

    // Map Material 3 to MUI naming
    primary: {
      main: scheme.primary,
      light: palettes.primary["80"], // Lighter shade
      dark: palettes.primary["40"], // Darker shade
      contrastText: scheme.onPrimary
    },

    secondary: {
      main: scheme.secondary,
      light: palettes.secondary["80"],
      dark: palettes.secondary["40"],
      contrastText: scheme.onSecondary
    },

    // Material 3 has tertiary, MUI doesn't. We can add it as custom.
    tertiary: {
      main: scheme.tertiary,
      light: palettes.tertiary["80"],
      dark: palettes.tertiary["40"],
      contrastText: scheme.onTertiary
    },

    error: {
      main: scheme.error,
      light: scheme.errorContainer,
      dark: scheme.onErrorContainer,
      contrastText: scheme.onError
    },

    warning: {
      main: "#F59E0B", // Material Theme Builder doesn't include warning, so we add
      light: "#FEF3C7",
      dark: "#92400E",
      contrastText: "#000000"
    },

    info: {
      main: "#3B82F6",
      light: "#DBEAFE",
      dark: "#1E40AF",
      contrastText: "#FFFFFF"
    },

    success: {
      main: "#10B981",
      light: "#D1FAE5",
      dark: "#065F46",
      contrastText: "#FFFFFF"
    },

    background: {
      default: scheme.background,
      paper: scheme.surface
    },

    text: {
      primary: scheme.onSurface,
      secondary: scheme.onSurfaceVariant,
      disabled: scheme.outlineVariant
    },

    divider: scheme.outline,

    // Custom Material 3 properties
    material3: {
      surface: scheme.surface,
      surfaceVariant: scheme.surfaceVariant,
      surfaceContainerHighest: scheme.surfaceContainerHighest,
      surfaceContainerHigh: scheme.surfaceContainerHigh,
      surfaceContainer: scheme.surfaceContainer,
      surfaceContainerLow: scheme.surfaceContainerLow,
      surfaceContainerLowest: scheme.surfaceContainerLowest,
      surfaceDim: scheme.surfaceDim,
      surfaceBright: scheme.surfaceBright,
      primaryContainer: scheme.primaryContainer,
      secondaryContainer: scheme.secondaryContainer,
      tertiaryContainer: scheme.tertiaryContainer,
      errorContainer: scheme.errorContainer
    }
  };
};

declare module "@mui/material/styles" {
  interface Palette {
    tertiary: Palette["primary"];
    material3: {
      surface: string;
      surfaceVariant: string;
      surfaceContainerHighest: string;
      surfaceContainerHigh: string;
      surfaceContainer: string;
      surfaceContainerLow: string;
      surfaceContainerLowest: string;
      surfaceDim: string;
      surfaceBright: string;
      primaryContainer: string;
      secondaryContainer: string;
      tertiaryContainer: string;
      errorContainer: string;
    };
  }

  interface PaletteOptions {
    tertiary?: PaletteOptions["primary"];
    material3?: {
      surface?: string;
      surfaceVariant?: string;
      surfaceContainerHighest?: string;
      surfaceContainerHigh?: string;
      surfaceContainer?: string;
      surfaceContainerLow?: string;
      surfaceContainerLowest?: string;
      surfaceDim?: string;
      surfaceBright?: string;
      primaryContainer?: string;
      secondaryContainer?: string;
      tertiaryContainer?: string;
      errorContainer?: string;
    };
  }
}

export interface MaterialThemeBuilderJson {
  schemes: {
    light: Record<string, string>;
    dark: Record<string, string>;
  };
  palettes: {
    primary: Record<string, string>;
    secondary: Record<string, string>;
    tertiary: Record<string, string>;
    neutral: Record<string, string>;
  };
}
