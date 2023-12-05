import Image from "next/image";
import React from "react";
import styles from "./workshops.module.css";
import calender from "../../ass/icons/icons8-calendar-50.png";

interface Workshops {
  id: number;
  title: string;
  copy: string;
  date: string;
  image: string;
}

const workshops: Workshops[] = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "Listopad 20, 2023",
    image: require("../../ass/workshopimage/image_1.jpeg"),
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet,  ",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "Listopad 20, 2023",
    image: require("../../ass/workshopimage/image_02.jpeg"),
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet,  ",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "Listopad 20, 2023",
    image: require("../../ass/workshopimage/image_03.jpg"),
  },
];
const Workshops = () => {
  return (
    <div className={styles.workshopsConteiner}>
      <div>
        <h1>Warsztaty</h1>
      </div>
      <div className={styles.workshopsWrapper}>
        {workshops.map((i) => (
          <div className={styles.workshop} key={i.id}>
            <Image
              className={styles.workshopImage}
              src={i.image}
              alt={i.title}
            />
            <h4>{i.title}</h4>
            <p>{i.copy}</p>
            <div>
              <h5>{i.date}</h5>
              <button>
                <Image
                  src={require("../../ass/icons/icons8-calendar-50.png")}
                  alt={i.title}
                />
                <h5>Zapisz się </h5>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workshops;
