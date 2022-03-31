import Coins from "layouts/Coins/Coins";
import Contact from "layouts/Contact/Contact";
import Features from "layouts/Features/Features";
import Footer from "layouts/Footer/Footer";
import FortuneMap from "layouts/FortuneMap/FortuneMap";
import Hero from "layouts/Hero/Hero";
import HowDoesItWork from "layouts/HowDoesItWork/HowDoesItWork";
import Introducing from "layouts/Introducing/Introducing";
import Navbar from "layouts/Navbar/Navbar";
import Tokenomics from "layouts/Tokenomics/Tokenomics";
import UntilNextDraw from "layouts/UntilNextDraw/UntilNextDraw";
import React from "react";
import styles from "./HomePage.module.css";
import { Fade } from "react-awesome-reveal";

function HomePage() {
  return (
    <div className={styles.home}>
      <Navbar />
      <div className="mb-100px" id="home">
        <Hero />
      </div>
      <div className="mb-100px">
        <Fade delay={500} duration={1000} cascade triggerOnce direction="right">
          <Introducing />
        </Fade>
      </div>
      <div className="mb-150px">
        <Fade delay={500} duration={1000} cascade triggerOnce direction="down">
          <UntilNextDraw />
        </Fade>
      </div>
      <div className="mb-100px">
        <HowDoesItWork />
      </div>
      <div className="mb-100px" id="token">
        <Fade delay={500} duration={1000} cascade triggerOnce direction="left">
          <Tokenomics />
        </Fade>
      </div>
      <div className="mb-150px">
        <Features />
      </div>
      <div className="mb-200px" id="roadmap">
        <FortuneMap />
      </div>
      <div className="mb-200px">
        <Coins />
      </div>
      <div className="mb-100px" id="contact">
        <Contact />
      </div>
      <div className="mb-100px">
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
