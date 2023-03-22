import { Box, ButtonBase, Container } from "@mui/material";
import React, { useState } from "react";
import Styles from "./Dropdown.module.css";

const Dropdown = () => {
  const [ showup, setShowup] = useState(false)

  

  return (
    <Container fluid display="flex" flexDirection="column">
      <Container display="flex" flexDirection="row">
        <ButtonBase variant="menuButton">button</ButtonBase>
        <Box>
          <h2>titulo</h2>
          <h3>subtitulo</h3>
          <p>parrafo</p>
        </Box>
      </Container>
      <Container display="flex" flexDirection="row">
        <ButtonBase variant="menuButton">button</ButtonBase>
        <ButtonBase variant="menuButton">button</ButtonBase>
        <ButtonBase variant="menuButton">button</ButtonBase>
        <ButtonBase variant="menuButton">button</ButtonBase>
      </Container>
    </Container>
  );
};

export default Dropdown;
