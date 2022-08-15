import React from "react";
import styles from "./ProductGallery.module.css";

const ProductGallery = ({ galleryImgArray }) => {
  return (
    <div className={styles.galleryWrapper}>
      {galleryImgArray.map((item, idx) => (
        <img key={idx} src={item} alt="Hizmet Galeri Görseli" />
      ))}
    </div>
  );
};

export default ProductGallery;
