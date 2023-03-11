import Head from "next/head";
// Components
import Layout from "@/components/Layout/Layout";
import Hero from "@/components/Hero/Hero";
import MapContainer from "@/components/MapContainer/MapContainer";

const Local2 = ({ selectedTheme, toggleTheme }) => {
  return (
    <>
      <Head>
        <title>Sol y Luna - Centro</title>
        <meta
          name="description"
          content="Sitio web del restaurant Sol y Luna"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout selectedTheme={selectedTheme} toggleTheme={toggleTheme}>
        <main>
          <Hero
            title={"SOL Y LUNA CENTRO"}
            subtitle={`📍 Calle Belisario Domínguez # 2a, Zona Centro 967.145.2802`}
            image="/assets/images/sol-y-luna-centro-min.jpg"
          />
        </main>
        <MapContainer
          selectedTheme={selectedTheme}
          title={"SOL Y LUNA CENTRO"}
          longLat={[-92.63567871594242, 16.73693712378187]}
        />
      </Layout>
    </>
  );
};

export default Local2;
