import React from "react";
import styles from "./FortuneMapSection.module.css";
import roadmap_card_circle from "assets/images/roadmap_card_circle.png";
import useMediaQuery from "hooks/useMediaQuery";
import { Fade } from "react-awesome-reveal";

const FortuneMapSection = ({
  title,
  points,
  img,
  cardPropImg,
  borderColor,
  cardPropsStyles,
  reverse = false,
}) => {
  const isBellow1000px = useMediaQuery("(max-width : 1000px)");

  return (
    <div className={`${styles.cardSection} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.card_wrapper}>
        <div
          className={`${styles.card} relative`}
          style={{ borderColor: borderColor }}
        >
          {cardPropImg ? (
            <img
              src={cardPropImg}
              className={`${styles.cardPropsStyles} absolute`}
              style={cardPropsStyles}
              alt=""
            />
          ) : (
            ""
          )}
          <h2
            className={`${
              isBellow1000px ? "fs-22px" : "fs-32px"
            } white weight-7 mb-10px`}
          >
            {title}
          </h2>

          <ul className={styles.card_points} style={{ paddingLeft: "5.5%" }}>
            <Fade delay={500} duration={1000} cascade triggerOnce>
              {points.map((point, index) => (
                <li
                  key={index}
                  className={`${
                    isBellow1000px ? "fs-14px" : "fs-16px"
                  } weight-4 white`}
                >
                  {point}
                </li>
              ))}
            </Fade>
          </ul>
        </div>
      </div>

      <div className={styles.circle_wrapper}>
        <img src={roadmap_card_circle} className={styles.circle} alt="" />
      </div>

      <div className={styles.img_wrapper}>
        <Fade delay={500} duration={1000} cascade triggerOnce>
          <img src={img} alt="" />
        </Fade>
      </div>
    </div>
  );
};

export default FortuneMapSection;
