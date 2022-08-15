import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "./ContactLink.module.css";

const ContactLink = () => {
  const { t } = useTranslation("common");
  return (
    <div className={styles.contactLinkWrapper}>
      <div className={styles.contactLinkBg}>
        <Link to={"/contact"} className={styles.contactLink}>
          {t("contact-link")}
        </Link>
      </div>
    </div>
  );
};

export default ContactLink;
