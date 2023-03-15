import { useState } from 'react'
import { Container, Typography } from '@mui/material'
import SwitchButton from '../SwitchButton/SwitchButton'
import { Document, Page, pdfjs } from 'react-pdf'

import "react-pdf/dist/esm/Page/AnnotationLayer.css"

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const MenuContainer = () => {

    const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Container component="section" sx={{padding: "100px"}}>
        <Container sx={{padding: "0px", marginBottom: "156px"}}>
            <Typography sx={{fontWeight: 500, fontSize: 18, lineHeight: "25px", marginBottom: "24px", textAlign: "center"}}>
              Variamos nuestros servicios y comidas dependiendo del público de
              nuestras sucursales. Actualmente contamos con 2 menús
            </Typography>
            <Typography sx={{fontWeight: 500, fontSize: 18, lineHeight: "25px", marginBottom: "80px", textAlign: "center"}}>¿Cuál quieres mirar?</Typography>
          <SwitchButton />
        </Container>
        <Container sx={{padding: "0px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "100px"}}>
            <Container sx={{padding: "0px", width: "25%"}}>
                Botones
            </Container>
            <Container sx={{padding: "0px", borderRadius: "12px", overflow: "hidden", overflowY: "scroll", maxHeight: "850px"}}>
                <Document file="/assets/pdf/alca-blvd/desayunos-desktop.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} renderTextLayer={false}/>
                </Document>
            </Container>
        </Container>
    </Container>
  )
}

export default MenuContainer