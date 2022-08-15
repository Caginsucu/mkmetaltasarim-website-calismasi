import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./HomeAbout.module.css";

import homeAboutImg from "../../images/home-about-img.webp";

const HomeAbout = () => {
  const { t } = useTranslation("home");
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.contentTitle}>{t("homeabout.title")}</h2>
        <p className={styles.contentDescription}>{t("homeabout.content")}</p>
      </div>
      <div className={styles.imgWrapper}>
        <img
          className={styles.img}
          src={homeAboutImg}
          alt="Hakkımızda İçin Görsel"
        />
      </div>
    </div>
  );
};

export default HomeAbout;
