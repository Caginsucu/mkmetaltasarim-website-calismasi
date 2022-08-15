import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./ContactSection.module.css";

const ContactSection = ({ isHaveTitle = false, title = "xs" }) => {
  const { t } = useTranslation("contact");
  return (
    <div className={styles.contactSection}>
      <h2 className={styles.contactSectionTitle}>{isHaveTitle && title}</h2>
      <div className={styles.contactContentWrapper}>
        <div className={styles.contactPhone}>
          <h4>Telefon</h4>
          <a href="tel:+90 506 056 43 90">{t("contact-section.no1")}</a>
          {/* <a href="https://www.google.com">{t("contact-section.no2")}</a> */}
        </div>
        <div className={styles.contactMail}>
          <h4>E-Mail</h4>
          <a href="mailto:info@mkmetaltasarim.com">
            {t("contact-section.email")}
          </a>
          <a
            href="https://goo.gl/maps/jk1VPtaVsYwgN8TZA"
            target={"_blank"}
            rel="noreferrer"
          >
            {t("contact-section.address")}
          </a>
        </div>
        <div className={styles.contactGps}>
          <h4>Lokasyon</h4>
          <a
            href="https://goo.gl/maps/jk1VPtaVsYwgN8TZA"
            target={"_blank"}
            rel="noreferrer"
          >
            <i className="fa-solid fa-location-dot"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
