import React from "react";
import img1 from "../../ass/narzedzia-rzemieslnicze-na-stole.jpg";
import img2 from "../../ass/widok-z-gory-tlo-miejsca-pracy-krawiec-z-tkaniny.jpg";
import "../slider/index.css";

const Slider = () => {
  return (
    <>
      <div id="slider">
        <figure>
          <img src={img1.src} alt="foto_1" />
          <img src={img2.src} alt="foto_1" />
          <img src={img1.src} alt="foto_1" />
          <img src={img1.src} alt="foto_1" />
          <img src={img1.src} alt="foto_1" />
        </figure>
      </div>
    </>
  );
};

export default Slider;
