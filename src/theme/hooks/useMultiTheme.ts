import { useCallback, useState, useEffect } from "react";
import type { ThemeName, ThemeMode, ThemeContextType } from "../types";
import { THEME_NAMES, STORAGE_KEY } from "../types";

interface ThemePreferences {
  themeName: ThemeName;
  themeMode: ThemeMode;
}

const DEFAULT_THEME_PREFERENCES: ThemePreferences = {
  themeName: "default",
  themeMode: "light"
};

const getSystemPreference = (): ThemeMode =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

const isThemeName = (value: unknown): value is ThemeName =>
  typeof value === "string" && THEME_NAMES.includes(value as ThemeName);

const isThemeMode = (value: unknown): value is ThemeMode =>
  value === "light" || value === "dark";

const readStoredPreferences = (): ThemePreferences | null => {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    return null;
  }

  try {
    const parsed = JSON.parse(saved) as Partial<ThemePreferences>;

    return {
      themeName: isThemeName(parsed.themeName)
        ? parsed.themeName
        : DEFAULT_THEME_PREFERENCES.themeName,
      themeMode: isThemeMode(parsed.themeMode)
        ? parsed.themeMode
        : getSystemPreference()
    };
  } catch {
    return null;
  }
};

const getInitialPreferences = (): ThemePreferences => {
  if (typeof window === "undefined") {
    return DEFAULT_THEME_PREFERENCES;
  }

  const storedPreferences = readStoredPreferences();

  if (storedPreferences) {
    return storedPreferences;
  }

  const legacy = localStorage.getItem("theme-mode");

  if (isThemeMode(legacy)) {
    return {
      themeName: DEFAULT_THEME_PREFERENCES.themeName,
      themeMode: legacy
    };
  }

  return {
    themeName: DEFAULT_THEME_PREFERENCES.themeName,
    themeMode: getSystemPreference()
  };
};

export const useMultiThemeProvider = (): ThemeContextType => {
  const [preferences, setPreferences] = useState<ThemePreferences>(
    getInitialPreferences
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
  }, [preferences]);

  const setThemeName = useCallback((name: ThemeName) => {
    setPreferences((prev) => ({ ...prev, themeName: name }));
  }, []);

  const setThemeMode = useCallback((mode: ThemeMode) => {
    setPreferences((prev) => ({ ...prev, themeMode: mode }));
  }, []);

  const toggleMode = useCallback(() => {
    setPreferences((prev) => ({
      ...prev,
      themeMode: prev.themeMode === "dark" ? "light" : "dark"
    }));
  }, []);

  return {
    themeName: preferences.themeName,
    themeMode: preferences.themeMode,
    isDark: preferences.themeMode === "dark",
    setThemeName,
    setThemeMode,
    toggleMode
  };
};
