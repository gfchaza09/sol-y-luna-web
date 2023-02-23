import Link from "next/link";

import classes from "./ButtonComponent.module.css";

const { btn, btn__carrousel } = classes;

const ButtonComponent = ({ children, href, icon }) => {
  return icon ? (
    <button className={`${btn} ${btn__carrousel}`}>
      {children}
    </button>
  ) : (
    <Link href={href}>
      <button className={btn}>
        {children}
      </button>
    </Link>
  );
};

export default ButtonComponent;
