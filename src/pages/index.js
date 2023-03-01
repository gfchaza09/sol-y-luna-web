import Head from "next/head";
import GridLayout from "@/components/GridLayout/GridLayout";

// Components
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";


const Home = () => {
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
      <NavBar />
      <GridLayout >
        <main>Contenido</main>
      </GridLayout>
      <Footer />
    </>
  );
};

export default Home;
