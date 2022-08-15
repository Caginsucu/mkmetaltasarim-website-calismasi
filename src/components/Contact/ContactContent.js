import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./ContactContent.module.css";

const ContactContent = () => {
  const { t } = useTranslation("contact");

  return (
    <div className={styles.contactMain}>
      <div className={styles.mapWrapper}>
        <iframe
          className={styles.map}
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12027.92364632351!2d28.8001532!3d41.0912637!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1da6390d342f06a1!2sMK%20METAL%20TASARIM!5e0!3m2!1str!2str!4v1660286401927!5m2!1str!2str"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="address"
        ></iframe>
      </div>
      <div className={styles.formWrapper}>
        <form action="#" className={styles.form}>
          <input
            type={"text"}
            name="name"
            id="name"
            placeholder={t("form.name")}
          />
          <input
            type={"email"}
            name="email"
            id="email"
            placeholder={t("form.mail")}
          />
          <input
            type={"text"}
            name="subject"
            id="subject"
            placeholder={t("form.subject")}
          />
          <textarea name="msg" id="msg" placeholder={t("form.msg")}></textarea>
          <button type="submit" className={styles.formBtn}>
            {t("form.btn")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactContent;
