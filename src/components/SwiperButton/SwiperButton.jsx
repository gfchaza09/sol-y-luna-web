import { useSwiper } from "swiper/react";
import ButtonComponent from "../Button/ButtonComponent";

export const SwiperButtonNext = ({ children }) => {
    const swiper = useSwiper();
    return (
      <ButtonComponent icon onClick={() => swiper.slideNext()}>
        {children}
      </ButtonComponent>
    );
  };

  export const SwiperButtonPrev = ({ children }) => {
    const swiper = useSwiper();
    return (
      <ButtonComponent icon onClick={() => swiper.slidePrev()}>
        {children}
      </ButtonComponent>
    );
  };