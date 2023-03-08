import Head from "next/head";
import Link from "next/link";
// Components
import Layout from "@/components/Layout/Layout";
import Carrusel from "@/components/Slider/Slider";
import { useScroll, useTransform,motion } from "framer-motion";
import Image from "next/image";

const Menu = ({ selectedTheme, toggleTheme }) => {
  let { scrollYProgress} =useScroll()
  let y = useTransform(scrollYProgress, [0,1], ["0%","100%"])



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
      <Layout selectedTheme={selectedTheme} toggleTheme={toggleTheme}>
        <main style={{ minHeight: "100vh" }}>
          <Link href="/">Home</Link>
        </main>
        
        
        <Carrusel />
      </Layout>
    </>
  );
};

export default Menu;
