import React, { type FC, useState } from "react";
import { Tooltip, Box, Fade, Popover, Typography, Stack } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useThemeContext } from "../../theme/hooks/hooks";
import { themeRegistry } from "../../theme/themeOptions/themes";
import { THEME_NAMES } from "../../theme/types";
import type { ThemeName } from "../../theme/types";
import * as S from "./styles";

interface ThemeToggleProps {
  variant?: "icon" | "switch" | "picker";
  size?: "small" | "medium" | "large";
  showLabel?: boolean;
}

const ThemeToggle: FC<ThemeToggleProps> = ({
  variant = "icon",
  size = "medium",
  showLabel = false
}) => {
  const { themeMode, isDark, themeName, setThemeName, toggleMode } =
    useThemeContext();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const getIcon = isDark ? <LightMode /> : <DarkMode />;

  const getTooltipText = isDark
    ? "Switch to light mode"
    : "Switch to dark mode";

  const iconVariant = (
    <Tooltip title={getTooltipText} arrow placement="bottom">
      <S.StyledIconButton
        onClick={toggleMode}
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
    <S.SwitchContainer onClick={toggleMode}>
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

  const pickerVariant = (
    <>
      <S.SwitchContainer
        onClick={(e: React.MouseEvent<HTMLElement>) =>
          setAnchorEl(e.currentTarget)
        }
        sx={{ cursor: "pointer" }}
      >
        <Box
          sx={{
            width: 20,
            height: 20,
            borderRadius: "50%",
            background: `linear-gradient(135deg, ${themeRegistry[themeName].previewColors.primary}, ${themeRegistry[themeName].previewColors.secondary})`,
            border: "2px solid",
            borderColor: "divider"
          }}
        />
        <S.SwitchLabel>
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            {themeRegistry[themeName].label}
          </Typography>
        </S.SwitchLabel>
        {isDark ? (
          <DarkMode sx={{ fontSize: 18, ml: "auto", opacity: 0.7 }} />
        ) : (
          <LightMode sx={{ fontSize: 18, ml: "auto", opacity: 0.7 }} />
        )}
      </S.SwitchContainer>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        slotProps={{
          paper: {
            sx: { p: 2, minWidth: 220, borderRadius: 2, mt: 1 }
          }
        }}
      >
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ mb: 1, display: "block", fontWeight: 600 }}
        >
          Theme
        </Typography>
        <Stack spacing={0.5}>
          {THEME_NAMES.map((name: ThemeName) => {
            const def = themeRegistry[name];
            const isSelected = name === themeName;
            return (
              <Box
                key={name}
                onClick={() => {
                  setThemeName(name);
                  setAnchorEl(null);
                }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  px: 1.5,
                  py: 1,
                  borderRadius: 1,
                  cursor: "pointer",
                  bgcolor: isSelected ? "action.selected" : "transparent",
                  "&:hover": { bgcolor: "action.hover" },
                  transition: "background-color 0.15s"
                }}
              >
                <Box
                  sx={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${def.previewColors.primary}, ${def.previewColors.secondary})`,
                    border: "2px solid",
                    borderColor: isSelected ? "primary.main" : "divider",
                    flexShrink: 0
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{ fontWeight: isSelected ? 600 : 400 }}
                >
                  {def.label}
                </Typography>
              </Box>
            );
          })}
        </Stack>
        <Box sx={{ borderTop: 1, borderColor: "divider", mt: 1.5, pt: 1.5 }}>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ mb: 1, display: "block", fontWeight: 600 }}
          >
            Mode
          </Typography>
          <S.SwitchContainer onClick={toggleMode}>
            <S.SwitchToggle isDark={isDark} />
            <S.SwitchLabel>
              {isDark ? (
                <S.SwitchIcon as={DarkMode} />
              ) : (
                <S.SwitchIcon as={LightMode} />
              )}
              {isDark ? "Dark" : "Light"}
            </S.SwitchLabel>
          </S.SwitchContainer>
        </Box>
      </Popover>
    </>
  );

  const selectedVersion = {
    icon: iconVariant,
    switch: switchVariant,
    picker: pickerVariant
  };

  return selectedVersion[variant] || null;
};

export default ThemeToggle;
