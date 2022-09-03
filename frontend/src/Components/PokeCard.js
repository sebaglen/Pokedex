import { Box } from "@mui/system";

export const PokeCard = ({ pokemon }) => {
  return (
    <Box sx={{ width: "50%" }}>
      <Box
        sx={{
          padding: "24px",
          backgroundColor: "red",
          marginRight: "12px",
          marginBottom: "12px",
          borderRadius: "16px",
        }}
      >
        {pokemon.name}
      </Box>
    </Box>
  );
};
