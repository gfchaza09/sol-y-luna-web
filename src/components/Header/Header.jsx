import React from "react";
import { Box, Container, Paper, Typography } from "@mui/material";
import Slider from "../Slider/Slider";

const Header = () => {
  const mockImagenes = [
    "https://picsum.photos/id/1020/800",
    "https://picsum.photos/id/1025/800",
    "https://picsum.photos/id/1010/800",
  ];

  return (
    <Box >
      <Slider imagenes={mockImagenes} />
    </Box>
  );
};

export default Header;
