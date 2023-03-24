import Head from "next/head";

// Components

import Layout from "@/components/Layout/Layout";
import Hero from "@/components/Hero/Hero";
import Headboard from "@/components/Headboard/Headboard";
import data from "../../public/json/textos.json";
import galery from "../../public/json/galeryHome.json";
import { Box } from "@mui/system";
import Galery from "@/components/Galeries/Galery";
import HomeServices from "@/components/HomeServices/HomeServices";

import {
  HomeLocationsDesktop,
  HomeLocationsMobile,
} from "@/components/HomeLocations/HomeLocations";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import HomeReviews from "@/components/HomeReviews/HomeReviews";

const Home = ({ selectedTheme, toggleTheme }) => {
  const [width, setWidth] = useWindowWidth();

  return (
    <>
      <Head>
        <title>Sol y Luna Restaurante - Inicio</title>
        <meta
          name="description"
          content="Sitio web del restaurante Sol y Luna que ofrece comida mexicana, con ambiente agradable y totalmente familar."
          key="desc"
        />
        <meta
          name="keywords"
          content="RESTAURANTE, COMIDA, MÉXICO, SAN, CRISTÓBAL, CASAS, SOL, LUNA, MENÚ, COMER, AGUACHILE, CLERICOT, CHILE"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout selectedTheme={selectedTheme} toggleTheme={toggleTheme}>
        <Hero
          title="SOL Y LUNA SAN CRISTÓBAL"
          image="/assets/images/sol-y-luna-centro-min.jpg"
          text="Restaurante de comida mexicana, con ambiente agradable y totalmente familiar"
          buttonText="Conócenos"
        />
        <Headboard data={data} />
        <HomeServices />
        <Galery data={galery} />
        {width > 820 ? (
          <HomeLocationsDesktop selectedTheme={selectedTheme} />
        ) : (
          <HomeLocationsMobile selectedTheme={selectedTheme} />
        )}
        <HomeReviews />
      </Layout>
    </>
  );
};

export default Home;
