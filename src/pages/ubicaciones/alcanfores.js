import Head from "next/head";
import Link from "next/link";
// Components
import Layout from "@/components/Layout/Layout";

const Local1 = ({ selectedTheme, toggleTheme }) => {
  return (
    <>
      <Head>
        <title>Sol y Luna - Local1</title>
        <meta
          name="description"
          content="Sitio web del restaurant Sol y Luna"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout selectedTheme={selectedTheme} toggleTheme={toggleTheme}>
        <main style={{ minHeight: "100vh" }}>
          <Link href="/location">Atrás</Link>
        </main>
      </Layout>
    </>
  );
};

export default Local1;
