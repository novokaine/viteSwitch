import type { Components } from "@mui/material";
import type { Theme } from "@mui/material/styles";

export const themeComponents: Components<Theme> = {
  // Enhanced Button Styling
  MuiButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: 8,
        textTransform: "none",
        fontWeight: 600,
        fontSize: "0.875rem",
        padding: "8px 20px",
        transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        boxShadow: "none",
        "&:hover": {
          transform: "translateY(-1px)",
          boxShadow:
            theme.palette.mode === "light"
              ? "0px 4px 12px rgba(0, 0, 0, 0.15)"
              : "0px 4px 12px rgba(255, 255, 255, 0.1)"
        },
        "&:active": {
          transform: "translateY(0px)"
        }
      }),
      contained: ({ theme }) => ({
        background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
        "&:hover": {
          background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`
        }
      }),
      outlined: ({ theme }) => ({
        borderWidth: "2px",
        "&:hover": {
          borderWidth: "2px",
          backgroundColor:
            theme.palette.mode === "light"
              ? "rgba(0, 0, 0, 0.04)"
              : "rgba(255, 255, 255, 0.08)"
        }
      })
    }
  },

  // Enhanced Card Styling
  MuiCard: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: 16,
        margin: theme.spacing(3),
        boxShadow:
          theme.palette.mode === "light"
            ? "0px 2px 8px rgba(0, 0, 0, 0.1), 0px 1px 4px rgba(0, 0, 0, 0.06)"
            : "0px 2px 8px rgba(255, 255, 255, 0.05), 0px 1px 4px rgba(255, 255, 255, 0.02)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        border:
          theme.palette.mode === "light"
            ? "1px solid rgba(0, 0, 0, 0.08)"
            : "1px solid rgba(255, 255, 255, 0.12)",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow:
            theme.palette.mode === "light"
              ? "0px 8px 24px rgba(0, 0, 0, 0.15), 0px 2px 8px rgba(0, 0, 0, 0.1)"
              : "0px 8px 24px rgba(255, 255, 255, 0.1), 0px 2px 8px rgba(255, 255, 255, 0.05)"
        }
      })
    }
  },

  // Enhanced Paper Styling
  MuiPaper: {
    styleOverrides: {
      root: () => ({
        backgroundImage: "none",
        borderRadius: 12
      }),
      elevation1: ({ theme }) => ({
        boxShadow:
          theme.palette.mode === "light"
            ? "0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24)"
            : "0px 1px 3px rgba(255, 255, 255, 0.06), 0px 1px 2px rgba(255, 255, 255, 0.12)"
      })
    }
  },

  // Enhanced TextField Styling
  MuiTextField: {
    styleOverrides: {
      root: ({ theme }) => ({
        "& .MuiOutlinedInput-root": {
          borderRadius: 8,
          transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.primary.main
            }
          },
          "&.Mui-focused": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderWidth: "2px",
              borderColor: theme.palette.primary.main,
              boxShadow: `0 0 0 2px ${theme.palette.primary.main}20`
            }
          }
        }
      })
    }
  },

  // Enhanced AppBar Styling
  MuiAppBar: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor:
          theme.palette.mode === "light"
            ? "rgba(255, 255, 255, 0.8)"
            : "rgba(26, 26, 26, 0.8)",
        backdropFilter: "blur(20px)",
        borderBottom: `1px solid ${theme.palette.divider}`,
        boxShadow: "none",
        color: theme.palette.text.primary
      })
    }
  },

  // Enhanced Drawer Styling
  MuiDrawer: {
    styleOverrides: {
      paper: ({ theme }) => ({
        backgroundColor:
          theme.palette.mode === "light"
            ? "rgba(255, 255, 255, 0.95)"
            : "rgba(26, 26, 26, 0.95)",
        backdropFilter: "blur(20px)",
        borderRight: `1px solid ${theme.palette.divider}`
      })
    }
  },

  // Enhanced List Item Styling
  MuiListItemButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: 8,
        margin: "2px 8px",
        padding: "8px 16px",
        transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": {
          backgroundColor:
            theme.palette.mode === "light"
              ? "rgba(0, 0, 0, 0.04)"
              : "rgba(255, 255, 255, 0.08)",
          transform: "translateX(4px)"
        },
        "&.Mui-selected": {
          backgroundColor: `${theme.palette.primary.main}15`,
          "&:hover": {
            backgroundColor: `${theme.palette.primary.main}25`
          }
        }
      })
    }
  },

  // Enhanced Chip Styling
  MuiChip: {
    styleOverrides: {
      root: () => ({
        borderRadius: 16,
        fontWeight: 500,
        transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": {
          transform: "scale(1.05)"
        }
      })
    }
  },

  // Enhanced Dialog Styling
  MuiDialog: {
    styleOverrides: {
      paper: ({ theme }) => ({
        borderRadius: 16,
        backgroundColor:
          theme.palette.mode === "light"
            ? "rgba(255, 255, 255, 0.95)"
            : "rgba(26, 26, 26, 0.95)",
        backdropFilter: "blur(20px)"
      })
    }
  },

  // Enhanced Backdrop
  MuiBackdrop: {
    styleOverrides: {
      root: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(4px)"
      }
    }
  },

  // Global Baseline Styles
  MuiCssBaseline: {
    styleOverrides: (theme) => ({
      html: {
        scrollBehavior: "smooth"
      },
      body: {
        backgroundColor: theme.palette.background.default,
        backgroundImage:
          theme.palette.mode === "light"
            ? "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%)"
            : "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.05) 0%, transparent 50%)"
      },
      "*": {
        "&::-webkit-scrollbar": {
          width: 8,
          height: 8
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "transparent"
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor:
            theme.palette.mode === "light"
              ? "rgba(0, 0, 0, 0.2)"
              : "rgba(255, 255, 255, 0.2)",
          borderRadius: 4,
          "&:hover": {
            backgroundColor:
              theme.palette.mode === "light"
                ? "rgba(0, 0, 0, 0.3)"
                : "rgba(255, 255, 255, 0.3)"
          }
        }
      }
    })
  }
};
