import type { FC } from "react";
import { IconButton, Toolbar, Typography } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useAppSelector } from "../../../redux";
import { getCurrentUserData } from "../../../redux/authSlice/selectors";
import { StyledNavBar } from "./css/styles";

const NavBar: FC<INavBarType> = ({ open, toggleNavBar }) => {
  const userData = useAppSelector(getCurrentUserData);

  return (
    <StyledNavBar position="fixed">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleNavBar}
          edge="start"
          sx={[
            {
              mr: 2
            }
          ]}
        >
          {open ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
      </Toolbar>
      <Typography variant="h6" noWrap component="div">
        Welcome {userData?.username}
      </Typography>
    </StyledNavBar>
  );
};

export default NavBar;
