import { useRef } from "react";
import Head from "next/head";
// Components
import Layout from "@/components/Layout/Layout";
import Hero from "@/components/Hero/Hero";
import { Container, Typography } from "@mui/material";
import Slider from "react-slick";
import ServiceCard from "@/components/Cards/ServiceCard/ServiceCard";
import ButtonComponent from "@/components/Button/ButtonComponent";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

const Services = ({ selectedTheme, toggleTheme }) => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 820,
        settings: {
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Sol y Luna - Servicios</title>
        <meta
          name="description"
          content="Sitio web del restaurant Sol y Luna"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout selectedTheme={selectedTheme} toggleTheme={toggleTheme}>
        <main>
          <Hero title="SERVICIOS" image="/assets/images/services-header.jpg" />
          <Container component="section" sx={{ padding: "0px" }}>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: { mobile: 17, tablet: 18 },
                lineHeight: "25px",
                textAlign: "center",
                margin: { mobile: "40px 0px", tablet: "92px 0px" },
                padding: {
                  mobile: "0px 20px",
                  mobile2: "0px 40px",
                  tablet: "0px 60px",
                  tablet2: "0px 100px",
                },
              }}
            >
              Sol y Luna ofrece varios servicios que nos ayudan a adaptarnos a
              nuestros clientes. Algunos de ellos se encuentran disponibles en
              todas nuestras sucursales, mientras que otros solo se pueden
              encontrar en la sucursal de Alcanfores.
            </Typography>
            <Container
              sx={{
                padding: { mobile: "20px", tablet2: "0px" },
                marginBottom: "165px",
              }}
            >
              <Slider {...settings} ref={sliderRef}>
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
              </Slider>
              <Container
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "60px",
                  padding: { mobile: "0px 30px", tablet2: "0px 100px" },
                }}
              >
                <ButtonComponent
                  icon
                  onClick={() => sliderRef.current.slickPrev()}
                >
                  <ArrowLeftIcon width={30} />
                </ButtonComponent>
                <ButtonComponent
                  icon
                  onClick={() => sliderRef.current.slickNext()}
                >
                  <ArrowRightIcon width={30} />
                </ButtonComponent>
              </Container>
            </Container>
          </Container>
        </main>
      </Layout>
    </>
  );
};

export default Services;
