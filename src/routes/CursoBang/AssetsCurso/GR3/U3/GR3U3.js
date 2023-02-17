import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "../../../estiloSwiper.css";
import "../../GR0/U3/estiloModalU3.css";
import Slide1 from "./Slide1.jpg";
import Slide3 from "./Slide3.jpg";

const GR3U3 = () => {
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
          <iframe
            className="w-full aspect-video"
            src="https://player.vimeo.com/video/799721960?h=a8fae116a6&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="VIDEO M4 U3"
          ></iframe>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide3} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default GR3U3;
