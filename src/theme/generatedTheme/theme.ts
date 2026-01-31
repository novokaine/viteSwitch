import { createTheme } from "@mui/material/styles";
import materialThemeBuilderJson from "./json/second.json"; // Your JSON file
import { convertToMuiTheme } from "./themeConvertor";

export const { light, dark } = convertToMuiTheme(materialThemeBuilderJson);

export const lightTheme = createTheme({
  palette: light,
  shape: {
    borderRadius: 16 // Material 3 uses larger radii
  },
  typography: {
    fontFamily: '"Roboto", "Segoe UI", sans-serif'
  }
  // components: {
  //   MuiButton: {
  //     styleOverrides: {
  //       root: ({ theme }) => ({
  //         borderRadius: 20,
  //         textTransform: "none",
  //         fontWeight: 500,
  //         backgroundColor: theme.palette.primary.main,
  //         color: theme.palette.primary.contrastText,
  //         "&:hover": {
  //           backgroundColor: theme.palette.primary.dark
  //         }
  //       })
  //     }
  //   },
  //   MuiCard: {
  //     styleOverrides: {
  //       root: ({ theme }) => ({
  //         borderRadius: 24,
  //         backgroundColor: theme.palette.material3?.surfaceContainerLow,
  //         border: "none",
  //         boxShadow: "none"
  //       })
  //     }
  //   },
  //   MuiPaper: {
  //     styleOverrides: {
  //       root: ({ theme }) => ({
  //         backgroundColor: theme.palette.material3?.surface,
  //         backgroundImage: "none" // Remove default gradient
  //       })
  //     }
  //   }
  // }
});

export const darkTheme = createTheme({
  palette: dark,
  shape: {
    borderRadius: 16
  },
  typography: {
    fontFamily: '"Roboto", "Segoe UI", sans-serif'
  }
  // components: {

  //   MuiButton: {
  //     styleOverrides: {
  //       root: ({ theme }) => ({
  //         borderRadius: 20,
  //         textTransform: "none",
  //         fontWeight: 500,
  //         backgroundColor: theme.palette.primary.main,
  //         color: theme.palette.primary.contrastText,
  //         "&:hover": {
  //           backgroundColor: theme.palette.primary.dark
  //         }
  //       })
  //     }
  //   }
  // }
});
