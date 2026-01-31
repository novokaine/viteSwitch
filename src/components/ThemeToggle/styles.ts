import { styled } from "@mui/material/styles";
import { IconButton, Box } from "@mui/material";
import { gradientBackground } from "../../theme/utils";

export const StyledIconButton = styled(IconButton)<{ isDark: boolean }>(
  ({ theme, isDark }) => ({
    position: "relative",
    overflow: "hidden",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    "&:hover": {
      transform: "rotate(180deg)",
      backgroundColor: theme.palette.action.hover,
    },
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: "50%",
      background: isDark
        ? `radial-gradient(circle, ${gradientBackground.sunset(theme)} 0%, transparent 70%)`
        : `radial-gradient(circle, ${gradientBackground.primary(theme)} 0%, transparent 70%)`,
      transform: isDark ? "scale(0)" : "scale(1)",
      transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      zIndex: -1,
    },
  }),
);

export const IconContainer = styled(Box)<{ isDark: boolean }>(
  ({ theme, isDark }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    color: isDark ? theme.palette.warning.main : theme.palette.primary.main,
  }),
);

export const SwitchContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  cursor: "pointer",
  padding: "8px 12px",
  borderRadius: "20px",
  backgroundColor: theme.palette.action.hover,
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    backgroundColor: theme.palette.action.selected,
  },
}));

export const SwitchToggle = styled(Box)<{ isDark: boolean }>(
  ({ theme, isDark }) => ({
    width: 48,
    height: 24,
    borderRadius: "12px",
    backgroundColor: isDark
      ? theme.palette.primary.main
      : theme.palette.grey[300],
    position: "relative",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    "&::before": {
      content: '""',
      position: "absolute",
      top: "2px",
      left: isDark ? "26px" : "2px",
      width: "20px",
      height: "20px",
      backgroundColor: theme.palette.background.default,
      borderRadius: "50%",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      boxShadow: theme.shadows[2],
    },
  }),
);

export const SwitchLabel = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  color: theme.palette.text.primary,
  fontSize: "0.875rem",
  fontWeight: 500,
}));

export const SwitchIcon = styled(Box)(() => ({
  marginRight: "0.5rem",
  fontSize: "1rem",
}));

export const MenuContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  padding: "8px 16px",
  cursor: "pointer",
  transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
  borderRadius: theme.spacing(1),
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

export const MenuIcon = styled(Box)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: "1.25rem",
}));

export const MenuContent = styled(Box)(() => ({}));

export const MenuTitle = styled(Box)(() => ({
  fontSize: "0.875rem",
  fontWeight: 500,
}));

export const MenuSubtitle = styled(Box)(({ theme }) => ({
  fontSize: "0.75rem",
  color: theme.palette.text.secondary,
}));

export const MenuToggle = styled(Box)(() => ({
  marginLeft: "auto",
}));
