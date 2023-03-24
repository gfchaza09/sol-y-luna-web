import { useWindowWidth } from "@/hooks/useWindowWidth";
import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import ButtonComponent from "../Button/ButtonComponent";
import Styles from "./Galery.module.css";

const Galery = ({ data }) => {
  
  const [width, setWidth] = useWindowWidth();
  return (
    <section className={Styles.section}>
      <Typography component="h2" variant={width > 768 ? "h2" :  width > 480 ? "h3" : "h5"} sx={{
          marginLeft: { mobile: "0px", tablet2: "50px" },
          marginBottom: { mobile: "40px", tablet: "70px" },
          textAlign: { mobile: "center", tablet2: "left" },
        }}>
        NUESTROS PLATILLOS
      </Typography>
      <div className={Styles.galery_container}>
        <Image
          className={`${Styles.galery_img} ${Styles.galery_img1}`}
          src={data?.[0]?.img}
          alt="pic1"
          width={3183}
          height={4805}
        />

        <Image
          className={`${Styles.galery_img} ${Styles.galery_img2}`}
          src={data?.[1]?.img}
          alt="pic2"
          width={4501}
          height={2981}
        />

        <Image
          className={`${Styles.galery_img} ${Styles.galery_img3}`}
          src={data?.[2]?.img}
          alt="pic3"
          width={4694}
          height={3109}
        />

        <Image
          className={`${Styles.galery_img} ${Styles.galery_img4}`}
          src={data?.[3]?.img}
          alt="pic4"
          width={4730}
          height={3133}
        />
      </div>
      <ButtonComponent href="/menu">Ver menú</ButtonComponent>
    </section>
  );
};

export default Galery;
