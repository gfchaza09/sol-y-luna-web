import React from "react";
import { Box, Container, Paper, Typography } from "@mui/material";
import Image from "next/image";
import styled from "@emotion/styled";

const Header = () => {
  const Img = styled("img")({
    width: 200,
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    margin: "10px",
  });

  return (
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          // overflow: "hidden",
          mt: 5,
          justifyContent: "center",
        }}
      >
        <Box>
          <Img src="https://via.placeholder.com/100" alt="image" />
        </Box>
      </Paper>
  );
};

export default Header;
