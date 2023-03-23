import Image from "next/image";
import React from "react";
import fotoMenu from "../../../public/assets/images/menu-del-dia.png";
import fotoAbout from "../../../public/assets/images/sol-y-luna-alcanfores-min.jpg";
import ButtonComponent from "../Button/ButtonComponent";
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

          <ButtonComponent href="/menu">
            {data?.menu?.txtBoton}
          </ButtonComponent>
        </div>
      </div>
      <div className={Styles.containerReverse}>
        <div className={Styles.picture}>
          <Image className={Styles.img} src={fotoAbout} alt="foto-menu" />
        </div>
        <div className={Styles.text}>
          <h2>{data?.sobreNosotros?.titulo}</h2>
          <p>{data?.sobreNosotros?.descripcion}</p>

          <ButtonComponent href="/nosotros">
            {data?.sobreNosotros?.txtBoton}
          </ButtonComponent>
        </div>
      </div>
    </>
  );
};

export default Headboard;
