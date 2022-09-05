import { Box, Chip, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { colors, pokemons } from "../helpers/data";

export const PokeCard = ({ pokemon }) => {
  const navigate = useNavigate();
  //console.log(colors.Fire) // "#F96D6B"
  //console.log(pokemon.type) // Fire
  //console.log(colors[pokemon.type])

  return (
    <Box onClick={() => {
        navigate("/pokemon/" + pokemon.name);
      }}
      sx={{ width: "50%" }}
    >
      <Box
        sx={{
          padding: "60px",
          backgroundColor: colors[pokemon.types[0]],
          marginRight: "12px",
          marginBottom: "12px",
          borderRadius: "16px",
        }}
      >
        <Typography
          sx={{
            textTransform: "capitalize",
            paddingBottom: "12px",
            color: "white",
          }}
          variant="h6"
        >
          {pokemon.name}
        </Typography>

        <Chip
          sx={{
            color: "white",
            backgroundColor: "rgba(255, 255, 255, 0.4)",
            textTransform: "capitalize",
            fontSize: "15px",
          }}
          label={pokemon.types[0]}
        />
        {pokemon.types.length > 1 && (
          <Chip
            sx={{
              color: "white",
              backgroundColor: "rgba(255, 255, 255, 0.4)",
              textTransform: "capitalize",
              fontSize: "15px",
            }}
            label={pokemon.types[1]}
          />
        )}
      </Box>
    </Box>
  );
};
