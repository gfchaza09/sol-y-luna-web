import Head from "next/head";
import Link from "next/link";
// NextUI
import { CssBaseline } from "@nextui-org/react";
// Components
import ModalComponent from "@/components/Modal/ModalComponent";
import NavBar from "@/components/NavBar/NavBar";

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
        {CssBaseline.flush()}
      </Head>
      <NavBar/>
      {/* <main style={{ minHeight: "100vh" }}>
        <ModalComponent />
        <Link href="/menu">Menu</Link>
        <Link href="/about">Nosotros</Link>
        <Link href="/location">Ubicación</Link>
        <Link href="/services">Servicios</Link>
      </main> */}
    </>
  );
};

export default Home;
