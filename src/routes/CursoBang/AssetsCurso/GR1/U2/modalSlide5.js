import React from "react";
import persoCarmel from "./Personalidades/persoCarmel.png";
import persoCesia from "./Personalidades/persoCesia.png";
import persoCori from "./Personalidades/persoCori.png";
import persoCrispi from "./Personalidades/persoCrispi.png";
import persoCristal from "./Personalidades/persoCristal.png";
import "../../GR0/U3/estiloModalU3.css";
import cerrar from "../../../../../../src/assets/cerrar.png";

const modalSlidePersonajes = ({ propModal2, open, onClose }) => {
  if (!open) return null;

  const modalImagenes = [
    persoCarmel,
    persoCesia,
    persoCori,
    persoCrispi,
    persoCristal,
  ];
  let selected_image = modalImagenes[propModal2];

  return (
    <div className="overlay z-20 ">
      <div className="modalContainer">
        <img
          src={selected_image}
          className="animate__animated animate__bounceIn"
        />
      </div>
      <div
        onClick={onClose}
        className="closeBtn w-[40px] h-[40px] cursor-pointer hover:scale-125"
      >
        <img src={cerrar} className="" />
      </div>
    </div>
  );
};

export default modalSlidePersonajes;
