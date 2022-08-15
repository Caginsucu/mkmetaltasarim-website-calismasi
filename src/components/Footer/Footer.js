import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import logo from "../../images/brand-logo.png";
import styles from "./Footer.module.css";
const Footer = () => {
  const { t } = useTranslation("common");
  return (
    <footer>
      <div className={styles.footerWrapper}>
        <div className={styles.footerBrandSocial}>
          <img
            className={styles.footerBrandLogo}
            src={logo}
            alt="mkmetaldesign logo"
          />
          <div className={styles.footerSocialWrapper}>
            <a
              className={styles.footerSocialLink}
              href="https://www.google.com"
              target={"_blank"}
              rel="noreferrer"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              className={styles.footerSocialLink}
              href="https://www.google.com"
              target={"_blank"}
              rel="noreferrer"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a
              className={styles.footerSocialLink}
              href="https://www.google.com"
              target={"_blank"}
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
        {/*  */}
        <div className={styles.footerNavWrapper}>
          <p>{t("footer.navtitle")}</p>
          <ul className={styles.footerNav}>
            <li className={styles.footerNavItem}>
              <NavLink to={"/"}>{t("navbar.link1")}</NavLink>
            </li>
            <li className={styles.footerNavItem}>
              <NavLink to={"/about"}>{t("navbar.link2")}</NavLink>
            </li>
            <li className={styles.footerNavItem}>
              <NavLink to={"/services"}>{t("navbar.link3.title")}</NavLink>
            </li>
            <li className={styles.footerNavItem}>
              <NavLink to={"/contact"}>{t("navbar.link4")}</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <p className={styles.copyRight}>
        Copyright &copy; 2022 |{" "}
        <a href="https://selimenes.dev/" target={"_blank"} rel="noreferrer">
          Selim Enes
        </a>{" "}
        &{" "}
        <a href="https://caginsucu.dev/" target={"_blank"} rel="noreferrer">
          Çağın Sucu
        </a>{" "}
      </p>
    </footer>
  );
};

export default Footer;
