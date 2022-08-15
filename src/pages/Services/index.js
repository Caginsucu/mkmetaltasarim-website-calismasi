import React from "react";
import herobg from "../../images/services-hero-bg.jpeg";
import { useTranslation } from "react-i18next";
import Main from "../../layouts/Main";
import { Outlet } from "react-router-dom";

const ServicesLayout = () => {
  const { t } = useTranslation("products");
  return (
    <div>
      <Main isHeroActive={false} heroSrc={herobg} heroTitle={t("hero-title")}>
        {/* <ProductPageCards />
        <ContactLink /> */}
        <Outlet />
      </Main>
    </div>
  );
};

export default ServicesLayout;
