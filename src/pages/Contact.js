import React from "react";
import Main from "../layouts/Main";
import herobg from "../images/contact-hero-bg.webp";
import { useTranslation } from "react-i18next";

import ContactSection from "../components/Contact/ContactSection";
import ContactContent from "../components/Contact/ContactContent";

const Contact = () => {
  const { t } = useTranslation("contact");
  return (
    <div>
      <Main heroSrc={herobg} heroTitle={t("hero-title")}>
        <ContactSection isHaveTitle={false} title={""} />
        <ContactContent />
      </Main>
    </div>
  );
};

export default Contact;
