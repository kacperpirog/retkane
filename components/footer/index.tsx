import Image from "next/image";
import React from "react";
import styles from "./footer.module.css";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <>
      <div className={styles.containerFooter}>
        <div className={styles.divFooter}>
          <div className={styles.wrapperFooter}>
            <h1>Lorem ipsum dolor</h1>
          </div>
          <div className={styles.wrapperFooterImageInfo}>
            <Image
              className={styles.imageInfo}
              src={require("../../ass/footer/fb.png")}
              alt="fb"
            />
            <Image
              className={styles.imageInfo}
              src={require("../../ass/footer/wa.png")}
              alt="wa"
            />
            <Image
              className={styles.imageInfo}
              src={require("../../ass/footer/ig.png")}
              alt="ig"
            />
          </div>
          <div className={styles.linkFooter}>
            <Link
              to="Home"
              className={styles.linkFooter}
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
            >
              Home
            </Link>
            <Link
              to="O Mnie"
              className={styles.linkFooter}
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
            >
              O Mnie
            </Link>
            <Link
              to="Warsztaty"
              className={styles.linkFooter}
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
            >
              Warsztaty
            </Link>
            <Link
              to="Kontakt"
              className={styles.linkFooter}
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
            >
              Kontakt
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <p>Copyright &copy; {new Date().getFullYear()} Kacper Piróg</p>
      </div>
    </>
  );
};

export default Footer;
