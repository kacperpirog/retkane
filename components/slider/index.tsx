import React from "react";
import styles from "./slider.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";

interface Slide {
  id: number;
  content: string;
  copy: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    content: "Miejsce 1",
    copy: "Lorem ipsum dolor sit amet, consectetur",
    image: require("../../ass/foto_1.png"),
  },
  {
    id: 2,
    content: "Miejsce 2",
    copy: "Lorem ipsum dolor sit amet, consectetur",
    image: require("../../ass/foto_2.png"),
  },
  {
    id: 3,
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
    }, 200000);
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
          <h1>{slides[currentSlide].content}</h1>
          <h3>{slides[currentSlide].copy}</h3>
          <button className={styles.button_slider}>Lorem Ipsum</button>
          <button className={styles.button_download}>pobierz </button>
        </div>
      </div>

      {slides.map((slide) => (
        <button key={slide.id} onClick={() => handleExtraSlide(slide.id)}>
          {slide.id}
        </button>
      ))}
    </div>
  );
};

export default Slider;
