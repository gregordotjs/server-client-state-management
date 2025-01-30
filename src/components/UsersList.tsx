import { useQuery } from "@tanstack/react-query";
import { User } from "../interfaces";
import { getUsers } from "../api";
import {
  Avatar,
  Box,
  CircularProgress,
  List,
  ListItem,
  Paper,
  Typography,
} from "@mui/material";
import { useFilterStore } from "../store";

export function UsersList() {
  // Use the `useQuery` hook to fetch users
  const { data, isLoading, isError, error } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  // Zustand store to manage search/filter term
  const { searchTerm } = useFilterStore();

  // Filtering users based on search term
  const filteredUsers = data?.filter((user) =>
    `${user.first_name} ${user.last_name}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  // Render loading state, error state, or the users list
  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <p>
          Error fetching users:
          {error instanceof Error ? error.message : "Unknown error"}
        </p>
      </Box>
    );
  }

  return (
    <Box>
      {/* Users list */}
      <Paper sx={{ padding: 2, borderRadius: 2, boxShadow: 3 }}>
        <List sx={{ padding: 0 }}>
          {filteredUsers?.map((user) => (
            <ListItem key={user.id} sx={{ marginBottom: 2 }}>
              <Avatar
                src={user.avatar}
                alt={`${user.first_name} ${user.last_name}`}
                sx={{ marginRight: 2 }}
              />
              <Box>
                <Typography variant="h6">
                  {user.first_name} {user.last_name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {user.email}
                </Typography>
              </Box>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
}
