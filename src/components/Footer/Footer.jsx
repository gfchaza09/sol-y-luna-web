import { Container, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import classes from "./Footer.module.css";

const { footer, logo__container, nav__container, nav__container__slinks } = classes;

const navItems = [
  { name: "Menú", href: "/menu" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Servicios", href: "/servicios" },
  { name: "Ubicaciones", href: "/ubicaciones" },
];

const Footer = ({selectedTheme}) => {
  return (
    <Container component="footer" className={footer} sx={{display: "flex", bgcolor: "primary.footer"}}>
        <Link href="/">
          <div className={logo__container}>
            {
              selectedTheme === "light" ? <Image
              src="/assets/logo/sol_y_luna_light.png"
              width={38}
              height={38}
              alt="logo"
            /> : <Image
              src="/assets/logo/sol_y_luna_dark.png"
              width={38}
              height={38}
              alt="logo"
            />
            }
            
            <Typography variant="textLogo">Sol y Luna San Cristóbal</Typography>
          </div>
        </Link>
        <nav className={nav__container}>
          <ul>
            {
              navItems.map((item, index)=> (
                <li key={index}>
                  <Link href={item.href}><Typography className="footer-link">{item.name}</Typography></Link>
                </li>
              ))
            }
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
    </Container>
  );
};

export default Footer;
