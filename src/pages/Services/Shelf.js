import React from "react";
import { useTranslation } from "react-i18next";

import ProductLayout from "../../components/ProductPage/ProductLayout";
import productImg from "../../images/shelf/shelf-hero-bg.webp";
import product1 from "../../images/shelf/shelf-1.webp";
import product2 from "../../images/shelf/shelf-2.webp";
import product3 from "../../images/shelf/shelf-3.webp";
import product4 from "../../images/shelf/shelf-4.webp";

const Shelf = () => {
  const { t } = useTranslation("products");
  return (
    <div>
      <ProductLayout
        heroSrc={productImg}
        heroTitle={"Shelf"}
        headImg={productImg}
        headContent={t("shelf.headcontent")}
        galleryArray={[product1, product2, product3, product4]}
      />
    </div>
  );
};

export default Shelf;
