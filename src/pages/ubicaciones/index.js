import Head from "next/head";
import { Container, Grid, Typography } from "@mui/material";
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
    image: "/assets/images/sol-y-luna-alcanfores-min.jpg",
    href: "/ubicaciones/alcanfores",
    value: "alcanfores",
  },
  {
    name: "SOL Y LUNA BOULEVARD",
    description:
      "Ideal si estás buscando comida al paso. Aunque también puedes disfrutar de la comida en nuestro agradable ambiente de Sol y Luna Boulevard.",
    image: "/assets/images/sol-y-luna-boulevard-min.jpg",
    href: "/ubicaciones/boulevard",
    value: "boulevard",
  },
  {
    name: "SOL Y LUNA CENTRO",
    description:
      "Ubicada en el corazón de San Cristóbal de las Casas, esta sucursal es la más frecuentada por nuestros clientes turistas.",
    image: "/assets/images/sol-y-luna-centro-min.jpg",
    href: "/ubicaciones/centro",
    value: "centro",
  },
];

const Location = ({ selectedTheme, toggleTheme }) => {
  const [width, setWidth] = useWindowWidth();

  return (
    <>
      <Head>
        <title>Sol y Luna Restaurante - Ubicaciones</title>
        <meta
          name="description"
          content="Sol y Luna cuenta con 3 sucursales distribuidas por la ciudad. En todas ellas podrás encontrar un agradable ambiente familiar y disfrutar de nuestra gran variedad de platillos."
          key="desc"
        />
        <meta
          name="keywords"
          content="RESTAURANTE, COMIDA, MÉXICO, SAN, CRISTÓBAL, CASAS SOL, LUNA, MENÚ, COMER, ALCANFORES, CENTRO, BOULEVARD, ESTACIONAMIENTO, JUEGOS, EVENTOS, TURISTAS, COMIDA"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout selectedTheme={selectedTheme} toggleTheme={toggleTheme}>
        <main>
          <Hero title="UBICACIONES" image="/assets/images/ubicaciones.jpg" />
          <Container
            component="section"
            sx={{
              padding: { mobile: "20px", tablet: "40px" },
              maxWidth: "1640px",
            }}
          >
            <Typography
              variant={width > 420 ? (width > 820 ? "h2" : "h3") : "h5"}
              component="h2"
              sx={{
                margin: {
                  mobile: "77px 0px 32px",
                  tablet: "142px 0px 64px",
                  desktop: "142px 20px 64px",
                },
                textAlign: { mobile: "center", tablet: "left" },
              }}
            >
              NUESTRAS UBICACIONES
            </Typography>
            <Grid
              container
              spacing={2}
              justifyContent="center"
              sx={{
                maxWidth: "1640px",
                width: "auto",
                marginBottom: {
                  mobile: "214px",
                  mobile2: "300px",
                  tablet: "400px",
                },
                padding: "0px",
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
          </Container>
        </main>
      </Layout>
    </>
  );
};

export default Location;
