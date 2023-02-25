import Head from "next/head";
import Link from "next/link";
// Components
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";

const Services = () => {
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
      <NavBar />
      <main style={{ minHeight: "100vh" }}>
        <Link href="/">Home</Link>
      </main>
      <Footer />
    </>
  );
};

export default Services;
