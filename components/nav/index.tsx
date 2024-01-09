import Image from "next/image";
import React, { useEffect } from "react";
import styles from "./nav.module.css";
import logo from "../../ass/logo/logo_WHITE.png";
import { Link } from "react-scroll";
import { useState } from "react";

const Nav = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  const [navBackground, setNavBackground] = useState("transparent");

  const handleScroll = () => {
    const show = window.scrollY > 20;
    setNavBackground(show ? "black" : "transparent");
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.nav} style={{ backgroundColor: navBackground }}>
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
        <>
          <button className={styles.button} onClick={handleClick}>
            {clicked ? "Zadzwoń" : "+ 48 888 888 888"}
          </button>
        </>
      </div>
    </div>
  );
};

export default Nav;
