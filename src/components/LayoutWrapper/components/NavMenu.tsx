import { Button, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import { navItems } from "../../../routes";
import type { FC } from "react";

const drawerWidth = 240;

const getLinkClassName = ({ path }: { path: string }) =>
  location.pathname.startsWith(path) ? "active" : "";

const NavMenu: FC<{ open: boolean }> = ({ open }) => {
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
        {navItems.map(({ path, name }) => (
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
