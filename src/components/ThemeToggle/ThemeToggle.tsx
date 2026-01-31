import React, { type FC } from "react";
import { Tooltip, Box, Fade } from "@mui/material";
import { DarkMode, LightMode, Brightness6 } from "@mui/icons-material";
import { useThemeContext } from "../../theme/hooks";
import * as S from "./styles";

interface ThemeToggleProps {
  variant?: "icon" | "switch" | "menu";
  size?: "small" | "medium" | "large";
  showLabel?: boolean;
}

const ThemeToggle: FC<ThemeToggleProps> = ({
  variant = "icon",
  size = "medium",
  showLabel = false,
}) => {
  const { toggleTheme, themeMode, isDark } = useThemeContext();

  const getIcon = isDark ? <LightMode /> : <DarkMode />;

  const getTooltipText = isDark
    ? "Switch to light mode"
    : "Switch to dark mode";

  const iconVariant = (
    <Tooltip title={getTooltipText} arrow placement="bottom">
      <S.StyledIconButton
        onClick={toggleTheme}
        size={size}
        isDark={isDark}
        aria-label="Toggle theme"
      >
        <S.IconContainer isDark={isDark}>
          <Fade in key={themeMode} timeout={200}>
            <Box>{getIcon}</Box>
          </Fade>
        </S.IconContainer>
      </S.StyledIconButton>
    </Tooltip>
  );

  const switchVariant = (
    <S.SwitchContainer onClick={toggleTheme}>
      <S.SwitchToggle isDark={isDark} />
      <S.SwitchLabel>
        {isDark ? (
          <S.SwitchIcon as={DarkMode} />
        ) : (
          <S.SwitchIcon as={LightMode} />
        )}
        {showLabel && (isDark ? "Dark" : "Light")}
      </S.SwitchLabel>
    </S.SwitchContainer>
  );

  const menuVariant = (
    <S.MenuContainer onClick={toggleTheme}>
      <S.MenuIcon as={Brightness6} />
      <S.MenuContent>
        <S.MenuTitle>Theme</S.MenuTitle>
        <S.MenuSubtitle>{isDark ? "Dark mode" : "Light mode"}</S.MenuSubtitle>
      </S.MenuContent>
      <S.MenuToggle>{getIcon}</S.MenuToggle>
    </S.MenuContainer>
  );

  const selectedVersion = {
    icon: iconVariant,
    switch: switchVariant,
    menu: menuVariant,
  };

  return selectedVersion[variant] || null;
};

export default ThemeToggle;
