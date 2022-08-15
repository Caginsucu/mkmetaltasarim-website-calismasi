import React from "react";
import styles from "./Hero.module.css";

const Hero = ({ title, src }) => {
  return (
    <div className={styles.hero} style={{ backgroundImage: `url(${src})` }}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default Hero;
