import { useCallback, useState, useEffect } from "react";
import type { ThemeName, ThemeMode, ThemeContextType } from "../types";
import { THEME_NAMES, STORAGE_KEY } from "../types";

interface ThemePreferences {
  themeName: ThemeName;
  themeMode: ThemeMode;
}

const getSystemPreference = (): ThemeMode =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

const getInitialPreferences = (): ThemePreferences => {
  if (typeof window === "undefined") {
    return { themeName: "default", themeMode: "light" };
  }

  // Try new storage key first
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      const parsed = JSON.parse(saved) as Partial<ThemePreferences>;
      return {
        themeName:
          parsed.themeName && THEME_NAMES.includes(parsed.themeName)
            ? parsed.themeName
            : "default",
        themeMode:
          parsed.themeMode === "light" || parsed.themeMode === "dark"
            ? parsed.themeMode
            : getSystemPreference(),
      };
    } catch {
      // Fall through to legacy
    }
  }

  // Migrate from legacy key
  const legacy = localStorage.getItem("theme-mode");
  if (legacy === "light" || legacy === "dark") {
    return { themeName: "default", themeMode: legacy };
  }

  return { themeName: "default", themeMode: getSystemPreference() };
};

export const useMultiTheme = (): ThemeContextType => {
  const [preferences, setPreferences] =
    useState<ThemePreferences>(getInitialPreferences);

  // Persist to localStorage on every change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
  }, [preferences]);

  // Listen to system preference changes
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => {
      setPreferences((prev) => {
        // Only follow system if user hasn't explicitly set a mode
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) return prev;
        return { ...prev, themeMode: e.matches ? "dark" : "light" };
      });
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const setThemeName = useCallback((name: ThemeName) => {
    setPreferences((prev) => ({ ...prev, themeName: name }));
  }, []);

  const setThemeMode = useCallback((mode: ThemeMode) => {
    setPreferences((prev) => ({ ...prev, themeMode: mode }));
  }, []);

  const toggleMode = useCallback(() => {
    setPreferences((prev) => ({
      ...prev,
      themeMode: prev.themeMode === "dark" ? "light" : "dark",
    }));
  }, []);

  return {
    themeName: preferences.themeName,
    themeMode: preferences.themeMode,
    isDark: preferences.themeMode === "dark",
    setThemeName,
    setThemeMode,
    toggleMode,
  };
};
