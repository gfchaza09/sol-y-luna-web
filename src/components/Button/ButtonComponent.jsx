import Link from "next/link";

import classes from "./ButtonComponent.module.css";

const { btn, btn__carrousel } = classes;

const ButtonComponent = ({ children, href, icon, target }) => {
  return icon ? (
    <button className={`${btn} ${btn__carrousel}`}>
      {children}
    </button>
  ) : (
    <Link href={href} target={target ? target : ""}>
      <button className={btn}>
        {children}
      </button>
    </Link>
  );
};

export default ButtonComponent;
