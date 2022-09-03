import { Box, Chip, Typography } from "@mui/material";

const colors = {
  Fire: "#F96D6B",
  Grass: "#49D0B0",
  Water: "#76BCFF",
  Electric: "#FCD973"

};


export const PokeCard = ({ pokemon }) => {
//console.log(colors.Fire) // "#F96D6B"
//console.log(pokemon.type) // Fire
// console.log(colors[pokemon.type])
  
return (
    <Box
      onClick={(e) => {
        console.log("I was clicked");
      }}
      sx={{ width: "50%" }}
    >
      <Box
        sx={{
          padding: "60px",
          backgroundColor: colors[pokemon.type],
          marginRight: "12px",
          marginBottom: "12px",
          borderRadius: "16px",
        }}
      >
        <Typography
          sx={{
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
            fontSize: "15px",
          }}
          label={pokemon.type}
        />
      </Box>
    </Box>
  );
};
