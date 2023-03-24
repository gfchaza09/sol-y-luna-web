import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Typography } from "@mui/material";
import ReviewCard from "../Cards/ReviewCard/ReviewCard";

import data from "../../../public/json/cards.json";
import { useWindowWidth } from "@/hooks/useWindowWidth";

const HomeReviews = () => {
  const [width, setWidth] = useWindowWidth();

  return (
    <Container
      component="section"
      sx={{
        padding: { mobile: "20px", tablet: "0px" },
        marginBottom: { mobile: "70px", tablet: "200px" },
      }}
    >
      <Typography
        component="h2"
        variant={width > 768 ? "h2" :  width > 480 ? "h3" : "h5"}
        sx={{
          marginLeft: { mobile: "0px", tablet2: "50px" },
          marginBottom: { mobile: "40px", tablet: "70px" },
          textAlign: { mobile: "center", tablet2: "left" },
        }}
      >
        OPINIONES DE COMENSALES
      </Typography>
      <Container sx={{ padding: "0px" }}>
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 1.5,
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
          slidesPerView={1}
          spaceBetween={0}
          centeredSlides={true}
          centeredSlidesBounds={true}
          loop={true}
          loopedSlides={1}
        >
          {data.reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <ReviewCard data={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Container>
  );
};

export default HomeReviews;
