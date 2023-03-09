import Head from "next/head";
import Link from "next/link";
// Components
import Layout from "@/components/Layout/Layout";
import Hero from "@/components/Hero/Hero";

const Services = ({ selectedTheme, toggleTheme }) => {
  return (
    <>
      <Head>
        <title>Sol y Luna - Servicios</title>
        <meta
          name="description"
          content="Sitio web del restaurant Sol y Luna"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout selectedTheme={selectedTheme} toggleTheme={toggleTheme}>
        <Hero title="SERVICIOS" image="/assets/images/services-header.jpg"/>
        <main style={{ minHeight: "100vh" }}>
          <Link href="/">Home</Link>
        </main>
      </Layout>
    </>
  );
};

export default Services;
