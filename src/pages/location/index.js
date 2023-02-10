import Head from "next/head";
import Link from "next/link";
// NextUI
import { CssBaseline } from "@nextui-org/react";
// Components
import ModalComponent from "@/components/Modal/ModalComponent";

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
        {CssBaseline.flush()}
      </Head>
      <main style={{ minHeight: "100vh" }}>
        <ModalComponent />
        <Link href="/">Home</Link>
        <Link href="/location/local1">Local1</Link>
        <Link href="/location/local2">Local2</Link>
        <Link href="/location/local3">Local3</Link>
      </main>
    </>
  );
};

export default Location;
