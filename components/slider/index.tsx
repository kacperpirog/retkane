import React from "react";
import styles from "./slider.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";

interface Slide {
  id: number;
  content: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    content: "Miejsce 1",
    image: require("../../ass/1170x450_zad_1.png"),
  },
  {
    id: 2,
    content: "Miejsce 2",
    image: require("../../ass/foto_1.jpg"),
  },
  {
    id: 3,
    content: "Miejsce 3",
    image: require("../../ass/foto_2.jpg"),
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

  const handleNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className={styles.container}>
      <button onClick={handlePrevSlide}>Poprzedni</button>
      <button onClick={handleNextSlide}>Następny</button>
      <div>
        <Image
          className={styles.img}
          src={slides[currentSlide].image}
          alt={slides[currentSlide].content}
        />
        <p>{slides[currentSlide].content}</p>
      </div>
    </div>
  );
};

export default Slider;
