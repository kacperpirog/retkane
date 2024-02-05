import React from "react";
import styles from "./aboutMe.module.css";
import { useState } from "react";
import Image from "next/image";

interface AboutMe {
  id: number;
  content: string;
  copy: string;
  image: string;
  imageWhite: string;
}

const aboutMe: AboutMe[] = [
  {
    id: 1,
    content: "Lorem ipsum",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: require("../../ass/icons/wired-outline-1683-recycling.gif"),
    imageWhite: require("../../ass/icons/wired-outline-27-globeWhite.gif"),
  },
  {
    id: 2,
    content: "Lorem ipsum",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: require("../../ass/icons/wired-outline-186-puzzle.gif"),
    imageWhite: require("../../ass/icons/wired-outline-186-puzzlewhite.gif"),
  },
  {
    id: 3,
    content: "Lorem ipsum",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: require("../../ass/icons/wired-outline-27-globe.gif"),
    imageWhite: require("../../ass/icons/wired-outline-186-puzzle.gif"),
  },
];

const AboutMe = () => {
  const [currentButton, setCurrentButton] = useState(0);
  const handleExtraButton = (id: number) => {
    setCurrentButton(id - 1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.topCopy}>
        <div className={styles.copyLeftTop}>
          <h2>Ekologia</h2>
        </div>
        <div className={styles.copyRightTop}>
          <h4>
            Ekologia to serce Retkane. Dla nas to nie tylko trend, lecz
            filozofia życia. Dbamy o planetę, tworząc zrównoważone akcesoria.
          </h4>
        </div>
      </div>
      <div className={styles.wrapper}>
        {aboutMe.map((i) => (
          <button
            className={`${styles.wrapperButton} ${
              i.id === currentButton + 1 ? styles.wrapperButtonPagination : ""
            }`}
            key={i.id}
            onClick={() => handleExtraButton(i.id)}
          >
            <Image
              key={i.id}
              className={styles.imgAboutMe}
              src={i.image}
              alt={i.content}
            />

            <div>
              <h3>{i.content}</h3>
            </div>
            <div>
              <h4>{i.copy}</h4>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
