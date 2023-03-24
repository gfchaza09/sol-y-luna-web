import { useState } from "react";
import { ButtonBase, Container, Typography } from "@mui/material";
import ButtonComponent from "../Button/ButtonComponent";
import LocalCard from "../Cards/LocalCard/LocalCard";
import { useWindowWidth } from "@/hooks/useWindowWidth";

const locations = [
  {
    name: "SOL Y LUNA ALCANFORES",
    description:
      "Nuestra sucursal principal. Cuenta con estacionamiento, un área de juegos y un salón de eventos para reservar.",
    image: "/assets/images/sol-y-luna-alcanfores-min.jpg",
    href: "/ubicaciones/alcanfores",
    value: "alcanfores",
  },
  {
    name: "SOL Y LUNA CENTRO",
    description:
      "Ubicada en el corazón de San Cristóbal de las Casas, esta sucursal es la más frecuentada por nuestros clientes turistas.",
    image: "/assets/images/sol-y-luna-centro-min.jpg",
    href: "/ubicaciones/centro",
    value: "centro",
  },
  {
    name: "SOL Y LUNA BOULEVARD",
    description:
      "Ideal si estás buscando comida al paso. Aunque también puedes disfrutar de la comida en nuestro agradable ambiente de Sol y Luna Boulevard.",
    image: "/assets/images/sol-y-luna-boulevard-min.jpg",
    href: "/ubicaciones/boulevard",
    value: "boulevard",
  },
];

export const HomeLocationsDesktop = ({ selectedTheme }) => {
  const [localActive, setLocalActive] = useState("alcanfores");

  return (
    <Container
      component="section"
      sx={{
        padding: "0px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "50px",
        maxWidth: "1640px",
        marginBottom: "200px",
        marginTop: {tablet2: "140px", desktop: "180px"}
      }}
    >
      <Container
        sx={{ padding: "20px", textAlign: "center", marginBottom: "50px" }}
      >
        <Typography variant="h2" sx={{ marginBottom: "50px" }}>
          UBICACIONES
        </Typography>
        <Typography sx={{fontSize: 18, fontWeight: 500, lineHeight: "25px"}}>
          Contamos con 3 sucursales distribuidas por la ciudad.
        </Typography>
        <Typography sx={{fontSize: 18, fontWeight: 500, lineHeight: "25px"}}>
          En todas ellas podrás encontrar un agradable ambiente familiar y
          disfrutar de nuestra gran variedad de platillos.
        </Typography>
      </Container>
      <Container sx={{ padding: "0px" }}>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Container
            sx={{
              padding: "0px",
              position: "absolute",
              top: "26px",
              width: "65%",
              height: "2px",
              border: "2px solid",
              borderColor: "primary.border",
            }}
          ></Container>
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
            <ButtonBase
              sx={{
                padding: { mobile: "4px", tablet: "8px" },
                width: { mobile: "30px", tablet: "58px" },
                height: { mobile: "30px", tablet: "58px" },
                border: "3px solid",
                borderColor: `${
                  localActive === "alcanfores"
                    ? "primary.borderActive"
                    : "primary.border"
                }`,
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                opacity: `${localActive === "alcanfores" ? "1" : "0.9"}`,
              }}
              onClick={() => setLocalActive("alcanfores")}
              title="Sol y Luna Alcanfores"
              aria-label="Sol y Luna Alcanfores"
              aria-labelledby="sol y luna alcanfores"
            >
              <Container
                variant="menuButton"
                sx={{
                  borderRadius: "50%",
                  width: "100%",
                  height: "100%",
                  background: "",
                  padding: "0px"
                }}
              ></Container>
            </ButtonBase>
            <Typography
              variant="h3"
              onClick={() => setLocalActive("alcanfores")}
              sx={{ cursor: "pointer" }}
            >
              ALCANFORES
            </Typography>
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
            <ButtonBase
              sx={{
                padding: { mobile: "4px", tablet: "8px" },
                width: { mobile: "30px", tablet: "58px" },
                height: { mobile: "30px", tablet: "58px" },
                border: "3px solid",
                borderColor: `${
                  localActive === "centro"
                    ? "primary.borderActive"
                    : "primary.border"
                }`,
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                opacity: `${localActive === "centro" ? "1" : "0.9"}`,
              }}
              onClick={() => setLocalActive("centro")}
              title="Sol y Luna Centro"
              aria-label="Sol y Luna Centro"
              aria-labelledby="sol y luna centro"
            >
              <Container
                variant="menuButton"
                sx={{
                  borderRadius: "50%",
                  width: "100%",
                  height: "100%",
                  background: "",
                  padding: "0px"
                }}
              ></Container>
            </ButtonBase>
            <Typography
              variant="h3"
              onClick={() => setLocalActive("centro")}
              sx={{ cursor: "pointer" }}
            >
              CENTRO
            </Typography>
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
            <ButtonBase
              sx={{
                padding: { mobile: "4px", tablet: "8px" },
                width: { mobile: "30px", tablet: "58px" },
                height: { mobile: "30px", tablet: "58px" },
                border: "3px solid",
                borderColor: `${
                  localActive === "boulevard"
                    ? "primary.borderActive"
                    : "primary.border"
                }`,
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                opacity: `${localActive === "boulevard" ? "1" : "0.9"}`,
              }}
              onClick={() => setLocalActive("boulevard")}
              title="Sol y Luna Boulevard"
              aria-label="Sol y Luna Boulevard"
              aria-labelledby="sol y luna boulevard"
            >
              <Container
                variant="menuButton"
                sx={{
                  borderRadius: "50%",
                  width: "100%",
                  height: "100%",
                  background: "",
                  padding: "0px"
                }}
              ></Container>
            </ButtonBase>
            <Typography
              variant="h3"
              onClick={() => setLocalActive("boulevard")}
              sx={{ cursor: "pointer" }}
            >
              BOULEVARD
            </Typography>
          </Container>
        </Container>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "flex-start",
            marginTop: "30px",
            gap: "20px",
          }}
        >
          {locations.map((location, index) => (
            <LocalCard
              key={index}
              data={location}
              selectedTheme={selectedTheme}
              localActive={localActive}
            />
          ))}
        </Container>
      </Container>
      <ButtonComponent href="/ubicaciones">Ver ubicaciones</ButtonComponent>
    </Container>
  );
};

