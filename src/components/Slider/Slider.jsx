import Image from "next/image";
import React, { useState } from "react";
import estilos from "./Slider.module.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button } from "@mui/material";



function Slider({ imagenes }) {

  const mockImagenes = [
    "https://picsum.photos/id/980/1000",
    "https://picsum.photos/id/981/1000",
    "https://picsum.photos/id/982/1000",
    "https://picsum.photos/id/983/1000",
    "https://picsum.photos/id/984/1000"
  ];

 
  const [imagenActual, setImagenActual] = useState(0);
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
      <Button onClick={anteriorImagen} className={estilos.button_back}><ArrowBackIosIcon /></Button>
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
            {imagenActual === index && <Image className={estilos.img} key={index} src={imagen} alt="imagen" layout="fill"/>}
          </div>
        );
      })}
      <Button onClick={siguienteImagen} className={estilos.button_right}><ArrowForwardIosIcon /></Button>
    </div>
  );
}

export default Slider;
