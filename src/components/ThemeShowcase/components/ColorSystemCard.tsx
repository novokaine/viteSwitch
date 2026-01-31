import { type FC } from "react";
import { Card, CardContent, Typography, Box, Stack } from "@mui/material";
import { Palette } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { glassmorphism } from "../../../theme/utils";

const ColorSwatch: FC<{ color: string; label?: string }> = ({
  color,
  label,
}) => (
  <Box
    sx={{
      width: 40,
      height: 40,
      borderRadius: 1,
      backgroundColor: color,
      border: "2px solid",
      borderColor: "divider",
    }}
    title={label}
  />
);

const ColorGroup: FC<{ title: string; colors: string[] }> = ({
  title,
  colors,
}) => (
  <Box>
    <Typography variant="body2" color="text.secondary" gutterBottom>
      {title}
    </Typography>
    <Stack direction="row" spacing={1}>
      {colors.map((color, index) => (
        <ColorSwatch key={index} color={color} />
      ))}
    </Stack>
  </Box>
);

export const ColorSystemCard: FC = () => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        height: "100%",
        background: glassmorphism(theme, 0.05).backgroundColor,
        backdropFilter: glassmorphism(theme).backdropFilter,
        border: glassmorphism(theme).border,
      }}
    >
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Palette sx={{ mr: 1, color: "primary.main" }} />
          <Typography variant="h6">Color System</Typography>
        </Box>
        <Stack spacing={2}>
          <ColorGroup
            title="Primary Colors"
            colors={["primary.light", "primary.main", "primary.dark"]}
          />
          <ColorGroup
            title="Secondary Colors"
            colors={["secondary.light", "secondary.main", "secondary.dark"]}
          />
        </Stack>
      </CardContent>
    </Card>
  );
};
