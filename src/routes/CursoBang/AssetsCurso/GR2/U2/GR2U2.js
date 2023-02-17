import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Slide1 from "../U2/Slide1.png";
import Slide2 from "../U2/Slide2.png";
import Slide3 from "../U2/Slide3.png";
import Slide4 from "../U2/Slide4.png";
import Slide5 from "../U2/Slide5.png";
import Slide6 from "../U2/Slide6.png";
import Slide7 from "../U2/Slide7.png";
import Slide8 from "../U2/Slide8.png";
import Slide9 from "../U2/Slide9.png";
import Slide10 from "../U2/Slide10.png";
import Slide11 from "../U2/Slide11.png";
import Slide12 from "../U2/Slide12.png";
import "../../../estiloSwiper.css";
import "../../GR0/U3/estiloModalU3.css";
import boton from "./botonAbrir.png";

const GR2U2 = () => {
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

        <SwiperSlide className="relative">
          <img src={Slide3} />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img className="" src={Slide4} />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide5} />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <iframe
            className="w-full aspect-video"
            src="https://player.vimeo.com/video/797164755?h=1f206e3d11&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Gu&amp;iacute;as de innovaci&amp;oacute;n"
            id="videoAbsoluto"
          ></iframe>
          <img src={Slide6} />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide7} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide8} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide9} />
        </SwiperSlide>
        <SwiperSlide>
          <button
            id="boton1MGR2U2"
            className="z-[1] hover:w-2xl hover:scale-125"
          >
            <img src={boton} />
          </button>
          <button
            id="boton2MGR2U2"
            className="z-[1] hover:w-2xl hover:scale-125"
          >
            <img src={boton} />
          </button>
          <button
            id="boton3MGR2U2"
            className="z-[1] hover:w-2xl hover:scale-125"
          >
            <img src={boton} />
          </button>
          <button
            id="boton4MGR2U2"
            className="z-[1] hover:w-2xl hover:scale-125"
          >
            <img src={boton} />
          </button>
          <img src={Slide10} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide11} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide12} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default GR2U2;
