import React from "react";
import doorIcon from "../../images/door-icon.svg";

import styles from "./ProductCard.module.css";

const ProductCard = ({ iconSrc = doorIcon, description = "deneme" }) => {
  return (
    <div className={styles.productCard}>
      <img className={styles.icon} src={iconSrc} alt="deneme" />
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};

export default ProductCard;
