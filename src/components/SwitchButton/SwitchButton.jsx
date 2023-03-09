import { Box, Button, ButtonGroup } from "@mui/material";
import React, { useState } from "react";

const SwitchButton = () => {
    const {isActive, setIsActive} = useState()
  return (
    <Box display="flex" justifyContent="center" alignItems="center" m={4}>
      <button className="button-beige">Alcanfores y Boulevard</button>
      <button className="button-black">Centro</button>
    </Box>
  );
};

export default SwitchButton;
