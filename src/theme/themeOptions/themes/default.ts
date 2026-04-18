import type { ThemeDefinition } from "../../types";
import { lightPalette, darkPalette } from "../palette";

export const defaultTheme: ThemeDefinition = {
  name: "default",
  label: "Default",
  previewColors: { primary: "#1e88e5", secondary: "#475569" },
  light: lightPalette,
  dark: darkPalette,
};
