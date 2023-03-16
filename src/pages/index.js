import Head from "next/head";

// Components

import Layout from "@/components/Layout/Layout";
import Hero from "@/components/Hero/Hero";
import Headboard from "@/components/Headboard/Headboard";
import data from '../../public/json/textos.json'

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
        <Hero title="SOL Y LUNA SAN CRISTOBAL" image="/assets/images/sol-y-luna-centro-min.jpg" subtitle="Restaurante de comida mexicana, con ambiente agradable y totalmente familiar" buttonText="Conocenos"/>
        <Headboard data={data} isAlined={true} />
        <Headboard data={data} isAlined={false} />
      </Layout>
    </>
  );
};

export default Home;
