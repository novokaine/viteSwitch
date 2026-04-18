// import styled from "@emotion/styled";

import { AppBar, Box, List, styled } from "@mui/material";

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

export const StyledUserMenuList = styled(List)(({ theme }) => ({
  marginTop: "20px",
  "a, button": {
    textTransform: "none",
    textDecoration: "none",
    display: "block",
    width: "100%",
    boxSizing: "border-box",
    color: theme.palette.primary.main,
    fontSize: "1rem"
  },
  "button.active": {
    bgcolor: "action.selected"
  },
  li: {
    marginBottom: "20px"
  }
}));
