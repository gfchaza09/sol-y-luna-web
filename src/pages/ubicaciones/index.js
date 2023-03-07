import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
// Components
import Layout from "@/components/Layout/Layout";
import { Typography } from "@mui/material";
import LocalCard from "@/components/Cards/LocalCard/LocalCard";
import Hero from "@/components/Hero/Hero";
import GridLayout from "@/components/GridLayout/GridLayout";

const locations = [
  {
    name: "SOL Y LUNA ALCANFORES",
    description:
      "Nuestra sucursal principal. Cuenta con estacionamiento, un área de juegos y un salón de eventos para reservar.",
    image: "/assets/images/sol-y-luna-alcanfores.jpg",
    href: "/ubicaciones/alcanfores",
  },
  {
    name: "SOL Y LUNA BOULEVARD",
    description:
      "Ideal si estás buscando comida al paso. Aunque también puedes disfrutar de la comida en nuestro agradable ambiente de Sol y Luna Boulevard.",
    image: "/assets/images/sol-y-luna-boulevard.jpg",
    href: "/ubicaciones/boulevard",
  },
  {
    name: "SOL Y LUNA CENTRO",
    description:
      "Ubicada en el corazón de San Cristóbal de las Casas, esta sucursal es la más frecuentada por nuestros clientes turistas.",
    image: "/assets/images/sol-y-luna-alcanfores.jpg",
    href: "/ubicaciones/centro",
  },
];

const Location = ({ selectedTheme, toggleTheme }) => {
  return (
    <>
      <Head>
        <title>Sol y Luna - Ubicaciones</title>
        <meta
          name="description"
          content="Sitio web del restaurant Sol y Luna"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout selectedTheme={selectedTheme} toggleTheme={toggleTheme}>
        <main
          style={{
            minHeight: "100vh",
            width: "100%",
          }}
        >
          <Hero title="UBICACIONES" image="/assets/images/ubicaciones.jpg" />
          <div>
            <Typography
              variant="h2"
              component="h2"
              sx={{ margin: "142px 100px 64px" }}
            >
              NUESTRAS UBICACIONES
            </Typography>
            <GridLayout>
              {locations.map((location, index) => (
                <LocalCard key={index} data={location} />
              ))}
            </GridLayout>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Location;
