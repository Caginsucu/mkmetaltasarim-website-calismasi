import React from "react";
import { useTranslation } from "react-i18next";

import ProductLayout from "../../components/ProductPage/ProductLayout";
import productImg from "../../images/pipe/metal-hero-bg.webp";
import product1 from "../../images/pipe/metal-1.webp";
import product2 from "../../images/pipe/metal-2.webp";
import product3 from "../../images/pipe/metal-3.webp";
import product4 from "../../images/pipe/metal-4.webp";
import product5 from "../../images/pipe/metal-5.webp";
import product6 from "../../images/pipe/metal-6.webp";
import product7 from "../../images/pipe/metal-7.webp";
import product8 from "../../images/pipe/metal-8.webp";
import product9 from "../../images/pipe/metal-9.webp";
import product10 from "../../images/pipe/metal-10.webp";
import product11 from "../../images/pipe/metal-11.webp";
import product12 from "../../images/pipe/metal-12.webp";
import product13 from "../../images/pipe/metal-13.webp";
import product14 from "../../images/pipe/metal-14.webp";
import product15 from "../../images/pipe/metal-15.webp";
import product16 from "../../images/pipe/metal-16.webp";
import product17 from "../../images/pipe/metal-17.webp";
import product18 from "../../images/pipe/metal-18.webp";
import product19 from "../../images/pipe/metal-19.webp";
import product20 from "../../images/pipe/metal-20.webp";
import product21 from "../../images/pipe/metal-21.webp";
const Pipe = () => {
  const { t } = useTranslation("products");
  return (
    <div>
      <ProductLayout
        heroSrc={productImg}
        heroTitle={"Metal"}
        headImg={productImg}
        headContent={t("pipe.headcontent")}
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
          product11,
          product12,
          product13,
          product14,
          product15,
          product16,
          product17,
          product18,
          product19,
          product20,
          product21,
        ]}
      />
    </div>
  );
};

export default Pipe;
