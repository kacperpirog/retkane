import Image from "next/image";
import React from "react";
import styles from "./info.module.css";

interface Info {
  id: number;
  title: string;
  copy: string;
  image: string;
}

const info: Info[] = [
  {
    id: 1,
    title: "lerem Ipsum",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: require("../../ass/icons/wired-outline-1832-sunflower.gif"),
  },
  {
    id: 2,
    title: "lerem Ipsum",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: require("../../ass/icons/wired-outline-585-herbs.gif"),
  },
];
const Info = () => {
  return (
    <div className={styles.containerInfo}>
      <div>
        <Image
          className={styles.imageInfo}
          src={require("../../ass/info/info_foto.jpg")}
          alt="info"
        />
      </div>
      <div className={styles.divInfo}>
        {info.map((i) => (
          <div key={i.id} className={styles.wrapperInfo}>
            <Image className={styles.imageIcons} src={i.image} alt="info" />
            <h4>{i.title}Bush</h4>
            <h5>{i.copy}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Info;
