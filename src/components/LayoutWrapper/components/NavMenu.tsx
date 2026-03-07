import type { FC } from "react";
import { Link } from "react-router-dom";
import { Button, Drawer, ListItem, ListItemText } from "@mui/material";
import { navItems } from "../../../routes";
import { useAppSelector } from "../../../redux";
import { getCurrentUserData } from "../../../redux/authSlice/selectors";
import { StyledUserMenuList } from "./css/styles";

const drawerWidth = 240;

const getLinkClassName = ({ path }: { path: string }) =>
  location.pathname.startsWith(path) ? "active" : "";

const NavMenu: FC<{ open: boolean }> = ({ open }) => {
  const userData = useAppSelector(getCurrentUserData);

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
            <Button className={getLinkClassName({ path })}>
              <Link to={path}>
                <ListItemText primary={name} />
              </Link>
            </Button>
          </ListItem>
        ))}
      </StyledUserMenuList>
    </Drawer>
  );
};

export default NavMenu;
