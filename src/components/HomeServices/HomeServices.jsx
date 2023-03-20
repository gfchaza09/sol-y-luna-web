import { useState } from "react";
import Image from "next/image";
import { ButtonBase, Container, Typography } from "@mui/material";
import Button from "./Button";

const HomeServices = () => {
  const [show, setShow] = useState("1");

  return (
    <Container sx={{ padding: "0px" }}>
      <Container
        sx={{ padding: "0px", minHeight: "500px", positon: "relative" }}
      >
        <Container
          sx={{
            padding: "0px",
            border: "1.5px solid",
            borderColor: "primary.border",
            height: "500px",
            width: "0px",
            position: "absolute",
          }}
        ></Container>
        <Container
          sx={{
            height: "100%",
            padding: "0px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "20px",
            width: "100%"
          }}
        >
            <Container sx={{padding: "0px"}}>
              <Button show={show} setShow={setShow} title="Estacionamiento" value="1"/>
              {show === "1" && <Typography>Texto de prueba</Typography>}
              {show === "1" && (
                <Container sx={{width: "100%", 
                    minHeight: "300px",
                    height: "auto",
                    maxHeight: "500px",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "6px"}}>
                  <Image
                    src="/assets/images/estacionamiento-min.jpg"
                    alt="photo"
                    fill
                    sizes="100vh"
                    style={{objectFit: "cover"}}
                  />
                </Container>
              )}
            </Container>
            <Container sx={{padding: "0px"}}>
                <Button show={show} setShow={setShow} title="Área de juegos" value="2"/>
              {show === "2" && <Typography>Texto de prueba</Typography>}
              {show === "2" && (
                <Container sx={{width: "100%", 
                    minHeight: "300px",
                    height: "auto",
                    maxHeight: "500px",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "6px"}}>
                  <Image
                    src="/assets/images/estacionamiento-min.jpg"
                    alt="photo"
                    fill
                    sizes="100vh"
                    style={{objectFit: "cover"}}
                  />
                </Container>
              )}
            </Container>
            <Container sx={{padding: "0px"}}>
                <Button show={show} setShow={setShow} title="Salón de eventos" value="3"/>
              {show === "3" && <Typography>Texto de prueba</Typography>}
              {show === "3" && (
                <Container sx={{width: "100%", 
                    minHeight: "300px",
                    height: "auto",
                    maxHeight: "500px",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "6px"}}>
                  <Image
                    src="/assets/images/estacionamiento-min.jpg"
                    alt="photo"
                    fill
                    sizes="100vh"
                    style={{objectFit: "cover"}}
                  />
                </Container>
              )}
            </Container>
            <Container sx={{padding: "0px"}}>
                <Button show={show} setShow={setShow} title="Delivery y take away" value="4"/>
              {show === "4" && <Typography>Texto de prueba</Typography>}
              {show === "4" && (
                <Container sx={{width: "100%", 
                    minHeight: "300px",
                    height: "auto",
                    maxHeight: "500px",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "6px"}}>
                  <Image
                    src="/assets/images/estacionamiento-min.jpg"
                    alt="photo"
                    fill
                    sizes="100vh"
                    style={{objectFit: "cover"}}
                  />
                </Container>
              )}
            </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default HomeServices;
