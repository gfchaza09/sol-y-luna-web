import Head from "next/head";
import Link from "next/link";
// Components

const Local1 = () => {
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
      <main style={{ minHeight: "100vh" }}>
        <Link href="/location">Atrás</Link>
      </main>
    </>
  );
};

export default Local1;
