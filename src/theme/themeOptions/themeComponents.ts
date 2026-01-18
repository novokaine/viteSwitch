import type { Components } from "@mui/material";
import type { Theme } from "@mui/material/styles";

export const themeComponents: Components<Theme> = {
  MuiButton: {
    styleOverrides: {
      // root: ({ theme }) => ({
      //   background: theme.palette.secondary.main
      // })
    }
  },
  MuiCssBaseline: {
    styleOverrides: {
      body: ({ theme }) => ({
        backgroundColor: theme.palette.primary.main
      })
    }
  }
};
