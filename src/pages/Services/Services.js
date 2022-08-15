import React from "react";
import herobg from "../../images/services-hero-bg.jpeg";
import ProductPageCards from "../../components/ProductsCards/ProductPageCards";
import ContactLink from "../../components/ContactLink/ContactLink";
import Hero from "../../components/Hero/Hero";

import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation("products");
  return (
    <div>
      <Hero src={herobg} title={t("hero-title")} />
      <ProductPageCards />
      <ContactLink />
    </div>
  );
};

export default Services;
