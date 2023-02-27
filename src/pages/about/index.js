import Head from "next/head";
// Components
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import EmployeeCard from "@/components/Cards/EmployeeCard/EmployeeCard";
import ServiceCard from "@/components/Cards/ServiceCard/ServiceCard";
import ReviewCard from "@/components/Cards/ReviewCard/ReviewCard";
import LocalCard from "@/components/Cards/LocalCard/LocalCard";

const About = () => {
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
      <NavBar />
      <main style={{ minHeight: "100vh", maxWidth: "1440px", width: "100%" }}>
        <EmployeeCard />
        <ReviewCard />
        <LocalCard />
        <ServiceCard />
      </main>
      <Footer />
    </>
  );
};

export default About;
