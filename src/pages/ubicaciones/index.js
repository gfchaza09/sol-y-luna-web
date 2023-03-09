import Head from "next/head";
import { Grid, Typography } from "@mui/material";
// Components
import Layout from "@/components/Layout/Layout";
import LocalCard from "@/components/Cards/LocalCard/LocalCard";
import Hero from "@/components/Hero/Hero";
import { useWindowWidth } from "@/hooks/useWindowWidth";

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
  const [width, setWidth] = useWindowWidth();

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
        <main>
          <Hero title="UBICACIONES" image="/assets/images/ubicaciones.jpg" />
          <div>
            <Typography
              variant={width > 420 ? (width > 640 ? "h2" : "h4") : "h5"}
              component="h2"
              sx={{
                margin: { mobile: "77px 0px 32px", tablet: "142px 50px 64px" },
                textAlign: "center",
              }}
            >
              NUESTRAS UBICACIONES
            </Typography>
            <Grid
              container
              spacing={2}
              direction={{ mobile: "column", tablet: "row" }}
              justifyContent="center"
              sx={{
                marginBottom: {
                  mobile: "214px",
                  mobile2: "300px",
                  tablet: "400px",
                },
              }}
            >
              {locations.map((location, index) => (
                <LocalCard
                  key={index}
                  data={location}
                  selectedTheme={selectedTheme}
                />
              ))}
            </Grid>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Location;
