import { type FC } from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Stack,
  Chip,
} from "@mui/material";
import { gradients } from "../../../theme/utils";

export const ProfileCard: FC = () => {
  return (
    <Card
      sx={{
        textAlign: "center",
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: "translateY(-4px)",
        },
      }}
    >
      <CardContent>
        <Avatar
          sx={{
            width: 80,
            height: 80,
            mx: "auto",
            mb: 2,
            background: (theme) => gradients.secondary(theme),
          }}
        >
          JD
        </Avatar>
        <Typography variant="h6" gutterBottom>
          John Doe
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Frontend Developer
        </Typography>
        <Stack direction="row" spacing={1} justifyContent="center" mt={2}>
          <Chip label="React" size="small" variant="outlined" />
          <Chip label="TypeScript" size="small" variant="outlined" />
          <Chip label="MUI" size="small" variant="outlined" />
        </Stack>
      </CardContent>
    </Card>
  );
};
