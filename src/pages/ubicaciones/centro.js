import Head from "next/head";
// Components
import Layout from "@/components/Layout/Layout";
import Hero from "@/components/Hero/Hero";

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
      </Layout>
    </>
  );
};

export default Local2;
