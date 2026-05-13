// import styled from "@emotion/styled";

import { AppBar, Box, List, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

export const StyledNavBar = styled(AppBar)(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent: " space-between",
    alignItems: "center",
    padding: "0 20px",

    "& .MuiButton-root": {
      background: theme.palette.secondary.light
    }
  };
});

export const StyledAuthControls = styled(Box)(() => ({
  ul: {
    display: "flex",
    alignItems: "center",
    gap: 12
  },
  li: {
    display: "inline-block"
  }
}));

export const StyledUserMenuList = styled(List)(() => ({
  marginTop: "20px",
  li: {
    marginBottom: "20px"
  }
}));

export const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textTransform: "none",
  textDecoration: "none",
  display: "block",
  width: "100%",
  boxSizing: "border-box",
  color: theme.palette.primary.main,
  fontSize: "1rem",
  padding: theme.spacing(1.5, 2),
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
  transition:
    "background-color 180ms ease, border-color 180ms ease, color 180ms ease, transform 180ms ease",

  "&:hover": {
    backgroundColor: theme.palette.action.hover,
    borderColor: theme.palette.primary.light
  },

  "&.active": {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    transform: "translateX(4px)"
  },

  "& .MuiTypography-root": {
    fontWeight: 600
  }
}));
