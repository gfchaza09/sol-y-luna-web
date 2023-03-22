import { useState } from "react";
import { ButtonBase, Container, Typography } from "@mui/material";

const SwitchButton = ({ menuLocation, setMenuLocation }) => {
  return (
    <Container
      sx={{
        bgcolor: "background.btnMenu",
        width: "100%",
        padding: {mobile: "0px", mobile2: "6px"},
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "20px",
      }}
    >
      <ButtonBase
        onClick={() => setMenuLocation("alca-blvd")}
        variant={menuLocation === "alca-blvd" ? "menuButton" : ""}
        sx={{ width: "50%", padding: {mobile: "6px", mobile2: "8px", tablet: "15px"}, borderRadius: "14px" }}
      >
        <Typography
          component="h2"
          variant="h3"
          sx={{ fontFamily: {mobile: '"Lato", sans-serif', mobile2: '"Josefin Sans", sans-serif'} ,fontSize: { mobile: 14, tablet: 20, tablet2: 28 }, lineHeight: {mobile: "20px", tablet: "25px", tablet2: "30px"} }}
        >
          Alcanfores y Boulevard
        </Typography>
      </ButtonBase>
      <ButtonBase
        onClick={() => setMenuLocation("centro")}
        variant={menuLocation === "centro" ? "menuButton" : ""}
        sx={{ width: "50%", padding: {mobile: "6px", mobile2: "8px", tablet: "15px"}, borderRadius: "14px" }}
      >
        <Typography
          component="h2"
          variant="h3"
          sx={{fontFamily: {mobile: '"Lato", sans-serif', mobile2: '"Josefin Sans", sans-serif'}, fontSize: { mobile: 14, tablet: 20, tablet2: 28 }, lineHeight: {mobile: "20px", tablet: "25px", tablet2: "30px"} }}
        >
          Centro
        </Typography>
      </ButtonBase>
    </Container>
  );
};

export default SwitchButton;
