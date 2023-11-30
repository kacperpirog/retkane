import React from "react";
import styles from "./slider.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";

interface Slide {
  id: number;
  numberPage: string;
  content: string;
  copy: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    numberPage: "01",
    content: "Miejsce 1",
    copy: "Lorem ipsum dolor sit amet, consectetur",
    image: require("../../ass/foto_1.png"),
  },
  {
    id: 2,
    numberPage: "02",
    content: "Miejsce 2",
    copy: "Lorem ipsum dolor sit amet, consectetur",
    image: require("../../ass/foto_2.png"),
  },
  {
    id: 3,
    numberPage: "03",
    content: "Miejsce 3",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    image: require("../../ass/foto_3.png"),
  },
];
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 20000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleExtraSlide = (id: number) => {
    setCurrentSlide(id - 1);
  };
  return (
    <div className={styles.container}>
      <div>
        <Image
          src={slides[currentSlide].image}
          alt={slides[currentSlide].content}
        />
        <div className={styles.div_slider}>
          <div className={styles.divCopy}>
            <h1>{slides[currentSlide].content}</h1>
            <h4>{slides[currentSlide].copy}</h4>
          </div>
          <div>
            <button className={styles.button_slider}>Lorem Ipsum</button>
            <button className={styles.button_download}>Lorem Ipsum</button>
          </div>
        </div>

        <div className={styles.div_pagination}>
          {slides.map((slide) => (
            <button
              className={`${styles.button_pagination} ${
                slide.id === currentSlide + 1
                  ? styles.button_active_pagination
                  : ""
              }`}
              key={slide.id}
              onClick={() => handleExtraSlide(slide.id)}
            >
              {slide.numberPage}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
