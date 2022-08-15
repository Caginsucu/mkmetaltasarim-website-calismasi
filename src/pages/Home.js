import React from "react";
import herobg from "../images/home-hero-bg.jpeg";
import Main from "../layouts/Main";
import { useTranslation } from "react-i18next";
import HomeCards from "../components/ProductsCards/HomeCards";
import HomeAbout from "../components/About/HomeAbout";
import ContactSection from "../components/Contact/ContactSection";
import HomeSlider from "../components/Slider/Slider";
const Home = () => {
  const { t } = useTranslation("home");
  return (
    <>
      <Main heroSrc={herobg} heroTitle={t("hero-title")}>
        <HomeCards />
        <HomeAbout />
        <HomeSlider />
        <ContactSection isHaveTitle={true} title={t("contactSectionTitle")} />
      </Main>
    </>
  );
};

export default Home;
