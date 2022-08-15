import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./AboutPageAbout.module.css";

import aboutImg1 from "../../images/mission-img.webp";
import aboutImg2 from "../../images/vision-img.webp";

const AboutPageAbout = () => {
  const { t } = useTranslation("about");
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.contentWrapper}>
          <h2 className={styles.contentTitle}>{t("aboutcontent.title")}</h2>
          <p className={styles.contentDescription}>
            {t("aboutcontent.content")}
          </p>
        </div>
        <div className={styles.imgWrapper}>
          <img
            className={styles.img}
            src={aboutImg1}
            alt="Hakkımızda İçin Görsel"
          />
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.contentWrapper}>
          <h2 className={styles.contentTitle}>
            {t("aboutcontentsecond.title")}
          </h2>
          <p className={styles.contentDescription}>
            {t("aboutcontentsecond.content")}
          </p>
        </div>
        <div className={styles.imgWrapper} style={{ order: "-1" }}>
          <img
            className={styles.img}
            src={aboutImg2}
            alt="Hakkımızda İçin Görsel"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPageAbout;
