import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";

const Main = ({ isHeroActive = true, heroTitle, heroSrc, children }) => {
  return (
    <>
      <Header />

      <main>
        {isHeroActive && <Hero title={heroTitle} src={heroSrc} />}
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Main;
