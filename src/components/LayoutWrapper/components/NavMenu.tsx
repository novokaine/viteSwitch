import type { FC } from "react";
import { Drawer, ListItem, ListItemText } from "@mui/material";
import { navItems } from "../../../routes";
import { StyledNavLink, StyledUserMenuList } from "./css/styles";
import { useAuthSession } from "@auth-hooks/useAuthSession";

const drawerWidth = 240;

const NavMenu: FC<{ open: boolean }> = ({ open }) => {
  const { userData } = useAuthSession();

  const userLinks = userData?.isAdmin
    ? navItems
    : navItems.filter(({ isAdmin }) => !isAdmin);

  if (!userLinks) return null;

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box"
        }
      }}
      variant="persistent"
      anchor="left"
      className="menu-drawer"
      open={open}
      classes={{
        paper: "drawer-paper"
      }}
    >
      <StyledUserMenuList>
        {userLinks.map(({ path, name }) => (
          <ListItem key={path} disablePadding>
            <StyledNavLink to={path}>
              <ListItemText primary={name} />
            </StyledNavLink>
          </ListItem>
        ))}
      </StyledUserMenuList>
    </Drawer>
  );
};

export default NavMenu;
