import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Slider.module.css";

import sliderImg1 from "../../images/shelf/shelf-hero-bg.webp";
import sliderImg2 from "../../images/door/door-hero-bg.webp";
import sliderImg3 from "../../images/railing/railing-hero-bg.webp";
import sliderImg4 from "../../images/pipe/metal-15.webp";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const HomeSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { t } = useTranslation("home");

  return (
    <div className={styles.sliderWrapper}>
      <h3 className={styles.sliderTitle}>{t("slider.title")}</h3>
      <Slider {...settings}>
        <div>
          <Link to={"/services/shelf"}>
            <div className={styles.sliderItem}>
              <img src={sliderImg1} alt="Slider İçin Görsel" />
              <p>{t("slider.item1")}</p>
            </div>
          </Link>
        </div>
        <div>
          <Link to={"/services/door"}>
            <div className={styles.sliderItem}>
              <img src={sliderImg2} alt="Slider İçin Görsel" />
              <p>{t("slider.item2")}</p>
            </div>
          </Link>
        </div>
        <div>
          <Link to={"/services/railing"}>
            <div className={styles.sliderItem}>
              <img src={sliderImg3} alt="Slider İçin Görsel" />
              <p>{t("slider.item3")}</p>
            </div>
          </Link>
        </div>
        <div>
          <Link to={"/services/pipe"}>
            <div className={styles.sliderItem}>
              <img src={sliderImg4} alt="Slider İçin Görsel" />
              <p>{t("slider.item4")}</p>
            </div>
          </Link>
        </div>
      </Slider>
    </div>
  );
};

export default HomeSlider;
