import React from "react";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <div>
      <div>
        <h5>
          PORTFOLIO.
          <br />
          Kacper Piróg
        </h5>
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
