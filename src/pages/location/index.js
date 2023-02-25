import Head from "next/head";
import Link from "next/link";
// Components
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";

const Location = () => {
  return (
    <>
      <Head>
        <title>Sol y Luna - Ubicaciones</title>
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
        <Link href="/location/local1">Local1</Link>
        <Link href="/location/local2">Local2</Link>
        <Link href="/location/local3">Local3</Link>
      </main>
      <Footer />
    </>
  );
};

export default Location;
