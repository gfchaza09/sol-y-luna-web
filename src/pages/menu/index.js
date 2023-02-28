import Head from "next/head";
import Link from "next/link";
// Components
import Layout from "@/components/Layout/Layout";

const Menu = () => {
  return (
    <>
      <Head>
        <title>Sol y Luna - Menu</title>
        <meta
          name="description"
          content="Sitio web del restaurant Sol y Luna"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main style={{ minHeight: "100vh" }}>
          <Link href="/">Home</Link>
        </main>
      </Layout>
    </>
  );
};

export default Menu;
