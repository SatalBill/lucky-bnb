import useMediaQuery from "hooks/useMediaQuery";
import React from "react";
import styles from "./TimerBox.module.css";

const TimerBox = ({ title, count }) => {
  const isBellow860px = useMediaQuery("(max-width : 860px)");

  return (
    <div className={styles.timerBox}>
      <div
        className={`${styles.countBox} ${
          isBellow860px ? "fs-22px mb-10px" : "fs-32px mb-15px"
        } gradient-border-image yellow weight-7 lh-1`}
      >
        {count}
      </div>
      <p className={`${isBellow860px ? "fs-16px" : "fs-18px"}  weight-4 white`}>
        {title}
      </p>
    </div>
  );
};

export default TimerBox;
