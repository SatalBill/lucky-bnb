import React from "react";
import styles from "./Features.module.css";
import FeatureCardIcon_1 from "assets/images/FeatureCardIcon_1.png";
import FeatureCardIcon_2 from "assets/images/FeatureCardIcon_2.png";
import FeatureCardIcon_3 from "assets/images/FeatureCardIcon_3.png";
import FeatureCardIcon_4 from "assets/images/FeatureCardIcon_4.png";
import star_glow from "assets/images/star_glow.png";
import Title from "components/Title/Title";
import useMediaQuery from "hooks/useMediaQuery";
import { Fade } from "react-awesome-reveal";

const Card = ({ title, desc, icon }) => {
  const isBellow760px = useMediaQuery("(max-width : 760px)");

  return (
    <div className={styles.card}>
      <div className={`${styles.iconBox} mb-20px `}>
        <img src={icon} alt="" />
      </div>

      <h4
        className={`${
          isBellow760px ? "fs-16px" : "fs-20px"
        }  white weight-7 mb-10px`}
      >
        {title}
      </h4>
      <p className="fs-12px white lh-1_6 weight-4">{desc}</p>
    </div>
  );
};

function Features() {
  return (
    <div>
      <div className="container-wrapper">
        <Title title="Features" className="text-center mb-50px" />
      </div>

      <div className={styles.cards_wrapper}>
        <div className="container-wrapper">
          <Fade
            delay={500}
            duration={1000}
            cascade
            triggerOnce
            direction="down"
          >
            <div className={styles.cards_container}>
              <Card
                title="3.2% Auto-Liquidity Add"
                desc="3.2% tax contributes towards the automatic injection of liquidity, helping to support a stable price."
                icon={FeatureCardIcon_1}
              />
              <Card
                title="2.4% Jackpot Rewards "
                desc="2.4% tax paid out to the winning wallet every 6 hours automatically with 10% going to weekly and monthly draws."
                icon={FeatureCardIcon_2}
              />
              <Card
                title="2% Reflection Rewards"
                desc="2% reflection tax on all transactions distributed to all holders."
                icon={FeatureCardIcon_3}
              />
              <Card
                title="2.4% Marketing & Charity"
                desc="2.4% tax contribution to further marketing initiatives, token development and charity."
                icon={FeatureCardIcon_4}
              />

              <img src={star_glow} className={styles.star_glow} alt="" />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Features;
