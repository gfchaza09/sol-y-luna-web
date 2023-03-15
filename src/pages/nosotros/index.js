import { useRef } from "react";
import Slider from "react-slick";
import Head from "next/head";
import Image from "next/image";
import { Container, Typography } from "@mui/material";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
// Components
import Layout from "@/components/Layout/Layout";
import EmployeeCard from "@/components/Cards/EmployeeCard/EmployeeCard";
import Hero from "@/components/Hero/Hero";
import ButtonComponent from "@/components/Button/ButtonComponent";
import { useWindowWidth } from "@/hooks/useWindowWidth";

import data from "../../../public/json/cards.json";

const About = ({ selectedTheme, toggleTheme }) => {
  const [width, setWidth] = useWindowWidth();

  const sliderRef = useRef();

  const settings = {
    className: "center",
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "0px",
        },
      },
    ],
  };
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
        </main>
        <Container
          component="section"
          sx={{
            padding: { mobile: "0px 20px", tablet: "140px 80px" },
            marginBottom: "122px",
            marginTop: { mobile: "0px", tablet: "10px" },
            maxWidth: "1640px",
          }}
        >
          <Typography
            component="h2"
            variant="h5"
            sx={{
              textAlign: "center",
              marginTop: "50px",
              marginBottom: "24px",
              display: { mobile: "block", tablet: "none" },
            }}
          >
            SOBRE NOSOTROS
          </Typography>
          <Container
            sx={{
              padding: "0px",
              display: { mobile: "block", tablet: "flex" },
              justifyContent: "center",
              alignItems: "center",
              gap: "95px",
            }}
          >
            <Container
              sx={{
                padding: "0px",
                width: "100%",
                height: { mobile: "250px", tablet: "500px" },
                position: "relative",
                overflow: "hidden",
                borderRadius: "6px",
              }}
            >
              <Image
                src="/assets/images/delivery.jpg"
                alt="nosotros"
                fill
                sizes="100vh"
                style={{ objectFit: "cover" }}
              />
            </Container>

            <Container
              sx={{
                width: { mobile: "100%", tablet: "50%" },
                padding: "0px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                marginTop: { mobile: "24px", tablet: "0px" },
              }}
            >
              <Typography
                component="h2"
                variant="h2"
                sx={{ display: { mobile: "none", tablet: "block" } }}
              >
                SOBRE NOSOTROS
              </Typography>
              <Typography
                sx={{
                  fontSize: { mobile: 16, tablet: 17 },
                  fontWeight: { mobile: 400, tablet: 500 },
                  lineHeight: { mobile: "20px", tablet: "25px" },
                }}
              >
                Creemos que la hora de la comida es sagrada, ya que es cuando
                nutres lo más importante que tienes: a ti mismo. Además, nutres
                el alma cuando compartes estos alimentos con tus seres queridos.
              </Typography>
              <Typography
                sx={{
                  fontSize: { mobile: 16, tablet: 17 },
                  fontWeight: { mobile: 400, tablet: 500 },
                  lineHeight: { mobile: "20px", tablet: "25px" },
                }}
              >
                Es por ello que en Sol y Luna restaurante buscamos crear un
                ambiente cómodo para ti, tu familia y amigos, además de crear
                alimentos con un increíble sabor y mucha variedad.
              </Typography>
              <Typography
                sx={{
                  fontSize: { mobile: 16, tablet: 17 },
                  fontWeight: { mobile: 400, tablet: 500 },
                  lineHeight: { mobile: "20px", tablet: "25px" },
                }}
              >
                Contamos no sólo con cocina de alimentos salados, sino también
                con un área de respostería, para poder brindarte pan fresco y
                postres deliciosos, asegurándonos que están hechos con la mejor
                calidad.
              </Typography>
            </Container>
          </Container>
        </Container>
        <Container
          component="section"
          sx={{ padding: "8px", marginBottom: "140px" }}
        >
          <Typography
            component="h2"
            variant={width > 640 ? "h2" : "h5"}
            sx={{
              paddingLeft: { mobile: "0px", tablet: "100px" },
              marginBottom: "32px",
              textAlign: { mobile: "center", tablet: "left" },
            }}
          >
            NUESTROS COLABORADORES
          </Typography>
          <Slider {...settings} ref={sliderRef}>
            {data.empleados.map((empleado) => (
              <EmployeeCard key={empleado.id} data={empleado} />
            ))}
          </Slider>
          <Container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: { mobile: "20px", tablet: "60px" },
              padding: { mobile: "0px 30px", tablet2: "0px 100px" },
            }}
          >
            <ButtonComponent icon onClick={() => sliderRef.current.slickPrev()}>
              <ArrowLeftIcon width={30} />
            </ButtonComponent>
            <ButtonComponent icon onClick={() => sliderRef.current.slickNext()}>
              <ArrowRightIcon width={30} />
            </ButtonComponent>
          </Container>
        </Container>
      </Layout>
    </>
  );
};

export default About;
