import { Button, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import { navItems } from "../../../routes";
import type { FC } from "react";
import { useAppSelector } from "../../../redux";
import { getCurrentUserData } from "../../../redux/authSlice/selectors";

const drawerWidth = 240;

const getLinkClassName = ({ path }: { path: string }) =>
  location.pathname.startsWith(path) ? "active" : "";

const NavMenu: FC<{ open: boolean }> = ({ open }) => {
  const userData = useAppSelector(getCurrentUserData);

  const userLinks = userData?.isAdmin
    ? navItems
    : navItems.filter(({ isAdmin }) => !isAdmin);

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
        root: "drawer-root",
        paper: "drawer-paper"
      }}
    >
      <List className="user-menu">
        {userLinks.map(({ path, name }) => (
          <ListItem key={path} disablePadding>
            <Button className={getLinkClassName({ path })}>
              <Link to={path}>
                <ListItemText primary={name} />
              </Link>
            </Button>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default NavMenu;
