import { TextField, Box, Typography } from "@mui/material";
import { useFilterStore } from "../store";

export function Header() {
  // Zustand store for managing the search term
  const { searchTerm, setSearchTerm } = useFilterStore();

  return (
    <Box textAlign="center" marginTop={4}>
      <Typography variant="h4" gutterBottom>
        Seznam uporabnikov
      </Typography>
      <Typography variant="h6" color="textSecondary" paragraph>
        Tukaj lahko poiščete uporabnike po imenu.
      </Typography>

      {/* Search bar */}
      <TextField
        label="Išči uporabnike"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{
          marginBottom: 4,
          width: "50%",
          maxWidth: "400px",
          marginX: "auto",
        }}
      />
    </Box>
  );
}
