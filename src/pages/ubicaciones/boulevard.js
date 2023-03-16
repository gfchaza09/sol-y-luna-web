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
            linkLocation={
              "https://maps.google.com/maps/dir//Sol+Y+Luna+Boulevard+29250,+de+las+Americas+5+San+Antonio+29250+San+Crist%C3%B3bal+de+las+Casas,+Chis.,+M%C3%A9xico/@16.7307433,-92.6409202,20z/data=!4m5!4m4!1m0!1m2!1m1!1s0x85ed4515295d2a9b:0x9fbba272896e9985"
            }
            tel={"+529671291668"}
          />
          <GalleryContainer itemData={itemData} />
        </main>
      </Layout>
    </>
  );
};

export default Local3;
