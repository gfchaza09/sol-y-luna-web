import Head from "next/head";

// Components
import Layout from "@/components/Layout/Layout";
import Hero from "@/components/Hero/Hero";
import MapContainer from "@/components/MapContainer/MapContainer";
import GalleryContainer from "@/components/GalleryContainer/GalleryContainer";

const Local1 = ({ selectedTheme, toggleTheme }) => {
  const itemData = [
    {
      img: "/assets/images/galeries/galeria-alcanfores-1-min.png",
      title: "Jaguar",
      rows: 2,
      cols: 1,
    },
    {
      img: "/assets/images/galeries/galeria-alcanfores-3-min.jpg",
      title: "Restaurante",
    },
    {
      img: "/assets/images/galeries/galeria-alcanfores-4-min.jpg",
      title: "Salón",
    },
    {
      img: "/assets/images/galeries/galeria-alcanfores-2-min.jpg",
      title: "Restaurante",
      rows: 1,
      cols: 2,
    },
  ];

  return (
    <>
      <Head>
        <title>Sol y Luna - Alcanfores</title>
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
            title={"SOL Y LUNA ALCANFORES"}
            subtitle={`📍 Periférico Norte Poniente #40, Los Alcanfores 967.146.7419`}
            image="/assets/images/sol-y-luna-alcanfores-min.jpg"
          />
          <MapContainer
            selectedTheme={selectedTheme}
            title={"SOL Y LUNA ALCANFORES"}
            longLat={[-92.6616916687117, 16.739256938965195]}
            linkLocation={
              "https://maps.google.com/maps/dir//Restaurante+Sol+y+Luna+Perif.+Nte.+Pte.+40+Los+Alcanfores+29246+San+Crist%C3%B3bal+de+las+Casas,+Chis.,+M%C3%A9xico/@16.7392455,-92.6616912,21z/data=!4m5!4m4!1m0!1m2!1m1!1s0x85ed45a659eb7955:0x9b3202f796b09ad7"
            }
          />
          <GalleryContainer itemData={itemData} />
        </main>
      </Layout>
    </>
  );
};
export default Local1;
