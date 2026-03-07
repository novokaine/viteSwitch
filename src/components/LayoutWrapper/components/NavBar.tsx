import type { FC } from "react";
import {
  Button,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useAppSelector } from "../../../redux";
import { getCurrentUserData } from "../../../redux/authSlice/selectors";
import { StyledAuthControls, StyledNavBar } from "./css/styles";
import { useLazyLogoutQuery } from "../../../api/userApi";
import ThemeToggle from "../../ThemeToggle";

const NavBar: FC<INavBarType> = ({ open, toggleNavBar }) => {
  const userData = useAppSelector(getCurrentUserData);

  const [logout] = useLazyLogoutQuery();

  return (
    <StyledNavBar position="fixed" sx={{ borderRadius: 0 }}>
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
        <List>
          <ListItem>
            <Typography variant="h6" noWrap component="div">
              Welcome {userData?.username}
            </Typography>
          </ListItem>
          <ListItem>
            <Button type="button" onClick={() => logout()} variant="contained">
              Logout
            </Button>
          </ListItem>
          <ListItem>
            <ThemeToggle variant="icon" size="medium" />
          </ListItem>
        </List>
      </StyledAuthControls>
    </StyledNavBar>
  );
};

export default NavBar;
