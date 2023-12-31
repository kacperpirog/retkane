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
  return (
    <div className={styles.container}>
      <div>
        <h1>Lorem Ipsum</h1>
      </div>
      <div className={styles.shopList}>
        {shop.map((i) => (
          <ul>
            <li className={styles.shopItem} key={i.id}>
              <Image className={styles.shopImage} src={i.image} alt={i.title} />
              <div className={styles.shopInfo}>
                <div className={styles.shopTitle}>
                  <h3>{i.title}</h3>
                  <div className={styles.shopPrice}>
                    <h5 className={styles.oldPrice}>{i.price}</h5>
                    <h5 className={styles.finalPrice}>{i.priceFinal}</h5>
                  </div>
                </div>
                <div className={styles.shopButton}>
                  <button
                    className={styles.buttoShop}
                    onClick={() => window.open(i.link, "_blank")}
                  >
                    <h4>Kup Teraz</h4>
                  </button>
                </div>
              </div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Shop;
