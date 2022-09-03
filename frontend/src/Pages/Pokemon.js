import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom'

//React komponent
export const Pokemon = () => {
    const { name } = useParams()
    console.log(name)
  return (
    <Box
      sx={{
        color: "blue",
      }}
    >
      teksther
    </Box>
  );
};
