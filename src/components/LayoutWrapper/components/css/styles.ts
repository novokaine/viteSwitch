import styled from "@emotion/styled";
import { AppBar, Box } from "@mui/material";

export const StyledNavBar = styled(AppBar)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: " space-between",
  alignItems: "center",
  padding: "0 20px",

  "& .MuiButton-root": {
    background: theme.palette.secondary.light
  }
}));

export const StyledAuthControls = styled(Box)(({ theme }) => ({
  ul: {
    display: "flex",
    alignItems: "center",
    gap: 12
  },
  li: {
    display: "inline-block"
  }
}));
