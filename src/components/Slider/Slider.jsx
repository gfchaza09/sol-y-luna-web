import Image from "next/image";
import React from "react";
import estilos from "./Slider.module.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button } from "@mui/material";



function Slider({ imagenes }) {
 
  const [imagenActual, setImagenActual] = React.useState(0);
  const cantidad = imagenes?.length;

 
  if (!Array.isArray(imagenes) || cantidad === 0) return;

  const siguienteImagen = () => {
    setImagenActual(imagenActual === cantidad - 1 ? 0 : imagenActual + 1);
  };

  const anteriorImagen = () => {
    setImagenActual(imagenActual === 0 ? cantidad - 1 : imagenActual - 1);
  };

  return (
    <div className={estilos.container}>
      <Button onClick={anteriorImagen} className={estilos.button}><ArrowBackIosIcon /></Button>
      {imagenes.map((imagen, index) => {
        return (
          <div
            className={
              imagenActual === index
                ? `${estilos.slide} ${estilos.active}`
                : estilos.slide
            }
            key={index}
          >
            {imagenActual === index && <Image className={estilos.img} key={index} src={imagen} alt="imagen" width={800} height={800} />}
          </div>
        );
      })}
      <Button onClick={siguienteImagen} className={estilos.button}><ArrowForwardIosIcon /></Button>
    </div>
  );
}

export default Slider;
