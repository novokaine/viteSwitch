import {
  useCallback,
  useMemo,
  useState,
  useEffect,
  type FC,
  type ReactNode,
} from "react";
import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  type Theme,
} from "@mui/material";
import { DARK, LIGHT, ThemeContext } from "./const";
import type { THEME_OPTIONS } from "./types";
import { themeComponents } from "./themeOptions/themeComponents";
import { darkPalette, lightPalette } from "./themeOptions/palette";
import { typography } from "./themeOptions/typography";
import { lightShadows, darkShadows } from "./themeOptions/shadows";

const THEME_STORAGE_KEY = "app-theme-mode";

// Custom breakpoints for better responsive design
const breakpoints = {
  values: {
    xs: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  },
};

// Custom spacing scale
const spacing = (factor: number) => `${0.25 * factor}rem`;

const ThemeProviderWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize theme from localStorage or system preference
  const getInitialTheme = (): THEME_OPTIONS => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem(
        THEME_STORAGE_KEY,
      ) as THEME_OPTIONS;
      if (savedTheme && (savedTheme === LIGHT || savedTheme === DARK)) {
        return savedTheme;
      }
      // Use system preference
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? DARK
        : LIGHT;
    }
    return LIGHT;
  };

  const [themeMode, setThemeMode] = useState<THEME_OPTIONS>(getInitialTheme);

  // Listen for system theme changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = (e: MediaQueryListEvent) => {
        // Only auto-change if no manual preference is saved
        if (!localStorage.getItem(THEME_STORAGE_KEY)) {
          setThemeMode(e.matches ? DARK : LIGHT);
        }
      };

      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, []);

  // Persist theme preference
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(THEME_STORAGE_KEY, themeMode);
    }
  }, [themeMode]);

  const selectedTheme: Theme = useMemo(() => {
    const palette = themeMode === DARK ? darkPalette : lightPalette;

    return createTheme({
      palette,
      typography,
      breakpoints,
      spacing,
      components: themeComponents,
      shape: {
        borderRadius: 8,
      },
      transitions: {
        easing: {
          easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
        },
        duration: {
          shortest: 150,
          shorter: 200,
          short: 250,
          standard: 300,
          complex: 375,
          enteringScreen: 225,
          leavingScreen: 195,
        },
      },
      shadows: (themeMode === DARK ? darkShadows : lightShadows) as any,
    });
  }, [themeMode]);

  const toggleTheme = useCallback(
    () => setThemeMode((prev: THEME_OPTIONS) => (prev === DARK ? LIGHT : DARK)),
    [],
  );

  const setThemeMode_ = useCallback((mode: THEME_OPTIONS) => {
    setThemeMode(mode);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        toggleTheme,
        themeMode,
        setThemeMode: setThemeMode_,
        isDark: themeMode === DARK,
      }}
    >
      <ThemeProvider theme={selectedTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProviderWrapper;