export const HomeLocationsMobile = ({selectedTheme}) => {
  const [localActive, setLocalActive] = useState("alcanfores");

  const [width, setWidth] = useWindowWidth();

  return (
    <Container
      component="section"
      sx={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "50px",
        marginBottom: "80px",
        marginTop: {mobile: "80px", tablet: "100px", tablet2: "120px"}
      }}
    >
      <Container
        sx={{ padding: "0px", marginBottom: "50px" }}
      >
        <Typography component="h2" variant={width > 768 ? "h2" :  width > 480 ? "h3" : "h5"} sx={{ marginBottom: "24px", textAlign: "center" }}>
          UBICACIONES
        </Typography>
        <Typography sx={{fontSize: 16, fontWeight: 400, lineHeight: "20px"}}>
          Contamos con 3 sucursales distribuidas por la ciudad.
        </Typography>
        <Typography sx={{fontSize: 16, fontWeight: 400, lineHeight: "20px"}}>
          En todas ellas podrás encontrar un agradable ambiente familiar y
          disfrutar de nuestra gran variedad de platillos.
        </Typography>
      </Container>
      <Container sx={{ padding: "0px", height: "auto", marginBottom: "50px" }}>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            position: "relative",
            gap: "30px"
          }}
        >
          <Container
            sx={{
              padding: "0px",
              position: "absolute",
              top: "26px",
              left: {mobile: "29px", tablet: "43px"},
              height: {mobile: `${localActive === "boulevard" ? "27%" :"90%"}`, mobile2: `${localActive === "boulevard" ? "24%" :"90%"}`, tablet: `${localActive === "boulevard" ? "30%" :"90%"}`},
              width: "2px",
              border: "2px solid",
              borderColor: "primary.border",
            }}
          ></Container>
          <Container
            sx={{
              padding: "0px",
              display: "flex",
              alignItems: "center",
              gap: "25px",
            }}
          >
            <ButtonBase
              sx={{
                padding: { mobile: "4px", tablet: "8px" },
                margin: "0px",
                width: { mobile: "30px", tablet: "58px" },
                height: { mobile: "30px", tablet: "58px" },
                border: "3px solid",
                borderColor: `${
                  localActive === "alcanfores"
                    ? "primary.borderActive"
                    : "primary.border"
                }`,
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                opacity: `${localActive === "alcanfores" ? "1" : "0.9"}`,
              }}
              onClick={() => setLocalActive("alcanfores")}
              title="Sol y Luna Alcanfores"
              aria-label="Sol y Luna Alcanfores"
              aria-labelledby="sol y luna alcanfores"
            >
              <Container
                variant="menuButton"
                sx={{
                  borderRadius: "50%",
                  width: "100%",
                  height: "100%",
                  background: "",
                  padding: "0px"
                }}
              ></Container>
            </ButtonBase>
            <Typography
              component="h3"
              variant="h5"
              onClick={() => setLocalActive("alcanfores")}
              sx={{ cursor: "pointer" }}
            >
              ALCANFORES
            </Typography>
            
          </Container>
          <Container sx={{paddingLeft: "30px", paddingRight: "0px"}}>
            {
                localActive === "alcanfores" && <LocalCard
                data={locations[0]}
                selectedTheme={selectedTheme}
                localActive={localActive}
              />
              }

          </Container>
          <Container
            sx={{
              padding: "0px",
              display: "flex",
              alignItems: "center",
              gap: "25px",
            }}
          >
            <ButtonBase
              sx={{
                padding: { mobile: "4px", tablet: "8px" },
                margin: "0px",
                width: { mobile: "30px", tablet: "58px" },
                height: { mobile: "30px", tablet: "58px" },
                border: "3px solid",
                borderColor: `${
                  localActive === "centro"
                    ? "primary.borderActive"
                    : "primary.border"
                }`,
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                opacity: `${localActive === "centro" ? "1" : "0.9"}`,
              }}
              onClick={() => setLocalActive("centro")}
              title="Sol y Luna Centro"
              aria-label="Sol y Luna Centro"
              aria-labelledby="sol y luna centro"
            >
              <Container
                variant="menuButton"
                sx={{
                  borderRadius: "50%",
                  width: "100%",
                  height: "100%",
                  background: "",
                  padding: "0px"
                }}
              ></Container>
            </ButtonBase>
            <Typography
              component="h3"
              variant="h5"
              onClick={() => setLocalActive("centro")}
              sx={{ cursor: "pointer" }}
            >
              CENTRO
            </Typography>
          </Container>
          <Container sx={{paddingLeft: "30px", paddingRight: "0px"}}>
            {
                localActive === "centro" && <LocalCard
                data={locations[1]}
                selectedTheme={selectedTheme}
                localActive={localActive}
              />
              }
          </Container>
          <Container
            sx={{
              padding: "0px",
              display: "flex",
              alignItems: "center",
              gap: "25px",
            }}
          >
            <ButtonBase
              sx={{
                padding: { mobile: "4px", tablet: "8px" },
                margin: "0px",
                width: { mobile: "30px", tablet: "58px" },
                height: { mobile: "30px", tablet: "58px" },
                border: "3px solid",
                borderColor: `${
                  localActive === "boulevard"
                    ? "primary.borderActive"
                    : "primary.border"
                }`,
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                opacity: `${localActive === "boulevard" ? "1" : "0.9"}`,
              }}
              onClick={() => setLocalActive("boulevard")}
              title="Sol y Luna Boulevard"
              aria-label="Sol y Luna Boulevard"
              aria-labelledby="sol y luna boulevard"
            >
              <Container
                variant="menuButton"
                sx={{
                  borderRadius: "50%",
                  width: "100%",
                  height: "100%",
                  background: "",
                  padding: "0px"
                }}
              ></Container>
            </ButtonBase>
            <Typography
              component="h3"
              variant="h5"
              onClick={() => setLocalActive("boulevard")}
              sx={{ cursor: "pointer" }}
            >
              BOULEVARD
            </Typography>
          </Container>
          <Container sx={{paddingLeft: "30px", paddingRight: "0px"}}>
            {
                localActive === "boulevard" && <LocalCard
                data={locations[2]}
                selectedTheme={selectedTheme}
                localActive={localActive}
              />
            }
          </Container>
        </Container>
      </Container>
      <ButtonComponent href="/ubicaciones">Ver ubicaciones</ButtonComponent>
    </Container>
  );
}
