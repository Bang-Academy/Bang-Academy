import SwiperImg from "./swiperImg";
import cerrar from "../assets/cerrar.png";
import "../routes/CursoBang/AssetsCurso/GR0/U3/estiloModalU3.css"

const Modal = ({ setModalOn, setChoice, numeroSlide }) => {
  const handleOKClick = () => {
    setChoice(true);
    setModalOn(false);
  };

  return (
    
    
<div className="overlay z-20">
<div className="modalContainerConstelacion">
<SwiperImg numeroSlide={numeroSlide} />
</div>
<div
  onClick={handleOKClick}
  className="closeBtn2 w-[40px] h-[40px] cursor-pointer hover:scale-125"
>
  <img src={cerrar} className="" />
</div>
</div>
    
  );
};

export default Modal;
