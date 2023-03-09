import Head from "next/head";
// Components
import Layout from "@/components/Layout/Layout";
import Hero from "@/components/Hero/Hero";

const Local3 = ({ selectedTheme, toggleTheme }) => {
  return (
    <>
      <Head>
        <title>Sol y Luna - Boulevard</title>
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
            title={"SOL Y LUNA BOULEVARD"}
            subtitle={`📍 Carretera Panamericana #1118, Boulevard 967.129.1668`}
            image="/assets/images/sol-y-luna-boulevard-min.jpg"
          />
        </main>
      </Layout>
    </>
  );
};

export default Local3;
