import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
// NextUI
import { CssBaseline } from "@nextui-org/react";
import Button from "@nextui-org/react/button";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sol y Luna - MatuDev</title>
        <meta
          name="description"
          content="Sitio web del restaurant Sol y Luna"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {CssBaseline.flush()}
      </Head>
      <main>
        <Button>Sol y luna</Button>
      </main>
    </>
  );
}
