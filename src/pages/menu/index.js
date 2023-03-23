import Head from "next/head";
// Components
import Layout from "@/components/Layout/Layout";
import Hero from "@/components/Hero/Hero";
import MenuContainer from "@/components/MenuContainer/MenuContainer";

const Menu = ({ selectedTheme, toggleTheme }) => {
  return (
    <>
      <Head>
        <title>Sol y Luna Restaurante - Menú</title>
        <meta
          name="description"
          content="En el restaurante Sol y Luna variamos nuestros servicios y comidas dependiendo del público de nuestras sucursales. Contamos con 2 menús ¿Cuál quieres mirar?"
          key="desc"
        />
        <meta
          name="keywords"
          content="RESTAURANTE, COMIDA, MÉXICO, SOL, LUNA, MENÚ, COMER, AGUACHILE, CLERICOT, CHILE, CENTRO, ALCANFORES, BOULEVARD, DESAYUNOS, COMIDAS, BEBIDAS, POSTRES, INFANTIL, CALDOS, SOPAS, FAJITAS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout selectedTheme={selectedTheme} toggleTheme={toggleTheme}>
        <main>
          <Hero title="NUESTRO MENÚ" image="/assets/images/menu-header.jpg" />
          <MenuContainer />
        </main>
      </Layout>
    </>
  );
};

export default Menu;
