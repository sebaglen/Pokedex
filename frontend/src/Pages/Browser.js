import { Container, Stack, Typography } from "@mui/material";
import { PokeCard } from "../Components/PokeCard";

const pokemons = [
  { name: "Charizard", type: "Fire" },
  { name: "Bulbosaur", type: "Grass" },
  { name: "Bulbosaur", type: "Grass" },
  { name: "Bulbosaur", type: "Grass" },
  { name: "Bulbosaur", type: "Grass" },
];
export const Browser = () => {
  return (
    <Container sx={{ paddingTop: "76px" }}>
      <Typography sx={{ paddingBottom: "24px" }} variant="h3">
        Pokedex
      </Typography>

      <Stack direction="row" sx={{ flexWrap: "wrap" }}>
        {pokemons.map((pokemon) => (
          <PokeCard pokemon={pokemon} />
        ))}
      </Stack>
    </Container>
  );
};
