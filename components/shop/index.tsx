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
    image: require("../../ass/shop/retkane-876.jpg"),
  },
  {
    id: 2,
    title: "Nerka Black",
    priceFinal: "250zł",
    price: "300zł",
    link: "https://www.etsy.com/pl/?ref=lgo",
    image: require("../../ass/shop/RETKANE249.jpg"),
  },
  {
    id: 3,
    title: "Nerka Black",
    priceFinal: "250zł",
    price: "300zł",
    link: "https://www.etsy.com/pl/?ref=lgo",
    image: require("../../ass/shop/retkane-873.jpg"),
  },
  {
    id: 4,
    title: "Nerka Black",
    priceFinal: "250zł",
    price: "300zł",
    link: "https://www.etsy.com/pl/?ref=lgo",
    image: require("../../ass/shop/retkane-921.jpg"),
  },
  {
    id: 5,
    title: "Nerka Black",
    priceFinal: "250zł",
    price: "300zł",
    link: "https://www.etsy.com/pl/?ref=lgo",
    image: require("../../ass/shop/retkane-925.jpg"),
  },
  {
    id: 6,
    title: "Nerka Black",
    priceFinal: "250zł",
    price: "300zł",
    link: "https://www.etsy.com/pl/?ref=lgo",
    image: require("../../ass/shop/retkane-940.jpg"),
  },
  {
    id: 7,
    title: "Nerka Black",
    priceFinal: "250zł",
    price: "300zł",
    link: "https://www.etsy.com/pl/?ref=lgo",
    image: require("../../ass/shop/retkane-960.jpg"),
  },
  {
    id: 8,
    title: "Nerka Black",
    priceFinal: "250zł",
    price: "300zł",
    link: "https://www.etsy.com/pl/?ref=lgo",
    image: require("../../ass/shop/retkane-961.jpg"),
  },
];

const Shop = () => {
  return <div>Shop</div>;
};

export default Shop;
