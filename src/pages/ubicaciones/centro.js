import Head from "next/head";
// Components
import Layout from "@/components/Layout/Layout";
import Hero from "@/components/Hero/Hero";
import MapContainer from "@/components/MapContainer/MapContainer";
import GalleryContainer from "@/components/GalleryContainer/GalleryContainer";

const Local2 = ({ selectedTheme, toggleTheme }) => {
  const itemData = [
    {
      img: "/assets/images/galeries/galeria-centro-1-min.png",
      title: "Búho",
      rows: 2,
      cols: 1,
    },
    {
      img: "/assets/images/galeries/galeria-centro-3-min.jpg",
      title: "Cocina",
    },
    {
      img: "/assets/images/galeries/galeria-centro-4-min.jpg",
      title: "Salon niños",
    },
    {
      img: "/assets/images/galeries/galeria-centro-2-min.jpg",
      title: "Restaurante",
      rows: 1,
      cols: 2,
    },
  ];

  return (
    <>
      <Head>
        <title>Sol y Luna Restaurante - Centro</title>
        <meta
          name="description"
          content="La sucursal Centro de Sol y Luna es un restaurante que ofrece una experiencia culinaria única y memorable para todos sus visitantes."
          key="desc"
        />
        <meta
          name="keywords"
          content="RESTAURANTE, COMIDA, MÉXICO, SOL, LUNA, MENÚ, COMER, CENTRO, MAPA, EXPERIENCIA, MODERNO, ACOGEDOR, ELEGANTE, FUSIÓN, COMIDA, COCINA, TACOS, QUESADILLAS, CEVICHES, CARNE, PESCADO, MENÚ, MEXICANA, LATINOAMERICANA"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout selectedTheme={selectedTheme} toggleTheme={toggleTheme}>
        <main>
          <Hero
            title={"SOL Y LUNA CENTRO"}
            subtitle={`📍 Calle Belisario Domínguez # 2a, Zona Centro 967.145.2802`}
            image="/assets/images/sol-y-luna-centro-min.jpg"
          />
        </main>
        <MapContainer
          selectedTheme={selectedTheme}
          title={"SOL Y LUNA CENTRO"}
          longLat={[-92.63567871594242, 16.73693712378187]}
          linkLocation={
            "https://maps.google.com/maps/dir//Sol+y+Luna+Centro+Francisco+I.+Madero+6+Zona+Centro+29200+San+Crist%C3%B3bal+de+las+Casas,+Chis.,+M%C3%A9xico/@16.7368929,-92.6356795,19z/data=!4m5!4m4!1m0!1m2!1m1!1s0x85ed453e6fca5f99:0x3aad373d953831f1"
          }
          tel={"+529671452802"}
          text1="La sucursal Centro de Sol y Luna es un restaurante que ofrece una experiencia culinaria única y memorable para todos sus visitantes."
          text2="Ubicado en el centro de la ciudad, el restaurante cuenta con un ambiente moderno y acogedor, decorado con detalles naturales y elegantes."
          text3="La cocina es una fusión de sabores, con una variedad de platos inspirados en la cocina mexicana y latinoamericana. Desde tacos y quesadillas hasta ceviches y platos de carne y pescado, el menú ofrece una amplia gama de opciones para satisfacer cualquier paladar."
        />
        <GalleryContainer itemData={itemData} />
      </Layout>
    </>
  );
};

export default Local2;
