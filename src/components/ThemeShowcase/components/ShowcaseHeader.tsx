import { type FC } from "react";
import { Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { gradientBackground } from "../../../theme/utils";
import ThemeToggle from "../../ThemeToggle";

export const ShowcaseHeader: FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ mb: 4, textAlign: "center" }}>
      <Typography
        variant="h2"
        component="h1"
        sx={{
          mb: 2,
          background: gradientBackground.hero(theme),
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          fontWeight: "bold",
        }}
      >
        Theme Showcase
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ mb: 3, maxWidth: 600, mx: "auto" }}
      >
        Experience our professional theming system with modern design patterns,
        smooth animations, and consistent visual language.
      </Typography>
      <ThemeToggle variant="switch" showLabel />
    </Box>
  );
};
