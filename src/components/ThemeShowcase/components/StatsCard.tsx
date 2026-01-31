import { type FC } from "react";
import { Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { gradientBackground } from "../../../theme/utils";

interface StatsCardProps {
  value: string;
  label: string;
  gradientType: "primary" | "secondary";
}

export const StatsCard: FC<StatsCardProps> = ({
  value,
  label,
  gradientType,
}) => {
  const theme = useTheme();

  const gradient =
    gradientType === "primary"
      ? gradientBackground.primary(theme)
      : gradientBackground.secondary(theme);

  const textColor =
    gradientType === "primary"
      ? "primary.contrastText"
      : "secondary.contrastText";

  return (
    <Paper
      sx={{
        p: 3,
        textAlign: "center",
        background: gradient,
        color: textColor,
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: "bold", mb: 1 }}>
        {value}
      </Typography>
      <Typography variant="body1">{label}</Typography>
    </Paper>
  );
};
