import { UsersList } from "./components/UsersList";
import { Container, Typography, Box } from "@mui/material";
import { Header } from "./components/Header";

function App() {
  return (
    <Container maxWidth="lg">
      {/* Header Section */}
      <Box textAlign="center" marginTop={4}>
        <Typography variant="h6" color="textSecondary" paragraph>
          Sezonam uporabnikov iz ReqRes API-ja.
        </Typography>
      </Box>

      <Container maxWidth="lg">
        {/* Header with search bar */}
        <Header />

        {/* Users List */}
        <UsersList />
      </Container>
    </Container>
  );
}

export default App;
