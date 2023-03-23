import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Typography } from "@mui/material";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
// Components
import Layout from "@/components/Layout/Layout";
import Hero from "@/components/Hero/Hero";
import ServiceCard from "@/components/Cards/ServiceCard/ServiceCard";
import {
  SwiperButtonNext,
  SwiperButtonPrev,
} from "@/components/SwiperButton/SwiperButton";

import data from "../../../public/json/cards.json";

const Services = ({ selectedTheme, toggleTheme }) => {
  return (
    <>
      <Head>
        <title>Sol y Luna Restaurante - Servicios</title>
        <meta
          name="description"
          content="Sol y Luna ofrece varios servicios que nos ayudan a adaptarnos a nuestros clientes. Algunos de ellos se encuentran disponibles en todas nuestras sucursales, mientras que otros solo se pueden encontrar en la sucursal de Alcanfores."
          key="desc"
        />
        <meta
          name="keywords"
          content="RESTAURANTE, COMIDA, MÉXICO, SAN, CRISTOBAL, CASAS, SOL, LUNA, SERVICIOS, MENÚ, COMER, JUEGOS, INFANTIL, COMIDA, ENTRETENIMIENTO, ALCANFORES, CENTRO, BOULEVARD, ESTACIONAMIENTO, SALON, EVENTOS, DELIVERY, TAKE, AWAY, PROMOCIONES, DESCUENTOS, CUMPLEAÑOS"
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
                padding: "20px",
                marginBottom: { mobile: "132px", tablet: "165px" },
              }}
            >
              <Swiper
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 200,
                    centeredSlides: true,
                    centeredSlidesBounds: true,
                    loop: true,
                  },
                  1400: {
                    slidesPerView: 2,
                    spaceBetween: 150,
                    centeredSlides: true,
                    centeredSlidesBounds: true,
                    loop: true,
                    loopedSlides: 2,
                  },
                }}
                spaceBetween={0}
                slidesPerView={1}
                centeredSlides={true}
                centeredSlidesBounds={true}
                loop={true}
                loopedSlides={1}
              >
                {data.servicios.map((servicio, index) => (
                  <SwiperSlide key={index}>
                    <ServiceCard data={servicio} />
                  </SwiperSlide>
                ))}
                <Container
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: { mobile: "20px", tablet: "60px" },
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
        </main>
      </Layout>
    </>
  );
};

export default Services;
