import React from "react";
import Hero from "../Hero/Hero";
import ProductGallery from "./ProductGallery";
import ProductHead from "./ProductHead";

const ProductLayout = ({
  heroTitle,
  heroSrc,
  headImg,
  headContent,
  galleryArray,
}) => {
  return (
    <div style={{ backgroundColor: "#383838" }}>
      <Hero src={heroSrc} title={heroTitle} />
      <ProductHead productHeadImg={headImg} productContent={headContent} />
      <ProductGallery galleryImgArray={galleryArray} />
    </div>
  );
};

export default ProductLayout;
