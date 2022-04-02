import React from "react";
import styles from "./Hero.module.css";
import luckyBnbHeroBanner from "assets/images/luckyBnbHeroBanner.png";
import { Fade } from "react-awesome-reveal";

function Hero(props) {
  console.log('=======^^^', props.prizePool)
  console.log('=======^^^', typeof(props.prizePool))
  const cutDigits = (num) => {
    return num.toString().substring(0, 5)
  }
  return (
    <div className={styles.hero}>
      <Fade delay={500} duration={1000} cascade triggerOnce>
        <div className={styles.heroContent}>
          <div className="container-wrapper">
            <div className={styles.luckyBnbHeroBanner_parent}>
              <img
                src={luckyBnbHeroBanner}
                className={styles.luckyBnbHeroBanner}
                alt=""
              />

              <div className={styles.luckyBnbHeroBanner_content}>
                <span className="weight-6">{cutDigits(parseFloat(props.prizePool).toFixed(4))}</span>
                {/* <span className="weight-7">8</span>
                <span className="weight-7">8</span> */}
              </div>
            </div>
          </div>
          
        </div>
      </Fade>
    </div>
  );
}

export default Hero;
