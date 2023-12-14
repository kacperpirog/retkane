import Image from "next/image";
import React from "react";
import styles from "./newsLetter.module.css";

const NewsLetter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>
          Lorem ipsum dolor sit amet, <br></br> consectetur adipiscing elit.
        </h1>
      </div>
      <div>
        <input type="email" placeholder="Wpisz swój e-mail"></input>
        <button className={styles.btnNewsLetter}>Wyślij</button>
      </div>
    </div>
  );
};

export default NewsLetter;
