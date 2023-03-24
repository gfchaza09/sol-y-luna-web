import Image from "next/image";
import React from "react";
import { Typography } from "@mui/material";
import fotoMenu from "../../../public/assets/images/menu-del-dia.png";
import fotoAbout from "../../../public/assets/images/sol-y-luna-alcanfores-min.jpg";
import ButtonComponent from "../Button/ButtonComponent";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import Styles from "./Headboard.module.css";

const Headboard = ({ data }) => {

  const [width, setWidth] = useWindowWidth();

  return (
    <section className={Styles.section}>
      <div className={Styles.container}>
        <div>
          <Typography component="h2" variant={width > 480 ? "h3" :"h5"} sx={{display: {mobile: "block", tablet1: "none"}, textAlign: "center"}}>{data?.menu?.titulo}</Typography>
        </div>
        <div className={Styles.picture}>
          <Image className={Styles.img} src={fotoMenu} alt="foto-menu" />
        </div>
        <div className={Styles.text}>
          <Typography component="h2" variant="h2" sx={{display: {mobile: "none", tablet1: "block"},textAlign:"left"}}>{data?.menu?.titulo}</Typography>
          <Typography sx={{fontSize: {mobile: 16, tablet: 18}, lineHeight: {mobile: "18px",tablet: "20px"}}}>{data?.menu?.primerParrafo}</Typography>
          <Typography sx={{fontSize: {mobile: 16, tablet: 18}, lineHeight: {mobile: "18px",tablet: "20px"}}}>{data?.menu?.segundoParrafo}</Typography>
          <Typography sx={{fontSize: {mobile: 16, tablet: 18}, lineHeight: {mobile: "18px",tablet: "20px"}}}>{data?.menu?.tercerParrafo}</Typography>
          <Typography sx={{fontSize: {mobile: 16, tablet: 18}, lineHeight: {mobile: "18px",tablet: "20px"}}}>{data?.menu?.cuartoParrafo}</Typography>

          <ButtonComponent href="/menu">
            {data?.menu?.txtBoton}
          </ButtonComponent>
        </div>
      </div>
      <div className={Styles.containerReverse}>
        <div>
          <Typography component="h2" variant={width > 480 ? "h3" :"h5"} sx={{display: {mobile: "block", tablet1: "none"}, textAlign: "center"}}>{data?.sobreNosotros?.titulo}</Typography>
        </div>
        <div className={Styles.picture}>
          <Image className={Styles.img} src={fotoAbout} alt="foto-menu" />
        </div>
        <div className={Styles.text}>
          <Typography component="h2" variant="h2" sx={{display: {mobile: "none", tablet1: "block"},textAlign:"left"}}>{data?.sobreNosotros?.titulo}</Typography>
          <Typography sx={{fontSize: {mobile: 16, tablet: 18}, lineHeight: {mobile: "18px",tablet: "20px"}}}>{data?.sobreNosotros?.primerParrafo}</Typography>
          <Typography sx={{fontSize: {mobile: 16, tablet: 18}, lineHeight: {mobile: "18px",tablet: "20px"}}}>{data?.sobreNosotros?.segundoParrafo}</Typography>
          <Typography sx={{fontSize: {mobile: 16, tablet: 18}, lineHeight: {mobile: "18px",tablet: "20px"}}}>{data?.sobreNosotros?.tercerParrafo}</Typography>

          <ButtonComponent href="/nosotros">
            {data?.sobreNosotros?.txtBoton}
          </ButtonComponent>
        </div>
      </div>
    </section>
  );
};

export default Headboard;
