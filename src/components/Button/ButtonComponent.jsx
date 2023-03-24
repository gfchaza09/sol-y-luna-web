import { ButtonBase } from "@mui/material";
import Link from "next/link";

import classes from "./ButtonComponent.module.css";

const { btn__link, btn__carrousel } = classes;

const ButtonComponent = ({ children, href, icon, target, onClick }) => {
  return icon ? (
    <ButtonBase
      className={`${btn__carrousel}`}
      variant="carouselButton"
      onClick={onClick}
      title="Slide"
      aria-label="Slide"
      aria-labelledby="slide"
    >
      {children}
    </ButtonBase>
  ) : (
    <ButtonBase
      variant="contactButton"
      sx={{
        maxWidth: "227px",
        width: "100%",
        margin: "0px auto",
        height: "48px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link className={btn__link} href={href} target={target ? target : ""}>
        {children}
      </Link>
    </ButtonBase>
  );
};

export default ButtonComponent;
