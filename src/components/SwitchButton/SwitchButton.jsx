import { useState } from "react";
import { ButtonBase, Container, Typography } from "@mui/material";

const SwitchButton = ({menuLocation, setMenuLocation}) => {
  return (
    <Container sx={{bgcolor: "background.btnMenu" ,width: "100%", padding: "6px", display: "flex", justifyContent: "space-between", alignItems: "center", borderRadius: "20px"}}>
      <ButtonBase onClick={()=>setMenuLocation("alca-blvd")} variant={menuLocation === "alca-blvd" ? "menuButton" : ""} sx={{width: "50%", padding: "15px", borderRadius: "14px"}}>
        <Typography variant="h3">Alcanfores y Boulevard</Typography>
      </ButtonBase>
      <ButtonBase onClick={()=>setMenuLocation("centro")}  variant={menuLocation === "centro" ? "menuButton" : ""} sx={{width: "50%", padding: "15px", borderRadius: "14px"}}>
      <Typography variant="h3">Centro</Typography>
      </ButtonBase>
    </Container>
  );
};

export default SwitchButton;
