import React from "react";
import ProductCard from "./ProductCard";
import shelfIcon from "../../images/shelf-icon.svg";
import doorIcon from "../../images/door-icon.svg";
import railingIcon from "../../images/railing-icon.svg";
import pipeIcon from "../../images/pipe-icon.svg";
import styles from "./HomeCards.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HomeCards = () => {
  const { t } = useTranslation("home");
  return (
    <div className={styles.homeCardWrapper}>
      <Link className={styles.homeCard} to={"/services/shelf"}>
        <ProductCard iconSrc={shelfIcon} description={t("homecard.card1")} />
      </Link>
      <Link className={styles.homeCard} to={"/services/door"}>
        <ProductCard iconSrc={doorIcon} description={t("homecard.card2")} />
      </Link>
      <Link className={styles.homeCard} to={"/services/railing"}>
        <ProductCard iconSrc={railingIcon} description={t("homecard.card3")} />
      </Link>
      <Link className={styles.homeCard} to={"/services/pipe"}>
        <ProductCard iconSrc={pipeIcon} description={t("homecard.card4")} />
      </Link>
    </div>
  );
};
export default HomeCards;
