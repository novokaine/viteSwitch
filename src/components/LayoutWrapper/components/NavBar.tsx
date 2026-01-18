import type { FC } from "react";
import { Button, IconButton, Toolbar, Typography } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useAppSelector } from "../../../redux";
import { getCurrentUserData } from "../../../redux/authSlice/selectors";
import { StyledAuthControls, StyledNavBar } from "./css/styles";
import { useLazyLogoutQuery } from "../../../api/userApi";
import { useThemeContext } from "../../../theme/hooks";

const NavBar: FC<INavBarType> = ({ open, toggleNavBar }) => {
  const userData = useAppSelector(getCurrentUserData);

  const [logout] = useLazyLogoutQuery();
  const { toggleTheme } = useThemeContext();

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
      <StyledAuthControls>
        <ul>
          <li>
            <Typography variant="h6" noWrap component="div">
              Welcome {userData?.username}
            </Typography>
          </li>
          <li>
            <Button type="button" onClick={() => logout()} variant="contained">
              Logout
            </Button>
          </li>
          <li>
            <Button type="button" onClick={() => toggleTheme()}>
              Switch theme mode
            </Button>
          </li>
        </ul>
      </StyledAuthControls>
    </StyledNavBar>
  );
};

export default NavBar;
