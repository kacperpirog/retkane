import Image from "next/image";
import React from "react";
import styles from "./gallery.module.css";

interface Gallery {
  id: number;
  title: string;
  image: string;
}

const gallery: Gallery[] = [
  {
    id: 1,
    title: "gallery_01",
    image: require("../../ass/gallery/gallery_01.png"),
  },
  {
    id: 2,
    title: "gallery_02  ",
    image: require("../../ass/gallery/gallery_02.png"),
  },
  {
    id: 3,
    title: "gallery_03 ",
    image: require("../../ass/gallery/gallery_03.png"),
  },
  {
    id: 4,
    title: "gallery_04",
    image: require("../../ass/gallery/gallery_04.png"),
  },
  {
    id: 5,
    title: "gallery_05",
    image: require("../../ass/gallery/gallery_05.png"),
  },
];

const Gallery = () => {
  return <div>lorem</div>;
};

export default Gallery;
