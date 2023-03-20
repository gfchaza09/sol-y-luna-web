import { ButtonBase, Container, Typography } from "@mui/material";

const Button = ({ show, setShow, title, value }) => {
  return (
    <Container
      onClick={() => setShow(value)}
      sx={{
        width: "220px",
        display: "flex",
        alignItems: "center",
        margin: "0px",
        padding: "0px"
      }}
    >
      <Container
        sx={{
          padding: { mobile: "4px", tablet: "8px" },
          width: { mobile: "30px", tablet: "58px" },
          height: { mobile: "30px", tablet: "58px" },
          border: "3px solid",
          borderColor: `${
            show === value ? "primary.borderActive" : "primary.border"
          }`,
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity: `${show === value ? "1" : "0.9"}`,
        }}
        onClick={() => setShow("1")}
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
      <Typography>{title}</Typography>
    </Container>
  );
};

export default Button;
