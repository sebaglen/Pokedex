import express from "express";
import fetch from "node-fetch";
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
    .then((response) => response.json())
    .then((data) => {
      const pokemons = data.results;
      const promiseChain = pokemons.map((pokemon) =>
        fetch(pokemon.url).then((res) => res.json())
      );

      Promise.allSettled(promiseChain).then((results) => {
        const formatedPokemonData = results.map((item) => {
          const pokemonData = {
            name: item.value.name,
            height: item.value.height,
            weight: item.value.weight,
            image: item.value.sprites.other.home.front_default,
          };

          return pokemonData;
        });

        res.send(formatedPokemonData);
      });
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
