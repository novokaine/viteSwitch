import {
  Alert,
  Box,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Stack,
  Typography
} from "@mui/material";
import { useUserProfileQuery } from "../application/useUserProfileQuery";

export const ProfileView = () => {
  const { data, isPending, isError, error, isFetching } = useUserProfileQuery();

  if (isPending) {
    return (
      <Box display="flex" justifyContent="center" py={6}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return (
      <Alert severity="error">
        {(error as Error).message || "Failed to load your profile."}
      </Alert>
    );
  }

  if (!data) {
    return <Alert severity="info">No profile data was returned by the API.</Alert>;
  }

  return (
    <Card>
      <CardContent>
        <Stack spacing={2}>
          <Box>
            <Typography variant="overline" color="text.secondary">
              Current Session Profile
            </Typography>
            <Typography variant="h4">{data.username}</Typography>
          </Box>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            <Chip
              color={data.isAdmin ? "primary" : "default"}
              label={data.isAdmin ? "Administrator" : "Standard user"}
            />
            <Chip
              variant="outlined"
              label={isFetching ? "Refreshing" : "Synced with backend"}
            />
          </Stack>
          <Box>
            <Typography variant="body2" color="text.secondary">
              Email
            </Typography>
            <Typography variant="body1">
              {data.email || "No email returned by the API"}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" color="text.secondary">
              User ID
            </Typography>
            <Typography variant="body1">{data.id ?? "Not provided"}</Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};
