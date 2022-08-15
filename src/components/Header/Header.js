import i18next from "i18next";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import brandlogo from "../../images/brand-logo.png";
import styles from "./Header.module.css";

const Header = () => {
  const { t } = useTranslation("common");
  const [isNavActive, setNavActive] = useState("");
  return (
    <header>
      <nav className={styles.nav}>
        <NavLink to={"/"}>
          <img src={brandlogo} alt="deneme" />
        </NavLink>
        <ul className={styles.primaryNav + " " + isNavActive}>
          <li>
            <NavLink className={styles.NavLink} to={"/"}>
              {t("navbar.link1")}
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.NavLink} to={"/about"}>
              {t("navbar.link2")}
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.NavLink} to={"/services"}>
              {t("navbar.link3.title") + " "}
              <i className="fa-solid fa-angle-down"></i>
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.NavLink} to={"/contact"}>
              {t("navbar.link4")}
            </NavLink>
          </li>
          <li>
            <select
              className={styles.langSelector}
              onChange={(e) => i18next.changeLanguage(e.target.value)}
            >
              <option value={i18next.resolvedLanguage}>
                {i18next.resolvedLanguage.toUpperCase()}
              </option>
              <option value={"en"}>EN</option>
              <option value={"tr"}>TR</option>
              <option value={"de"}>DE</option>
            </select>
          </li>
        </ul>
        <div
          className={styles.hamburgerWrapper}
          onClick={() => {
            if (isNavActive === "Header_active__rHuVo") {
              setNavActive("");
            } else {
              setNavActive(styles.active);
            }
          }}
        >
          <i className="fa-solid fa-bars"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
