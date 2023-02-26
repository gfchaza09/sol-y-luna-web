import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import classes from "./Footer.module.css";

const { footer, logo__container, nav__container, nav__container__links, nav__container__slinks } = classes;

const Footer = () => {
  return (
    <footer className={footer}>
        <Link href="/">
          <div className={logo__container}>
            <Image
              src="/assets/logo/sol_y_luna_dark.png"
              width={38}
              height={38}
              alt="logo"
            />
            <Typography className="text-logo">Sol y Luna San Cristóbal</Typography>
          </div>
        </Link>
        <nav className={nav__container}>
          <ul>
            <li>
              <Link href="/menu"><Typography className="footer__link">Menú</Typography></Link>
            </li>
            <li>
              <Link href="/about"><Typography className="footer__link">Nosotros</Typography></Link>
            </li>
            <li>
              <Link href="/services"><Typography className="footer__link">Servicios</Typography></Link>
            </li>
            <li>
              <Link href="/location"><Typography className="footer__link">Ubicaciones</Typography></Link>
            </li>
          </ul>
        </nav>
        <nav className={nav__container__slinks}>
          <ul>
            <li>
              <Link
                  href="https://www.facebook.com/solylunasancristobal"
                  target="_blank"
                >
                  <Image src="/assets/social-networks/facebook_logo.svg" alt="facebook" width={24} height={24}/>
                </Link>
            </li>
            <li>
                <Link
                  href="https://www.instagram.com/solylunasancristobal"
                  target="_blank"
                >
                  <Image src="/assets/social-networks/instagram_logo.svg" alt="instagram" width={24} height={24}/>
                </Link>
            </li>
            <li>
                <Link
                  href="https://www.tiktok.com/@solylunasancristobal"
                  target="_blank"
                >
                  <Image src="/assets/social-networks/tiktok_logo.svg" alt="tiktok" width={24} height={24}/>
                </Link>
            </li>
            <li>
                <Link
                  href="https://www.tripadvisor.com.ar/Restaurant_Review-g150802-d11796683-Reviews-Restaurante_Sol_y_Luna-San_Cristobal_de_las_Casas_Southern_Mexico.html"
                  target="_blank"
                >
                  <Image src="/assets/social-networks/tripadvisor_logo.svg" alt="tripadvisor" width={24} height={24}/>
                </Link>
            </li>
          </ul>
        </nav>
    </footer>
  );
};

export default Footer;
