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
    <div>
      <div>
        <Image
          className={styles.imageInfo}
          src={require("../../ass/info/info_foto.jpg")}
          alt="info "
        />
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Info;
