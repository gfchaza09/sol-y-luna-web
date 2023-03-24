import { useState } from "react";
import { Container, Skeleton, Typography } from "@mui/material";
import SwitchButton from "../SwitchButton/SwitchButton";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import MenuButton from "../MenuButton/MenuButton";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const buttons = [
  {
    title: "Desayunos",
    section: "desayunos",
  },
  {
    title: "Comidas",
    section: "comidas",
  },
  {
    title: "Bebidas",
    section: "bebidas",
  },
  {
    title: "Postres",
    section: "postres",
  },
  {
    title: "Menú infantil",
    section: "menu-infantil",
  },
];

const MenuContainer = () => {
  const [width, setWidth] = useWindowWidth();

  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const [menuLocation, setMenuLocation] = useState("alca-blvd");

  const [menuSection, setMenuSection] = useState("desayunos");

  return (
    <Container
      component="section"
      sx={{
        padding: {
          mobile: "60px 20px",
          tablet2: "100px 30px",
          laptop: "100px 50px",
          desktop: "100px",
        },
      }}
    >
      <Container
        sx={{
          padding: "0px",
          marginBottom: { mobile: "70px", tablet: "156px" },
        }}
      >
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: { mobile: 17, tablet: 18 },
            lineHeight: "25px",
            marginBottom: "24px",
            textAlign: "center",
          }}
        >
          Variamos nuestros servicios y comidas dependiendo del público de
          nuestras sucursales. Actualmente contamos con 2 menús.
        </Typography>
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: { mobile: 17, tablet: 18 },
            lineHeight: "25px",
            marginBottom: "80px",
            textAlign: "center",
          }}
        >
          ¿Cuál quieres mirar?
        </Typography>
        <SwitchButton
          menuLocation={menuLocation}
          setMenuLocation={setMenuLocation}
        />
      </Container>
      <Container
        sx={{
          padding: "0px",
          display: "flex",
          flexDirection: { mobile: "column", tablet3: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: "100px",
          maxWidth: "1640px",
        }}
      >
        <Container
          sx={{
            padding: "0px",
            width: {
              mobile: "100%",
              mobile2: "300px",
              tablet: "80%",
              tablet3: "0%",
            },
          }}
        >
          <Container
            sx={{
              padding: "0px",
              position: "relative",
              width: {
                mobile: "240px",
                mobile2: "270px",
                tablet: "420px",
                tablet2: "560px",
                tablet3: "0px",
              },
              height: { mobile: "0px", tablet3: "500px" },
              border: "1.5px solid",
              borderColor: "primary.border",
            }}
          >
            <Container
              sx={{
                height: { mobile: "0px", tablet3: "540px" },
                width: {
                  mobile: "320px",
                  mobile2: "360px",
                  tablet: "550px",
                  tablet2: "700px",
                  tablet3: "0px",
                },
                display: "flex",
                flexDirection: { mobile: "row", tablet3: "column" },
                justifyContent: "space-between",
                position: { mobile: "absolute", tablet3: "static" },
                top: { mobile: "-15px", tablet: "-30px" },
                left: "-30px",
              }}
            >
              {buttons.map((button, index) => (
                <MenuButton
                  key={index}
                  title={button.title}
                  section={button.section}
                  menuSection={menuSection}
                  setMenuSection={setMenuSection}
                />
              ))}
            </Container>
          </Container>
        </Container>
        <Container
          sx={{
            padding: "0px",
            borderRadius: "12px",
            overflow: "hidden",
            overflowY: "scroll",
            maxHeight: { mobile: "600px", tablet: "700px", tablet3: "800px" },
            minWidth: {
              mobile: "300px",
              mobile2: "360px",
              tablet: "600px",
              tablet2: "700px",
            },
            maxWidth: { mobile: "300px", tablet: "700px" },
            width: { mobile: "100%", tablet3: "60%" },
          }}
        >
          <Document
            file={`/assets/pdf/${menuLocation}/${menuSection}-${
              width >= 640 ? "desktop" : "mobile"
            }.pdf`}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={
              <Skeleton
                variant="rounded"
                width="100%"
                height={width >= 640 ? "700px" : "600px"}
                animation="wave"
              />
            }
            error={
              <Container sx={{ padding: "0px", height: {mobile: "600px", tablet: "700px"}, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "20px" }}>
                <ExclamationCircleIcon width={40} height={40} color="#E91D1D"/>
                <Typography sx={{textAlign: "center"}}>
                  Error al cargar el archivo. Intenta de nuevo.
                </Typography>
              </Container>
            }
          >
            {Array.apply(null, Array(numPages))
              .map((x, i) => i + 1)
              .map((page, index) => (
                <Page
                  key={index}
                  pageNumber={page}
                  renderTextLayer={false}
                  width={width < 420 ? 360 : width < 640 ? 400 : 700}
                  loading={
                    <Skeleton
                      variant="rounded"
                      width="100%"
                      height={width >= 640 ? "700px" : "600px"}
                      animation="wave"
                    />
                  }
                />
              ))}
          </Document>
        </Container>
      </Container>
    </Container>
  );
};

export default MenuContainer;
