import { ButtonBase } from "@mui/material";
import Link from "next/link";

import classes from "./ButtonComponent.module.css";

const {btn,  btn__link, btn__carrousel } = classes;

const ButtonComponent = ({ children, href, icon, target }) => {
  return icon ? (
    <button className={`${btn} ${btn__carrousel}`}>
      {children}
    </button>
  ) : (
    <ButtonBase variant="contactButton" sx={{maxWidth: "190px", width: "100%", height: "48px", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Link className={btn__link} href={href} target={target ? target : ""}>
          {children}
      </Link>
    </ButtonBase>
  );
};

export default ButtonComponent;
