import { ButtonBase, Container, Typography } from "@mui/material";
import ButtonComponent from "../Button/ButtonComponent";
import LocalCard from "../Cards/LocalCard/LocalCard";

const locations = [
  {
    name: "SOL Y LUNA ALCANFORES",
    description:
      "Nuestra sucursal principal. Cuenta con estacionamiento, un área de juegos y un salón de eventos para reservar.",
    image: "/assets/images/sol-y-luna-alcanfores-min.jpg",
    href: "/ubicaciones/alcanfores",
  },
  {
    name: "SOL Y LUNA BOULEVARD",
    description:
      "Ideal si estás buscando comida al paso. Aunque también puedes disfrutar de la comida en nuestro agradable ambiente de Sol y Luna Boulevard.",
    image: "/assets/images/sol-y-luna-boulevard-min.jpg",
    href: "/ubicaciones/boulevard",
  },
  {
    name: "SOL Y LUNA CENTRO",
    description:
      "Ubicada en el corazón de San Cristóbal de las Casas, esta sucursal es la más frecuentada por nuestros clientes turistas.",
    image: "/assets/images/sol-y-luna-centro-min.jpg",
    href: "/ubicaciones/centro",
  },
];

const HomeLocations = ({ selectedTheme }) => {
  return (
    <Container
      sx={{
        padding: "0px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "50px",
      }}
    >
      <Container sx={{ padding: "0px", textAlign: "center", marginBottom: "50px" }}>
        <Typography variant="h2" sx={{marginBottom: "50px"}}>UBICACIONES</Typography>
        <Typography>
          Contamos con 3 sucursales distribuidas por la ciudad
        </Typography>
        <Typography>
          En todas ellas podrás encontrar un agradable ambiente familiar y disfrutar de nuestra
          gran variedad de platillos.
        </Typography>
      </Container>
      <Container sx={{ padding: "0px" }}>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Container
            sx={{
              padding: "0px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "25px",
            }}
          >
            <Container
              sx={{
                padding: { mobile: "4px", tablet: "8px" },
                width: { mobile: "30px", tablet: "58px" },
                height: { mobile: "30px", tablet: "58px" },
                border: "3px solid",
                borderColor: `${
                  true
                    ? "primary.borderActive"
                    : "primary.border"
                }`,
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                opacity: `${true ? "1" : "0.9"}`,
              }}
              onClick={() => console.log("hola")}
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
            <Typography variant="h3">ALCANFORES</Typography>
          </Container>
          <Container
            sx={{
              padding: "0px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "25px",
            }}
          >
            <Container
              sx={{
                padding: { mobile: "4px", tablet: "8px" },
                width: { mobile: "30px", tablet: "58px" },
                height: { mobile: "30px", tablet: "58px" },
                border: "3px solid",
                borderColor: `${
                  true
                    ? "primary.borderActive"
                    : "primary.border"
                }`,
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                opacity: `${true ? "1" : "0.9"}`,
              }}
              onClick={() => console.log("hola")}
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
            <Typography variant="h3">CENTRO</Typography>
          </Container>
          <Container
            sx={{
              padding: "0px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "25px",
            }}
          >
            <Container
              sx={{
                padding: { mobile: "4px", tablet: "8px" },
                width: { mobile: "30px", tablet: "58px" },
                height: { mobile: "30px", tablet: "58px" },
                border: "3px solid",
                borderColor: `${
                  true
                    ? "primary.borderActive"
                    : "primary.border"
                }`,
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                opacity: `${true ? "1" : "0.9"}`,
              }}
              onClick={() => console.log("hola")}
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
            <Typography variant="h3">BOULEVARD</Typography>
          </Container>
        </Container>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "flex-start",
            marginTop: "30px",
          }}
        >
          {locations.map((location, index) => (
            <LocalCard
              key={index}
              data={location}
              selectedTheme={selectedTheme}
            />
          ))}
        </Container>
      </Container>
      <ButtonComponent href="/ubicaciones">Ver ubicaciones</ButtonComponent>
    </Container>
  );
};

export default HomeLocations;
