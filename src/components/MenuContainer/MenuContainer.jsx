import { useState } from "react";
import { Container, Typography } from "@mui/material";
import SwitchButton from "../SwitchButton/SwitchButton";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import MenuButton from "../MenuButton/MenuButton";
import { useWindowWidth } from "@/hooks/useWindowWidth";

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
  const [pageNumber, setPageNumber] = useState(1);

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
          tablet2: "100px 30px",
          laptop: "100px 70px",
          desktop: "100px",
        },
      }}
    >
      <Container sx={{ padding: "0px", marginBottom: "156px" }}>
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: 18,
            lineHeight: "25px",
            marginBottom: "24px",
            textAlign: "center",
          }}
        >
          Variamos nuestros servicios y comidas dependiendo del público de
          nuestras sucursales. Actualmente contamos con 2 menús
        </Typography>
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: 18,
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
        <Container sx={{ padding: "0px", width: {mobile: "80%",tablet3: "30%"} }}>
          <Container
            sx={{
              padding: "0px",
              position: "relative",
              width: {mobile: "100%",tablet3: "0px"},
              height: {mobile: "0px",tablet3: "540px"},
              border: "1.5px solid",
              borderColor: "primary.border",
            }}
          >
            <Container
              sx={{
                height: {mobile: "0px", tablet3: "550px"},
                width: {mobile: "100%", tablet3:"0px"},
                display: "flex",
                flexDirection:{ mobile: "row",tablet3: "column"},
                justifyContent: "space-between",
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
            maxHeight: "850px",
            minWidth: "580px",
            maxWidth: "600px",
            width: "60%",
          }}
        >
          <Document
            file={`/assets/pdf/${menuLocation}/${menuSection}-${width > 640 ? "desktop" : "mobile"}.pdf`}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} renderTextLayer={false} />
          </Document>
        </Container>
      </Container>
    </Container>
  );
};

export default MenuContainer;
