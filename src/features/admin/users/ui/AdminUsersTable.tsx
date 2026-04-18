import {
  Alert,
  Box,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";
import { useAdminUsersQuery } from "../application/useAdminUsersQuery";

export const AdminUsersTable = () => {
  const { data, isPending, isError, error, isFetching } = useAdminUsersQuery();

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
        {(error as Error).message || "Failed to load admin users."}
      </Alert>
    );
  }

  return (
    <Card>
      <CardContent>
        <Stack spacing={2}>
          <Box>
            <Typography variant="overline" color="text.secondary">
              Admin Directory
            </Typography>
            <Typography variant="h4">Users</Typography>
            <Typography variant="body2" color="text.secondary">
              {isFetching ? "Refreshing backend data..." : `${data?.length ?? 0} users returned by the API`}
            </Typography>
          </Box>
          {!data?.length ? (
            <Alert severity="info">The API returned no users yet.</Alert>
          ) : (
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Username</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Role</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((user) => (
                  <TableRow key={user.id} hover>
                    <TableCell>{user.username}</TableCell>
                    <TableCell>{user.email || "-"}</TableCell>
                    <TableCell>
                      <Chip
                        size="small"
                        color={user.isAdmin ? "primary" : "default"}
                        label={user.isAdmin ? "Admin" : "User"}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};
