import React from "react";
import shelfIcon from "../../images/shelf-icon.svg";
import doorIcon from "../../images/door-icon.svg";
import railingIcon from "../../images/railing-icon.svg";
import pipeIcon from "../../images/pipe-icon.svg";
import ProductCard from "./ProductCard";

import styles from "./ProductPageCards.module.css";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ProductPageCards = () => {
  const { t } = useTranslation("home");
  return (
    <div className={styles.productsSection}>
      <div className={styles.productCardWrapper}>
        <Link className={styles.productCard} to={"/services/shelf"}>
          <ProductCard iconSrc={shelfIcon} description={t("homecard.card1")} />
        </Link>
        <Link className={styles.productCard} to={"/services/door"}>
          <ProductCard iconSrc={doorIcon} description={t("homecard.card2")} />
        </Link>
        <Link className={styles.productCard} to={"/services/railing"}>
          <ProductCard
            iconSrc={railingIcon}
            description={t("homecard.card3")}
          />
        </Link>
        <Link className={styles.productCard} to={"/services/pipe"}>
          <ProductCard iconSrc={pipeIcon} description={t("homecard.card4")} />
        </Link>
      </div>
    </div>
  );
};

export default ProductPageCards;
