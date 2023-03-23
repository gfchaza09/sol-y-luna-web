import Link from "next/link";
import Image from "next/image";
import { ButtonBase, Container, Typography } from "@mui/material";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import { useEffect, useState } from "react";
import {
  MotionValue,
  useMotionValue,
  useTransform,
  motion,
} from "framer-motion";

const Hero = ({ title, image, subtitle, text, buttonText }) => {
  const [width, setWidth] = useWindowWidth();

  // const [parallaxActivado, setParallaxActivado] = useState(false);
  // const scrollY = useMotionValue(0);

  // useEffect(() => {
  //   const actualizarScrollY = () => {
  //     scrollY.set(window.scrollY);
  //   };
  //   window.addEventListener("scroll", actualizarScrollY);
  //   return () => {
  //     window.removeEventListener("scroll", actualizarScrollY);
  //   };
  // }, [scrollY]);

  // const parallaxPosicion = useTransform(
  //   scrollY,
  //   [0, window.innerHeight],
  //   [0, -window.innerHeight * 0.5]
  // );

    const scrollDown = () => {
      window.scrollTo({
        top: window.innerHeight - 75,
        behavior: 'smooth',
      })
    }

  return (
    <Container
      component="section"
      sx={{
        width: "100vw",
        maxWidth: "100%",
        height: "100vh",
        position: "relative",
        padding: "0px",
      }}
    >
      <Image
        src={image}
        alt="hero"
        fill
        style={{
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          filter: "brightness(60%)",
          objectFit: "cover",
          // transform: parallaxActivado
          //   ? `translateY(${parallaxPosicion}px)`
          //   : "none",
          // transition: "transform 0.2s ease-out",
        }}
        priority={true}
        sizes="100vw"
      />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          justifyContent: { mobile: "flex-start", tablet: "center" },
          alignItems: {
            mobile: "center",
            tablet: `${buttonText ? "flex-start" : "center"}`,
          },
          color: "#FFFFFF",
          position: "absolute",
          top: "0",
          left: "0",
          bottom: "0",
          right: "0",
          textAlign: {mobile: "center",tablet: `${buttonText ? "left" : "center"}`},
          margin: { mobile: "220px auto", tablet: "0px auto" },
          padding: {
            mobile: "20px",
            tablet: `${buttonText ? "50px" : "16px"}`,
            tablet2: `${buttonText ? "100px" : "16px"}`,
          },
        }}
      >
        <Typography
          component="h1"
          variant={width >= 640 ? "h1" : "h2"}
          sx={{ marginBottom: `${buttonText ? "30px" : "12px"}` }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography
            component="h2"
            variant="h4"
            sx={{
              display: {
                mobile: `${buttonText ? "block" : "none"}`,
                tablet: "block",
              },
              marginBottom: "30px",
            }}
          >
            {subtitle}
          </Typography>
        )}
        {text && (
          <Typography
            component="h2"
            sx={{
              display: {
                mobile: `${buttonText ? "block" : "none"}`,
                tablet: "block",
              },
              marginBottom: "30px",
              fontSize: { mobile: 22, tablet: 25 },
              fontWeight: 500,
              lineHeight: { mobile: "25px", tablet: "30px" },
            }}
          >
            {text}
          </Typography>
        )}
        {buttonText && (
          <ButtonBase
            sx={{
              maxWidth: "190px",
              width: "100%",
              height: "48px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "12px",
              border: "2px solid #FFF",
              color: "#FFF",
              fontWeight: 500,
              fontSize: 16,
              lineHeight: "20px",
              marginTop: { mobile: "40px", tablet: "0px" },
              padding: "20px 12px",
              transition: "all .2s linear",
              ":hover": {
                backgroundColor: "#FFFFFF22",
              },
            }}
          >
            <Link
              href="/nosotros"
              style={{
                fontSize: "inherit",
                fontWeight: "inherit",
                color: "inherit",
                lineHeight: "inherit",
              }}
            >
              {buttonText}
            </Link>
          </ButtonBase>
        )}
      </Container>
      <Container
        sx={{
          width: "100%",
          position: "absolute",
          bottom: "10px",
          zIndex: 100,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <motion.button
          className="button-standard"
          onClick={scrollDown}
          title="Scroll"
          aria-label="Scroll"
          aria-labelledby="scroll"
        >
          {/* {parallaxActivado ? "Desactivar" : "Activar"} */}
          <ChevronDownIcon width={50} height={50} color="#FFFFFF" />
        </motion.button>
      </Container>
    </Container>
  );
};

export default Hero;
