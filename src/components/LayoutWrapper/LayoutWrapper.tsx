import { Box } from "@mui/material";
import { useState, type FC } from "react";
import { NavBar, NavMenu } from "./components";

interface ILaoyutWrapper {
  children: React.ReactNode;
}

const LayoutWrapper: FC<ILaoyutWrapper> = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const handleToolbarToggler = () => setIsNavOpen((prev) => !prev);

  return (
    <Box sx={{ display: "flex" }}>
      <NavBar open={isNavOpen} toggleNavBar={handleToolbarToggler} />
      <NavMenu open={isNavOpen} />

      <div className={`main-wrapper ${isNavOpen ? "active" : ""}`}>
        {children}
      </div>
    </Box>
  );
};

export default LayoutWrapper;
