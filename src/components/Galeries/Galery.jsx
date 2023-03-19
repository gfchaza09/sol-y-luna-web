import {
  Button,
  ButtonBase,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import Styles from "./Galery.module.css";

const Galery = ({ data }) => {
  return (
    <div className={Styles.galery_container}>
      <Image
        className={Styles.img1}
        src={data?.[0]?.img}
        alt="picture1"
        width={350}
        height={250}
      />

      <Image
        className={Styles.img2}
        src={data?.[1]?.img}
        alt="picture2"
        width={350}
        height={250}
      />

      <Image
        className={Styles.img3}
        src={data?.[2]?.img}
        alt="picture3"
        width={350}
        height={250}
      />

      <Image
        className={Styles.img4}
        src={data?.[3]?.img}
        alt="picture4"
        width={350}
        height={250}
      />
      <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <ButtonBase>
          <Button
            variant="outlined"
            color="success"
            href="https://www.google.com"
          >
            Ver Menu
          </Button>
        </ButtonBase>
      </div>
    </div>
  );
};

export default Galery;
