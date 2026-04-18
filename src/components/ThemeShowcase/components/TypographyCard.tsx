import { type FC } from "react";
import { Card, CardContent, Typography, Box, Stack, Grid } from "@mui/material";
import { ColorLens } from "@mui/icons-material";

export const TypographyCard: FC = () => {
  return (
    <Card>
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <ColorLens sx={{ mr: 1, color: "success.main" }} />
          <Typography variant="h6">Typography Scale</Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Stack spacing={1}>
              <Typography variant="h1">Heading 1</Typography>
              <Typography variant="h2">Heading 2</Typography>
              <Typography variant="h3">Heading 3</Typography>
              <Typography variant="h4">Heading 4</Typography>
              <Typography variant="h5">Heading 5</Typography>
              <Typography variant="h6">Heading 6</Typography>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Stack spacing={1}>
              <Typography variant="body1">
                Body 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
              <Typography variant="body2">
                Body 2: Sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </Typography>
              <Typography variant="caption" display="block">
                Caption: Ut enim ad minim veniam, quis nostrud exercitation.
              </Typography>
              <Typography variant="overline" display="block">
                Overline: Ullamco laboris nisi ut aliquip ex ea commodo.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
