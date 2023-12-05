import Image from "next/image";
import React from "react";
import styles from "./shop.module.css";

interface Shop {
  id: number;
  title: string;
  priceFinal: string;
  price: string;
  link: string;
  image: string;
}

const shop: Shop[] = [
  {
    id: 1,
    title: "Nerka Black",
    priceFinal: "250zł",
    price: "300zł",
    link: "https://www.etsy.com/pl/?ref=lgo",
    image: require("../../ass/workshopimage/image_1.jpeg"),
  },
];

const Shop = () => {
  return <div>Shop</div>;
};

export default Shop;
