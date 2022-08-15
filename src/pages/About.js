import React from "react";
import herobg from "../images/about-hero-bg.jpeg";
import { useTranslation } from "react-i18next";
import Main from "../layouts/Main";
import ContactLink from "../components/ContactLink/ContactLink";
import AboutPageAbout from "../components/About/AboutPageAbout";

const About = () => {
  const { t } = useTranslation("about");
  return (
    <>
      <Main heroSrc={herobg} heroTitle={t("hero-title")}>
        <AboutPageAbout />
        <ContactLink />
      </Main>
    </>
  );
};

export default About;
