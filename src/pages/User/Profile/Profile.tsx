import {
  Box,
  Chip,
  Stack,
  Typography
} from "@mui/material";
import { useUserProfileQuery } from "./hooks";
import ApiWrapper from "../../../components/ApiWrapper";

const Profile = () => {
  const profileQuery = useUserProfileQuery();

  return (
    <ApiWrapper
      query={profileQuery}
      emptyMessage="No profile data was returned by the API."
    >
      {(data, query) => (
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
              label={query.isFetching ? "Refreshing" : "Synced with backend"}
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
      )}
    </ApiWrapper>
  );
};

export default Profile;
