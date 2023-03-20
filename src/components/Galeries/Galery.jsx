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
    <>
      <div className={Styles.galery_container}>
        <Image
          className={`${Styles.img1} ${Styles.img}`}
          src={data?.[0]?.img}
          alt="picture1"
          width={3183}
          height={4805}
        />

        <Image
          className={`${Styles.img2} ${Styles.img}`}
          src={data?.[1]?.img}
          alt="picture2"
          width={4501}
          height={2981}
        />

        <Image
          className={`${Styles.img3} ${Styles.img}`}
          src={data?.[2]?.img}
          alt="picture3"
          width={4694}
          height={3109}
        />

        <Image
          className={`${Styles.img4} ${Styles.img}`}
          src={data?.[3]?.img}
          alt="picture4"
          width={4730}
          height={3133}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >
        <Button
        // className={Styles.buttonDark}
        variant="a"
        

        >
          Ver Menu
        </Button>
      </div>
    </>
  );
};

export default Galery;
