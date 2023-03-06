import React from "react";
import { Box, Container, Paper, Typography } from "@mui/material";
import Slider from "../Slider/Slider";
// import Carrousel from "../Carrousel/Carrousel";
import SimpleSlider from "../Carrousel/Carrousel";


const Header = () => {
  const mockImagenes = [
    "https://picsum.photos/id/980/1000",
    "https://picsum.photos/id/981/1000",
    "https://picsum.photos/id/982/1000",
    "https://picsum.photos/id/983/1000",
    "https://picsum.photos/id/984/1000"
  ];

  return (
    <Box >
      <Slider imagenes={mockImagenes} />
      {/* <Carrousel/> */}
      {/* <SimpleSlider/> */}
    </Box>
  );
};

export default Header;
