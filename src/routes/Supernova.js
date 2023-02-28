import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import planetaMini from "../assets/planetaMini.png";
import asisejuegabang from "../assets/asisejuegabang.png";
import "./supernova.css";
import { history } from "../components/History";

export default function Supernova() {
  const onClickHandler = () => {
    history.push("/Home");
  };
  return (
    <section className="grid min-h-screen bg-gradient-to-r from-indigo-900 via-fuchsia-900 to-indigo-900">
      <div className="absolute top-10 left-5 sm:top-10 sm:left-20 hover:scale-125">
        <button>
          <img
            src={planetaMini}
            onClick={onClickHandler}
            alt="image1"
            className="h-[40px] sm:h-[50px]"
          />
          <h1 className="font-bold pt-1 text-white">Inicio</h1>
        </button>
      </div>

      <div className="gallery">
        <Swiper
          autoHeight={true}
          navigation={true}
          modules={[Navigation]}
          className="Swipersito animate__animated animate__fadeIn"
        >
          <SwiperSlide>
            <iframe
              src="https://player.vimeo.com/video/764601921?h=001958c483&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="w-full aspect-video"
            ></iframe>
          </SwiperSlide>
          <SwiperSlide>
            <iframe
              src="https://player.vimeo.com/video/764600845?h=d77fcb0dc3&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="w-full aspect-video"
              title="Capacitaci&amp;oacute;n_BANG_Parte_2_Editado"
            ></iframe>
          </SwiperSlide>
          <SwiperSlide>
            <iframe
              src="https://player.vimeo.com/video/764603812?h=a5f02fc291&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="w-full h-full aspect-video"
              title="Capacitaci&amp;oacute;n_BANG_Parte_2_Editado"
            ></iframe>
          </SwiperSlide>
          <SwiperSlide>
            <iframe
              src="https://player.vimeo.com/video/764597236?h=0e9b6132e9&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="w-full h-full aspect-video"
              title="Capacitaci&amp;oacute;n_BANG_Parte_2_Editado"
            ></iframe>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
