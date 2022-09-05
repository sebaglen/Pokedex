import {
  Container,
  Stack,
  Typography,
  CircularProgress,
  Chip,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { purple } from "@mui/material/colors";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { colors } from "../helpers/data";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

//React komponent
export const Pokemon = () => {
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState();
  const { name } = useParams();
  const [value, setValue] = useState("About");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    fetch(`/api/pokemon?pokemon=${name}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }, []);

  return (
    <Stack height="100vh">
      {!pokemon && (
        <CircularProgress
          sx={{
            color: "purple",
            margin: "auto",
          }}
        />
      )}

      {pokemon && (
        <Stack
          sx={{
            height: "100%",
            width: "100%",
            backgroundColor: colors[pokemon.type[0]] || "white",
          }}
        >
          <Container
            sx={{
              maxWidth: "600px !important",
              padding: "70px",
              paddingBottom: "480px",
            }}
          >
            <Stack
              direction="row"
              width={"100%"}
              justifyContent="space-between"
              spacing={2}
            >
              <ArrowBackIcon
                onClick={() => navigate("/")}
                F
                sx={{ color: "white", fontSize: "35px" }}
              ></ArrowBackIcon>

              <Box onClick={() => setToggle((previous) => !previous)}>
                {!toggle && (
                  <FavoriteBorderIcon
                    sx={{ color: "white", fontSize: "35px" }}
                  />
                )}
                {toggle && (
                  <FavoriteIcon sx={{ color: "white", fontSize: "35px" }} />
                )}
              </Box>
            </Stack>

            <Stack
              direction="row"
              width={"100%"}
              justifyContent="space-between"
              spacing={2}
            >
              <Typography
                sx={{
                  textTransform: "capitalize",
                  color: "white",
                  textAlign: "center",
                }}
                variant="h5"
              >
                {pokemon.name}
              </Typography>
              <Typography
                sx={{
                  textTransform: "capitalize",
                  color: "white",
                  textAlign: "center",
                }}
                variant="h5"
              >
                {`#${pokemon.id}`}
              </Typography>
            </Stack>
            <Chip
              sx={{
                color: "white",
                backgroundColor: "rgba(255, 255, 255, 0.4)",
                textTransform: "capitalize",
                fontSize: "15px",
              }}
              label={pokemon.type[0]}
            />
          </Container>
          <Box
            sx={{
              backgroundColor: "#F3F3F3",
              width: "100%",
              position: "relative",
              flex: 1,
            }}
          >
            <Box
              sx={{
                margin: "auto",
                position: "absolute",
                right: 0,
                left: 0,
                top: -450,
              }}
              component="img"
              src={pokemon.image}
            ></Box>
            <Box
              sx={{
                padding: "50px",
                margin: "auto",
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
              >
                <Tab value="About" label="About" />
                <Tab value="Base stats" label="Base stats" />
                <Tab value="Forms" label="Forms" />
                <Tab value="Abilities" label="Abilities" />
              </Tabs>
              {value === "About" && (
                <Box>
                  <Stack></Stack>
                  <Typography>Height: {pokemon.height}</Typography>
                  <Typography>Weight: {pokemon.weight}</Typography>
                </Box>
              )}
              {value === "Base stats" && <Box>dsa </Box>}
              {value === "Forms" && <Box>hei hei</Box>}
              {value === "Abilities" && <Box>hei hei</Box>}
            </Box>
          </Box>
        </Stack>
      )}
    </Stack>
  );
};
