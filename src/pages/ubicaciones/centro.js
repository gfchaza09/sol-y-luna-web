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
        <title>Sol y Luna - Centro</title>
        <meta
          name="description"
          content="Sitio web del restaurant Sol y Luna"
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
        />
        <GalleryContainer itemData={itemData} />
      </Layout>
    </>
  );
};

export default Local2;
