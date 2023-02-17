import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "../../../estiloSwiper.css";
import "../../GR0/U3/estiloModalU3.css";
import Slide1 from "./Slide1.jpg";
import Slide2 from "./Slide2.jpg";
import Slide3 from "./Slide3.jpg";
import Slide4 from "./Slide4.jpg";

const GR4U3 = () => {
  return (
    <>
      <Swiper
        autoHeight={true}
        navigation={true}
        modules={[Navigation]}
        className="Swipersito animate__animated animate__fadeIn"
      >
        <SwiperSlide>
          <img src={Slide1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide4} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default GR4U3;
