import { Button, ButtonBase, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import fotoMenu from "../../../public/assets/images/menu-del-dia.png";
import fotoAbout from "../../../public/assets/images/sol-y-luna-alcanfores-min.jpg";
import Styles from "./Headboard.module.css";

const Headboard = ({ data }) => {
 
  return (
    <>
      <div className={Styles.container}>
            <div className={Styles.picture}>
              <Image className={Styles.img} src={fotoMenu} alt="foto-menu" />
            </div>
            <div className={Styles.text}>
              <h2>{data?.menu?.titulo}</h2>
              <p>{data?.menu?.descripcion}</p>
              <ButtonBase variant="a">
                <Button color="success">{data?.menu?.txtBoton}</Button>
              </ButtonBase>
            </div>
      </div>
      <div className={Styles.containerReverse}>
            <div className={Styles.picture}>
              <Image className={Styles.img} src={fotoAbout} alt="foto-menu" />
            </div>
            <div className={Styles.text}>
              <h2>{data?.sobreNosotros?.titulo}</h2>
              <p>{data?.sobreNosotros?.descripcion}</p>
              <ButtonBase variant="a">
                <Button color="success" >{data?.sobreNosotros?.txtBoton}</Button>
              </ButtonBase>
            </div>
      </div>
    </>
        )}

export default Headboard;
