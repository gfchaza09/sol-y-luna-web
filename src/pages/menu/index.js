import Head from "next/head";
import Link from "next/link";
// Components
import Layout from "@/components/Layout/Layout";
import Carrusel from "@/components/Slider/Slider";
import Image from "next/image";
import Hero from "@/components/Hero/Hero";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import SwitchButton from "@/components/SwitchButton/SwitchButton";

const Menu = ({ selectedTheme, toggleTheme }) => {
  

  return (
    <>
      <Head>
        <title>Sol y Luna - Menu</title>
        <meta
          name="description"
          content="Sitio web del restaurant Sol y Luna"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout selectedTheme={selectedTheme} toggleTheme={toggleTheme}>
        {/* <main style={{ minHeight: "100vh" }}>
          <Link href="/">Home</Link>
        </main> */}
        <Hero title="NUESTRO MENU" image="/assets/images/menu-header.jpg" />
        <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center" m={2} gap={2}>
          <Typography variant="h5">
            Variamos nuestros servicios y comidas dependiendo del publico de nuestras sucursales. Actualmente contamos con 2 menus
          </Typography>
          <Typography variant="h5">
            Cual quieres mirar?
          </Typography>
        </Box>
        <SwitchButton />
        <Carrusel />
      </Layout>
    </>
  );
};

export default Menu;
