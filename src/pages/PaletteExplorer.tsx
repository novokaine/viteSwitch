import React from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Button,
  Chip,
  Alert,
  IconButton
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const PaletteExplorer = () => {
  const theme = useTheme();
  console.log(theme);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Palette Explorer
      </Typography>

      <Grid container spacing={3}>
        {/* Primary */}
        <Grid
          size={{
            xs: 12,
            md: 6
          }}
        >
          <Paper
            sx={{
              p: 2,
              bgcolor: "primary.main",
              color: "primary.contrastText"
            }}
          >
            <Typography>Primary Main</Typography>
            <Typography variant="caption">
              {theme.palette.primary.main}
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Button variant="contained" color="primary">
                Primary Button
              </Button>
            </Box>
          </Paper>
        </Grid>

        {/* Secondary */}
        <Grid
          size={{
            xs: 12,
            md: 6
          }}
        >
          <Paper
            sx={{
              p: 2,
              bgcolor: "secondary.main",
              color: "secondary.contrastText"
            }}
          >
            <Typography>Secondary Main</Typography>
            <Typography variant="caption">
              {theme.palette.secondary.main}
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Button variant="contained" color="secondary">
                Secondary Button
              </Button>
            </Box>
          </Paper>
        </Grid>

        {/* Status Colors */}
        <Grid xs={12}>
          <Typography variant="h6" gutterBottom>
            Status Colors
          </Typography>
          <Grid container spacing={2}>
            <Grid xs={3}>
              <Alert severity="error">Error</Alert>
            </Grid>
            <Grid xs={3}>
              <Alert severity="warning">Warning</Alert>
            </Grid>
            <Grid xs={3}>
              <Alert severity="info">Info</Alert>
            </Grid>
            <Grid xs={3}>
              <Alert severity="success">Success</Alert>
            </Grid>
          </Grid>
        </Grid>

        {/* Text Colors */}
        <Grid xs={12}>
          <Typography variant="h6" gutterBottom>
            Text Colors
          </Typography>
          <Paper sx={{ p: 2 }}>
            <Typography color="text.primary">
              Primary Text: {theme.palette.text.primary}
            </Typography>
            <Typography color="text.secondary">
              Secondary Text: {theme.palette.text.secondary}
            </Typography>
            <Typography color="text.disabled">
              Disabled Text: {theme.palette.text.disabled}
            </Typography>
          </Paper>
        </Grid>

        {/* Action States */}
        <Grid xs={12}>
          <Typography variant="h6" gutterBottom>
            Action States
          </Typography>
          <Paper sx={{ p: 2 }}>
            <IconButton color="primary" sx={{ mr: 2 }}>
              ♡ {/* Active icon */}
            </IconButton>
            <IconButton disabled sx={{ mr: 2 }}>
              ♡ {/* Disabled icon */}
            </IconButton>
            <Button variant="outlined" sx={{ mr: 2 }}>
              Hover me
            </Button>
            <Chip label="Selected" color="primary" />
          </Paper>
        </Grid>

        {/* Background Colors */}
        <Grid xs={12} md={6}>
          <Paper
            sx={{
              p: 2,
              height: 100,
              bgcolor: "background.paper",
              border: `1px solid ${theme.palette.divider}`
            }}
          >
            <Typography>Background Paper</Typography>
            <Typography variant="caption">Used for cards, dialogs</Typography>
          </Paper>
        </Grid>

        <Grid xs={12} md={6}>
          <Box
            sx={{
              p: 2,
              height: 100,
              bgcolor: "background.default",
              border: `1px dashed ${theme.palette.divider}`
            }}
          >
            <Typography>Background Default</Typography>
            <Typography variant="caption">Page background</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
