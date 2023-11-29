import React from "react";
import styles from "./aboutMe.module.css";
import { useState } from "react";
import Image from "next/image";

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
    image: require("../../ass/icons/logo-1.png"),
  },
  {
    id: 3,
    content: "Lorem ipsum",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: require("../../ass/icons/wired-outline-27-globe.gif"),
  },
];

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topCopy}>
        <div>Ekolorgia loren ipsum</div>
        <div>
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
          <button key={i.id}> {i.content}</button>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
