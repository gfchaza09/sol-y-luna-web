import Head from "next/head";
import Link from "next/link";
// NextUI
import { CssBaseline } from "@nextui-org/react";
// Components
import ModalComponent from "@/components/Modal/ModalComponent";

const Local2 = () => {
  return (
    <>
      <Head>
        <title>Sol y Luna - Local2</title>
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
        <Link href="/location">Atrás</Link>
      </main>
    </>
  );
};

export default Local2;
