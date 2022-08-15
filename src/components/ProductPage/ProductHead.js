import React from "react";
import styles from "./ProductHead.module.css";

const ProductHead = ({ productHeadImg, productContent }) => {
  return (
    <div className={styles.productHeadWrapper}>
      <div className={styles.imgWrapper}>
        <img src={productHeadImg} alt="Hizmet Resim" />
      </div>
      <div className={styles.contentWrapper}>
        <p>{productContent}</p>
      </div>
    </div>
  );
};

export default ProductHead;
