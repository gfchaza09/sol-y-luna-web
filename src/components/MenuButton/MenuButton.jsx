import { ButtonBase, Container, Typography } from "@mui/material";

const MenuButton = ({ title, section, menuSection, setMenuSection }) => {
  return (
    <Container
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: { mobile: "column-reverse", tablet3: "row" },
        alignItems: "center",
        gap: "20px",
      }}
    >
      <Container
        sx={{
          position: "absolute",
          left: { mobile: "0px", tablet3: "-45px" },
          top: { mobile: "0px", tablet3: "-15px" },
          padding: {mobile: "4px",tablet: "8px"},
          width: {mobile: "30px",tablet: "58px"},
          height: {mobile: "30px", tablet: "58px"},
          border: "3px solid",
          borderColor: `${
            menuSection === section ? "primary.borderActive" : "primary.border"
          }`,
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity: `${menuSection === section ? "1" : "0.9"}`,
        }}
        onClick={() => setMenuSection(section)}
      >
        <ButtonBase
          variant="menuButton"
          sx={{
            borderRadius: "50%",
            width: "100%",
            height: "100%",
            background: "",
          }}
        ></ButtonBase>
      </Container>
      <Typography
        variant="h3"
        sx={{
          marginLeft: { mobile: "-20px",mobile2: "-24px", tablet: "-30px" ,tablet2: "-40px", tablet3: "20px" },
          fontSize: { mobile: 12, mobile2: 16, tablet: 20, tablet2: 28 },
          lineHeight: {
            mobile: "18px",
            mobile2: "20px",
            tablet: "25px",
            tablet2: "30px",
          },
          fontFamily: {mobile: '"Lato", sans-serif', mobile2: '"Josefin Sans", sans-serif'}
        }}
      >
        {title}
      </Typography>
    </Container>
  );
};

export default MenuButton;
