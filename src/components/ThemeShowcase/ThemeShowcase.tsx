import { type FC } from "react";
import { Container, Grid } from "@mui/material";
import {
  ShowcaseHeader,
  ColorSystemCard,
  ComponentsCard,
  TypographyCard,
  ProfileCard,
  StatsCard
} from "./components";

const ThemeShowcase: FC = () => (
  <Container maxWidth="lg" sx={{ py: 4 }}>
    <ShowcaseHeader />

    <Grid container spacing={3}>
      {/* Color Palette Section */}
      <Grid size={{ xs: 12, md: 6 }}>
        <ColorSystemCard />
      </Grid>

      {/* Components Section */}
      <Grid size={{ xs: 12, md: 6 }}>
        <ComponentsCard />
      </Grid>

      {/* Typography Section */}
      <Grid size={{ xs: 12 }}>
        <TypographyCard />
      </Grid>

      {/* Profile Card Example */}
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <ProfileCard />
      </Grid>

      {/* Stats Cards */}
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <StatsCard value="42k" label="Active Users" gradientType="primary" />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <StatsCard value="98%" label="Satisfaction" gradientType="secondary" />
      </Grid>
    </Grid>
  </Container>
);

export default ThemeShowcase;
