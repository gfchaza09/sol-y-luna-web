import { useState } from "react";
import { ButtonBase, Container, Typography } from "@mui/material";
import ServiceCard from "../Cards/ServiceCard/ServiceCard";
import ButtonComponent from "../Button/ButtonComponent";

import data from "../../../public/json/cards.json";

const HomeServices = () => {
  const [serviceActive, setServiceActive] = useState("estacionamiento");

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
        maxWidth: "1640px",
        marginBottom: {mobile: "120px", tablet: "200px"},
      }}
    >
      <Container
        sx={{ padding: "0px", marginBottom: "50px" }}
      >
        <Typography component="h2" variant="h2" sx={{ marginBottom: "24px", textAlign: "left" }}>
          ¿QUÉ OFRECEMOS?
        </Typography>
      </Container>
      <Container sx={{ padding: "0px", height: "auto", marginBottom: "50px"}}>
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
              height: {mobile: `${serviceActive === "delivery" ? "28%" :"92%"}`, mobile2: `${serviceActive === "delivery" ? "27%" :"92%"}`, tablet: `${serviceActive === "delivery" ? "40%" :"90%"}`},
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
            <Container
              sx={{
                padding: { mobile: "4px", tablet: "8px" },
                margin: "0px",
                width: { mobile: "30px", tablet: "58px" },
                height: { mobile: "30px", tablet: "58px" },
                border: "3px solid",
                borderColor: `${
                  serviceActive === "estacionamiento"
                    ? "primary.borderActive"
                    : "primary.border"
                }`,
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                opacity: `${serviceActive === "estacionamiento" ? "1" : "0.9"}`,
              }}
              onClick={() => setServiceActive("estacionamiento")}
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
              onClick={() => setServiceActive("estacionamiento")}
              sx={{ cursor: "pointer" }}
            >
              Estacionamiento
            </Typography>
            
          </Container>
          <Container sx={{paddingLeft: "30px", paddingRight: "0px"}}>
            {
                serviceActive === "estacionamiento" && <ServiceCard
                data={data.servicios_home[0]}
                disableElement
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
            <Container
              sx={{
                padding: { mobile: "4px", tablet: "8px" },
                margin: "0px",
                width: { mobile: "30px", tablet: "58px" },
                height: { mobile: "30px", tablet: "58px" },
                border: "3px solid",
                borderColor: `${
                  serviceActive === "juegos"
                    ? "primary.borderActive"
                    : "primary.border"
                }`,
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                opacity: `${serviceActive === "juegos" ? "1" : "0.9"}`,
              }}
              onClick={() => setServiceActive("juegos")}
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
              onClick={() => setServiceActive("juegos")}
              sx={{ cursor: "pointer" }}
            >
              Área de juegos
            </Typography>
          </Container>
          <Container sx={{paddingLeft: "30px", paddingRight: "0px"}}>
            {
                serviceActive === "juegos" && <ServiceCard
                data={data.servicios_home[1]}
                disableElement
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
            <Container
              sx={{
                padding: { mobile: "4px", tablet: "8px" },
                margin: "0px",
                width: { mobile: "30px", tablet: "58px" },
                height: { mobile: "30px", tablet: "58px" },
                border: "3px solid",
                borderColor: `${
                  serviceActive === "eventos"
                    ? "primary.borderActive"
                    : "primary.border"
                }`,
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                opacity: `${serviceActive === "eventos" ? "1" : "0.9"}`,
              }}
              onClick={() => setServiceActive("eventos")}
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
              onClick={() => setServiceActive("eventos")}
              sx={{ cursor: "pointer" }}
            >
              Salón de eventos
            </Typography>
          </Container>
          <Container sx={{paddingLeft: "30px", paddingRight: "0px"}}>
            {
                serviceActive === "eventos" && <ServiceCard
                data={data.servicios_home[2]}
                disableElement
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
            <Container
              sx={{
                padding: { mobile: "4px", tablet: "8px" },
                margin: "0px",
                width: { mobile: "30px", tablet: "58px" },
                height: { mobile: "30px", tablet: "58px" },
                border: "3px solid",
                borderColor: `${
                  serviceActive === "delivery"
                    ? "primary.borderActive"
                    : "primary.border"
                }`,
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                opacity: `${serviceActive === "delivery" ? "1" : "0.9"}`,
              }}
              onClick={() => setServiceActive("delivery")}
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
              onClick={() => setServiceActive("delivery")}
              sx={{ cursor: "pointer" }}
            >
              Delivery y take away
            </Typography>
          </Container>
          <Container sx={{paddingLeft: "30px", paddingRight: "0px"}}>
            {
                serviceActive === "delivery" && <ServiceCard
                data={data.servicios_home[3]}
                disableElement
              />
            }
          </Container>
        </Container>
      </Container>
      <ButtonComponent href="/servicios">Ver todos nuestros servicios</ButtonComponent>
    </Container>
  );
};

export default HomeServices;
