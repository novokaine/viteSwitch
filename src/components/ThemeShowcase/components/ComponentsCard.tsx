import { type FC } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
  Button,
  TextField,
  Chip,
} from "@mui/material";
import { Brush, Star, Favorite } from "@mui/icons-material";

const ButtonGroup: FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <Box>
    <Typography variant="body2" color="text.secondary" gutterBottom>
      {title}
    </Typography>
    {children}
  </Box>
);

export const ComponentsCard: FC = () => (
  <Card sx={{ height: "100%" }}>
    <CardContent>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Brush sx={{ mr: 1, color: "secondary.main" }} />
        <Typography variant="h6">Components</Typography>
      </Box>
      <Stack spacing={2}>
        <ButtonGroup title="Buttons">
          <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
            <Button variant="contained" size="small">
              Contained
            </Button>
            <Button variant="outlined" size="small">
              Outlined
            </Button>
            <Button variant="text" size="small">
              Text
            </Button>
          </Stack>
        </ButtonGroup>

        <ButtonGroup title="Form Elements">
          <TextField
            size="small"
            placeholder="Sample input field"
            fullWidth
            sx={{ mb: 1 }}
          />
        </ButtonGroup>

        <ButtonGroup title="Chips">
          <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
            <Chip
              icon={<Star />}
              label="Featured"
              color="primary"
              size="small"
            />
            <Chip
              icon={<Favorite />}
              label="Favorite"
              color="secondary"
              size="small"
            />
          </Stack>
        </ButtonGroup>
      </Stack>
    </CardContent>
  </Card>
);
