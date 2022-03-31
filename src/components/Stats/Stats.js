import useMediaQuery from "hooks/useMediaQuery";
import React from "react";
import styles from "./Stats.module.css";

const Stats = (props) => {
  const { duration, type, timer, currentPrizePool, cardsBackgroundColor } =
    props;
  const isBellow1200px = useMediaQuery("(max-width : 1200px)");
  const isBellow400px = useMediaQuery("(max-width : 400px)");

  return (
    <div className={styles.stats}>
      <div style={{ backgroundColor: cardsBackgroundColor }}>
        <h2
          className={`${
            isBellow400px ? "fs-16px" : "fs-20px mb-5px"
          }  yellow weight-7 text-center `}
        >
          {duration}
        </h2>
        <h4
          className={`${
            isBellow1200px ? (isBellow400px ? "fs-14px" : "fs-20px") : "fs-28px"
          }  white weight-7 text-center lh-1_2`}
        >
          {type}
        </h4>
      </div>
      <div style={{ backgroundColor: cardsBackgroundColor }}>
        <h2
          className={`${
            isBellow1200px ? "fs-16px mb-5px" : "fs-20px mb-15px"
          } white  weight-7 text-center`}
        >
          Until Next Draw
        </h2>
        <div className={styles.statsTimer}>
          <div>
            <h3
              className={`${
                isBellow1200px ? "fs-20px" : "fs-28px"
              } yellow text-center weight-7 lh-1`}
            >
              {timer.days}
            </h3>
            <h3
              className={`${
                isBellow1200px ? "fs-14px" : "fs-18px"
              }  white text-center weight-4`}
            >
              Days
            </h3>
          </div>
          <div>
            <h3
              className={`${
                isBellow1200px ? "fs-20px" : "fs-28px"
              } yellow text-center weight-7 lh-1`}
            >
              {timer.hours}
            </h3>
            <h3
              className={`${
                isBellow1200px ? "fs-14px" : "fs-18px"
              }  white text-center weight-4`}
            >
              {isBellow1200px ? "Hrs" : "Hours"}
            </h3>
          </div>
          <div>
            <h3
              className={`${
                isBellow1200px ? "fs-20px" : "fs-28px"
              } yellow text-center weight-7 lh-1`}
            >
              {timer.minutes}
            </h3>
            <h3
              className={`${
                isBellow1200px ? "fs-14px" : "fs-18px"
              }  white text-center weight-4`}
            >
              {isBellow1200px ? "Min" : "Minutes"}
            </h3>
          </div>
          <div>
            <h3
              className={`${
                isBellow1200px ? "fs-20px" : "fs-28px"
              } yellow text-center weight-7 lh-1`}
            >
              {timer.seconds}
            </h3>
            <h3
              className={`${
                isBellow1200px ? "fs-14px" : "fs-18px"
              }  white text-center weight-4`}
            >
              {isBellow1200px ? "Sec" : "Seconds"}
            </h3>
          </div>
        </div>
      </div>

      <div
        className={styles.prizePool}
        style={{ backgroundColor: cardsBackgroundColor }}
      >
        <p
          className={`${
            isBellow1200px ? (isBellow400px ? "fs-14px" : "fs-18px") : "fs-22px"
          } white weight-3 lh-1_2`}
        >
          Current Prize Pool
        </p>
        <p
          className={`${
            isBellow1200px ? (isBellow400px ? "fs-16px" : "fs-22px") : "fs-32px"
          } yellow weight-6 lh-1_2`}
        >
          {currentPrizePool}
        </p>
      </div>
    </div>
  );
};

export default Stats;
