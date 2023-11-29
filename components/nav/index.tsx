import Image from "next/image";
import React from "react";
import styles from "./nav.module.css";
import logo from "../../ass/logo/logo_WHITE.png";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <div>
        <Image className={styles.img} width={300} src={logo} alt="logo" />
      </div>
      <div className={styles.link}>
        <Link
          to="Home"
          className={styles.link}
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
        >
          Home
        </Link>
        <Link
          to="O Mnie"
          className={styles.link}
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
        >
          O Mnie
        </Link>
        <Link
          to="Warsztaty"
          className={styles.link}
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
        >
          Warsztaty
        </Link>
        <Link
          to="Kontakt"
          className={styles.link}
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
        >
          Kontakt
        </Link>
        <Link
          to="zadzwoń"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
        >
          <button className={styles.button}>zadzwoń</button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
