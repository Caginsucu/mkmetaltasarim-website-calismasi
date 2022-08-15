import React from "react";
import { useTranslation } from "react-i18next";

import ProductLayout from "../../components/ProductPage/ProductLayout";
import productImg from "../../images/door/door-hero-bg.webp";
import product1 from "../../images/door/door-1.webp";
import product2 from "../../images/door/door-2.webp";
import product3 from "../../images/door/door-3.webp";
import product4 from "../../images/door/door-4.webp";
import product5 from "../../images/door/door-5.webp";

const Door = () => {
  const { t } = useTranslation("products");
  return (
    <div>
      <ProductLayout
        heroSrc={productImg}
        heroTitle={"Door"}
        headImg={productImg}
        headContent={t("door.headcontent")}
        galleryArray={[
          product1,
          product2,
          product3,
          product4,
          product5,
          productImg,
        ]}
      />
    </div>
  );
};

export default Door;
