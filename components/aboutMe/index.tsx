import React from "react";
import styles from "./aboutMe.module.css";
import { useState } from "react";
import Image from "next/image";
import utilStyles from "../../styles/utils.module.css";

interface AboutMe {
  id: number;
  content: string;
  copy: string;
  image: string;
}

const aboutMe: AboutMe[] = [
  {
    id: 1,
    content: "Lorem ipsum",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: require("../../ass/icons/wired-outline-1683-recycling.gif"),
  },
  {
    id: 2,
    content: "Lorem ipsum",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: require("../../ass/icons/wired-outline-186-puzzle.gif"),
  },
  {
    id: 3,
    content: "Lorem ipsum",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: require("../../ass/icons/wired-outline-27-globe.gif"),
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
          <h2>Ekolorgia loren ipsum</h2>
        </div>
        <div className={styles.copyRightTop}>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea
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
