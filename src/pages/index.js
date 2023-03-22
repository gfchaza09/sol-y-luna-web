import Head from "next/head";

// Components

import Layout from "@/components/Layout/Layout";
import Hero from "@/components/Hero/Hero";
import Headboard from "@/components/Headboard/Headboard";
import data from "../../public/json/textos.json";
import galery from "../../public/json/galeryHome.json";
import { Box } from "@mui/system";
import { Container, Typography } from "@mui/material";
import CardBoard from "@/components/Headboard/CardBoard";
import MenuButton from "@/components/MenuButton/MenuButton";
import Galery from "@/components/Galeries/Galery";
import HomeServices from "@/components/HomeServices/HomeServices";
import { HomeLocationsDesktop } from "@/components/HomeLocations/HomeLocations";
import Dropdown from "@/components/Dropdown/Dropdown";

const Home = ({ selectedTheme, toggleTheme }) => {

  return (
    <>
      <Head>
        <title>Sol y Luna - Home</title>
        <meta
          name="description"
          content="Sitio web del restaurant Sol y Luna"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout selectedTheme={selectedTheme} toggleTheme={toggleTheme}>
        <Hero
          title="SOL Y LUNA SAN CRISTOBAL"
          image="/assets/images/sol-y-luna-centro-min.jpg"
          subtitle="Restaurante de comida mexicana, con ambiente agradable y totalmente familiar"
          buttonText="Conocenos"
        />
        <Headboard data={data} />
        <Box m="0 50px">
          <Typography variant="h2">¿QUE OFRECEMOS?</Typography>
        </Box>
        <Dropdown />

        <Box>
          <Typography variant="h2" m="0 50px">
            NUESTROS PLATILLOS
          </Typography>
          <Galery data={galery} />
        </Box>
        <HomeLocationsDesktop />
      </Layout>
    </>
  );
};

export default Home;
