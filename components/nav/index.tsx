import Image from "next/image";
import React from "react";
import styles from "./nav.module.css";
import logo from "../../ass/logo/logo_WHITE.png";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <div>
        <Image src={logo} alt="logo" />
      </div>
      <div>
        <Link
          to="Home"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
        >
          Home
        </Link>
        <Link
          to="O Mnie"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
        >
          O Mnie
        </Link>
        <Link
          to="Warsztaty"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
        >
          Warsztaty
        </Link>
        <Link
          to="Kontakt"
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
          <button>zadzwoń</button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
