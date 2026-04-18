import { type FC } from "react";
import { Paper, Typography } from "@mui/material";
import { gradients } from "../../../theme/utils";

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
  const gradient =
    gradientType === "primary" ? gradients.primary : gradients.secondary;

  const textColor =
    gradientType === "primary"
      ? "primary.contrastText"
      : "secondary.contrastText";

  return (
    <Paper
      sx={{
        p: 3,
        textAlign: "center",
        background: (theme) => gradient(theme),
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
