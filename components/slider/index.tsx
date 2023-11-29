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
    image: require("../../ass/foto_1.png"),
  },
  {
    id: 2,
    content: "Miejsce 2",
    image: require("../../ass/foto_2.png"),
  },
  {
    id: 3,
    content: "Miejsce 3",
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
        <p className={styles.p}>{slides[currentSlide].content}</p>
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
