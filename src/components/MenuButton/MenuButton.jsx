import { ButtonBase, Container, Typography } from "@mui/material";

const MenuButton = ({title, section, menuSection, setMenuSection}) => {
  return (
    <Container sx={{ display: "flex", flexDirection: {mobile: "column",tablet3: "row"},alignItems: "center", gap: "20px" }}>
      <Container
        sx={{
          position: "absolute",
          left: {mobile: "none", tablet3: "-29px"},
          padding: "10px",
          width: "58px",
          height: "58px",
          border: "3px solid",
          borderColor: "primary.border",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity: `${menuSection === section ? "1" : "0.6"}`
        }}
        onClick={()=>setMenuSection(section)}
      >
        <ButtonBase variant="menuButton"
          sx={{
            borderRadius: "50%",
            width: "36px",
            height: "36px",
          }}
        ></ButtonBase>
      </Container>
      <Typography variant="h3" sx={{ marginLeft: {mobile: "0px", tablet3: "20px"} }}>
        {title}
      </Typography>
    </Container>
  );
};

export default MenuButton;
