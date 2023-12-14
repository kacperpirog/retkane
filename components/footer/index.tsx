import Image from "next/image";
import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.container}>Footer</div>
      <div className={styles.footer}>
        <p>Copyright &copy; {new Date().getFullYear()} Kacper Piróg</p>
      </div>
    </>
  );
};

export default Footer;
