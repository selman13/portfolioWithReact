import React from "react";
import usePersonalData from "../../Hooks/usePersonalData";
import style from "./style.module.css";

const Header = () => {
  const data = usePersonalData();
  const links = ["Home", "About", "Skills", "Work", "Contact"];

  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.navigation}>
        <div className="logo">
          <h3>{data.firstName}</h3>
        </div>
        <nav className={style.nav}>
          {links.map((link) => {
            return (
              <a className={style.links} href={`#${link}`} data-to-scrollspy-id={link.toLowerCase()}>
                {link}
              </a>
            );
          })}
        </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
