import Head from "next/head";
// Components
import Layout from "@/components/Layout/Layout";
import EmployeeCard from "@/components/Cards/EmployeeCard/EmployeeCard";
import ServiceCard from "@/components/Cards/ServiceCard/ServiceCard";
import ReviewCard from "@/components/Cards/ReviewCard/ReviewCard";
import LocalCard from "@/components/Cards/LocalCard/LocalCard";
import Hero from "@/components/Hero/Hero";

const About = ({ selectedTheme, toggleTheme }) => {
  return (
    <>
      <Head>
        <title>Sol y Luna - Nosotros</title>
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
            title="NOSOTROS"
            image="/assets/images/imagen-nosotros-min.jpg"
          />
          {/* <EmployeeCard />
          <ReviewCard />
          <ServiceCard /> */}
        </main>
      </Layout>
    </>
  );
};

export default About;
