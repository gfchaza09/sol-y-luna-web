import Head from "next/head";

// Components
import Layout from "@/components/Layout/Layout";
import Hero from "@/components/Hero/Hero";
import MapContainer from "@/components/MapContainer/MapContainer";

const Local1 = ({ selectedTheme, toggleTheme }) => {
  return (
    <>
      <Head>
        <title>Sol y Luna - Alcanfores</title>
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
            title={"SOL Y LUNA ALCANFORES"}
            subtitle={`📍 Periférico Norte Poniente #40, Los Alcanfores 967.146.7419`}
            image="/assets/images/sol-y-luna-alcanfores-min.jpg"
          />
          <MapContainer
            selectedTheme={selectedTheme}
            title={"SOL Y LUNA ALCANFORES"}
            longLat={[-92.6616916687117, 16.739256938965195]}
          />
        </main>
      </Layout>
    </>
  );
};
export default Local1;
