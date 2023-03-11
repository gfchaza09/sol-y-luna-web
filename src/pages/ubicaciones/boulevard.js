import Head from "next/head";
// Components
import Layout from "@/components/Layout/Layout";
import Hero from "@/components/Hero/Hero";
import MapContainer from "@/components/MapContainer/MapContainer";
import GalleryContainer from "@/components/GalleryContainer/GalleryContainer";

const Local3 = ({ selectedTheme, toggleTheme }) => {
  const itemData = [
    {
      img: "/assets/images/galeries/galeria-boulevard-1-min.png",
      title: "Muñeca",
      rows: 2,
      cols: 1,
    },
    {
      img: "/assets/images/galeries/galeria-boulevard-3-min.jpg",
      title: "Restaurante",
    },
    {
      img: "/assets/images/galeries/galeria-boulevard-4-min.jpg",
      title: "Cocina",
    },
    {
      img: "/assets/images/galeries/galeria-boulevard-2-min.jpg",
      title: "Restaurante",
      rows: 1,
      cols: 2,
    },
  ];

  return (
    <>
      <Head>
        <title>Sol y Luna - Boulevard</title>
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
            title={"SOL Y LUNA BOULEVARD"}
            subtitle={`📍 Carretera Panamericana #1118, Boulevard 967.129.1668`}
            image="/assets/images/sol-y-luna-boulevard-min.jpg"
          />
          <MapContainer
            selectedTheme={selectedTheme}
            title={"SOL Y LUNA BOULEVARD"}
            longLat={[-92.64092288220887, 16.73076706016034]}
          />
          <GalleryContainer itemData={itemData} />
        </main>
      </Layout>
    </>
  );
};

export default Local3;
