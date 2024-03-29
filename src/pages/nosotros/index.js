import Head from "next/head";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Typography } from "@mui/material";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
// Components
import Layout from "@/components/Layout/Layout";
import EmployeeCard from "@/components/Cards/EmployeeCard/EmployeeCard";
import Hero from "@/components/Hero/Hero";
import {
  SwiperButtonNext,
  SwiperButtonPrev,
} from "@/components/SwiperButton/SwiperButton";

import { useWindowWidth } from "@/hooks/useWindowWidth";
import data from "../../../public/json/cards.json";

const About = ({ selectedTheme, toggleTheme }) => {
  const [width, setWidth] = useWindowWidth();
  return (
    <>
      <Head>
        <title>Sol y Luna Restaurante - Nosotros</title>
        <meta
          name="description"
          content="En Sol y Luna creemos que la hora de la comida es sagrada, ya que es cuando nutres lo más importante que tienes: a ti mismo. Es por ello que en Sol y Luna restaurante buscamos crear un ambiente cómodo para ti, tu familia y amigos, además de crear alimentos con un increíble sabor y mucha variedad."
          key="desc"
        />
        <meta
          name="keywords"
          content="RESTAURANTE, COMIDA, MÉXICO, SOL, LUNA, MENÚ, COMER, NOSOTROS, FAMILIA, AMIGOS, CHEF, COCINA, PROFESIONAL, RESPONSABLE"
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
            padding: {
              mobile: "0px 20px",
              tablet: "30px 20px 0px",
              tablet2: "80px 80px",
              tablet3: "140px 80px",
            },
            marginBottom: "122px",
            marginTop: { mobile: "0px", tablet2: "10px" },
            maxWidth: "1640px",
          }}
        >
          <Typography
            component="h2"
            variant={width > 768 ? "h2" : width > 640 ? "h3" : "h5"}
            sx={{
              textAlign: "center",
              marginTop: { mobile: "50px", tablet3: "0px" },
              marginBottom: "24px",
              display: { mobile: "block", tablet3: "none" },
            }}
          >
            SOBRE NOSOTROS
          </Typography>
          <Container
            sx={{
              padding: "0px",
              display: { mobile: "block", tablet3: "flex" },
              justifyContent: "center",
              alignItems: "center",
              gap: "95px",
            }}
          >
            <Container
              sx={{
                padding: "0px",
                width: "100%",
                height: { mobile: "250px", tablet: "400px", tablet2: "500px" },
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
                width: { mobile: "100%", tablet3: "50%" },
                padding: "0px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                marginTop: { mobile: "24px", tablet3: "0px" },
              }}
            >
              <Typography
                component="h2"
                variant="h2"
                sx={{ display: { mobile: "none", tablet3: "block" } }}
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
                Bienvenidos al Restaurante Sol y Luna San Cristóbal, donde la
                deliciosa comida y el ambiente acogedor se unen para crear una
                experiencia gastronómica única.
              </Typography>
              <Typography
                sx={{
                  fontSize: { mobile: 16, tablet: 17 },
                  fontWeight: { mobile: 400, tablet: 500 },
                  lineHeight: { mobile: "20px", tablet: "25px" },
                }}
              >
                Utilizamos ingredientes frescos y de alta calidad para crear
                sabores auténticos que deleitarán su paladar. Contamos con un
                equipo de profesionales dedicados para asegurarnos de que cada
                visita sea memorable, ya sea para una cena romántica, una salida
                en familia o una reunión de negocios.
              </Typography>
              <Typography
                sx={{
                  fontSize: { mobile: 16, tablet: 17 },
                  fontWeight: { mobile: 400, tablet: 500 },
                  lineHeight: { mobile: "20px", tablet: "25px" },
                }}
              >
                Ofrecemos un ambiente cálido y acogedor que invita a nuestros
                clientes a relajarse y disfrutar de su comida. Gracias por
                elegirnos, ¡esperamos servirle pronto en nuestro restaurante!
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
            variant={width > 820 ? "h3" : width > 640 ? "h4" : "h5"}
            sx={{
              paddingLeft: { mobile: "0px", tablet2: "100px" },
              marginBottom: "32px",
              textAlign: { mobile: "center", tablet2: "left" },
            }}
          >
            NUESTROS COLABORADORES
          </Typography>
          <Container sx={{ padding: "0px" }}>
            <Swiper
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 120,
                  centeredSlides: true,
                  centeredSlidesBounds: true,
                  loop: true,
                  loopedSlides: 1,
                },
                950: {
                  slidesPerView: 2.5,
                  spaceBetween: 120,
                  centeredSlides: true,
                  centeredSlidesBounds: true,
                  loop: true,
                  loopedSlides: 2,
                },
                1440: {
                  slidesPerView: 3.5,
                  spaceBetween: 120,
                  centeredSlides: true,
                  centeredSlidesBounds: true,
                  loop: true,
                  loopedSlides: 2,
                },
                1900: {
                  slidesPerView: 4.5,
                  spaceBetween: 120,
                  centeredSlides: true,
                  centeredSlidesBounds: true,
                  loop: true,
                  loopedSlides: 2,
                },
              }}
              spaceBetween={0}
              centeredSlides={true}
              centeredSlidesBounds={true}
              loop={true}
              loopedSlides={1}
            >
              {data.empleados.map((empleado) => (
                <SwiperSlide key={empleado.id}>
                  <EmployeeCard data={empleado} />
                </SwiperSlide>
              ))}
              <Container
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                  padding: { mobile: "0px 30px", tablet2: "0px 100px" },
                }}
              >
                <SwiperButtonPrev>
                  <ArrowLeftIcon width={30} />
                </SwiperButtonPrev>
                <SwiperButtonNext>
                  <ArrowRightIcon width={30} />
                </SwiperButtonNext>
              </Container>
            </Swiper>
          </Container>
        </Container>
      </Layout>
    </>
  );
};

export default About;
