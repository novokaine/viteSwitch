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
import { StyledAuthControls, StyledNavBar } from "./css/styles";
import ThemeToggle from "../../ThemeToggle";
import { useAuthSession } from "@auth-hooks/useAuthSession";
import { useLogoutMutation } from "@auth-hooks/useLogoutMutation";

const NavBar: FC<INavBarType> = ({ open, toggleNavBar }) => {
  const { userData } = useAuthSession();
  const { mutate: logout, isPending } = useLogoutMutation();

  return (
    <StyledNavBar position="fixed" sx={{ borderRadius: 0 }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleNavBar}
          edge="start"
          sx={[{ mr: 2 }]}
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
            <Button
              type="button"
              onClick={() => logout()}
              variant="contained"
              disabled={isPending}
            >
              Logout
            </Button>
          </ListItem>
          <ListItem>
            <ThemeToggle variant="switch" />
          </ListItem>
          <ListItem>
            <ThemeToggle variant="picker" showLabel />
          </ListItem>
        </List>
      </StyledAuthControls>
    </StyledNavBar>
  );
};

export default NavBar;
