import React from "react";
import { useTranslation } from "react-i18next";

import ProductLayout from "../../components/ProductPage/ProductLayout";
import productImg from "../../images/railing/railing-hero-bg.webp";
import product1 from "../../images/railing/railing-1.webp";
import product2 from "../../images/railing/railing-2.webp";
import product3 from "../../images/railing/railing-3.webp";
import product4 from "../../images/railing/railing-4.webp";
import product5 from "../../images/railing/railing-5.webp";
import product6 from "../../images/railing/railing-6.webp";
import product7 from "../../images/railing/railing-7.webp";
import product8 from "../../images/railing/railing-8.webp";
import product9 from "../../images/railing/railing-9.webp";
import product10 from "../../images/railing/railing-10.webp";

const Railing = () => {
  const { t } = useTranslation("products");
  return (
    <div>
      <ProductLayout
        heroSrc={productImg}
        heroTitle={"Railing"}
        headImg={productImg}
        headContent={t("railing.headcontent")}
        galleryArray={[
          product1,
          product2,
          product3,
          product4,
          product5,
          product6,
          product7,
          product8,
          product9,
          product10,
        ]}
      />
    </div>
  );
};

export default Railing;
