import Head from "next/head";

// Components

import Layout from "@/components/Layout/Layout";
import Hero from "@/components/Hero/Hero";

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
        <Hero title="SOL Y LUNA SAN CRISTOBAL" image="/assets/images/sol-y-luna-centro-min.jpg"/>
      </Layout>
    </>
  );
};

export default Home;
