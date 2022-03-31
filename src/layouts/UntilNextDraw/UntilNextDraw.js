import React from "react";
import styles from "./UntilNextDraw.module.css";
import sparkel from "assets/images/sparkel.png";
import useMediaQuery from "hooks/useMediaQuery";
import TimerBox from "components/TimerBox/TimerBox";
import Stats from "components/Stats/Stats";
import useCountdownTimer from "hooks/useCountdownTimer";

function UntilNextDraw() {
  const isBellow860px = useMediaQuery("(max-width : 860px)");
  const { days, hours, minutes, seconds } = useCountdownTimer({
    providedDate: "March 31, 2022 00:00:00",
  });
  const timer2 = useCountdownTimer({
    providedDate: "April 3, 2022 00:00:00",
  });
  const timer3 = useCountdownTimer({
    providedDate: "April 13, 2022 00:00:00",
  });

  return (
    <div className="container-wrapper">
      <div className="mb-180px">
        <h1
          className={`text-center ${
            isBellow860px ? "fs-24px" : "fs-32px"
          }  white weight-7 mb-20px`}
        >
          Until Next Draw
        </h1>
        <div className={`${styles.content} relative `}>
          <img src={sparkel} className={styles.sparkel1} alt="" />
          <img src={sparkel} className={styles.sparkel2} alt="" />
          <h1 className="fs-24px white weight-7 text-center mb-20px">
            Buy now!
          </h1>

          <div className={styles.timer}>
            <TimerBox
              title="Days"
              count={
                <>
                  {days < 10 ? "0" : ""}
                  {days}
                </>
              }
            />
            <TimerBox
              title={`${isBellow860px ? "Hrs" : "Hours"}`}
              count={
                <>
                  {hours < 10 ? "0" : ""}
                  {hours}
                </>
              }
            />
            <TimerBox
              title={`${isBellow860px ? "Min" : "Minutes"}`}
              count={
                <>
                  {" "}
                  {minutes < 10 ? "0" : ""}
                  {minutes}
                </>
              }
            />
            <TimerBox
              title={`${isBellow860px ? "Sec" : "Seconds"}`}
              count={
                <>
                  {seconds < 10 ? "0" : ""}
                  {seconds}
                </>
              }
            />
          </div>
        </div>
      </div>

      <div className={styles.statsWrapper}>
        <Stats
          duration="Weekly"
          type="MegaBNB Draw"
          timer={{
            days: (
              <>
                {timer2.days < 10 ? "0" : ""}
                {timer2.days}
              </>
            ),
            hours: (
              <>
                {timer2.hours < 10 ? "0" : ""}
                {timer2.hours}
              </>
            ),
            minutes: (
              <>
                {timer2.minutes < 10 ? "0" : ""}
                {timer2.minutes}
              </>
            ),
            seconds: (
              <>
                {timer2.seconds < 10 ? "0" : ""}
                {timer2.seconds}
              </>
            ),
          }}
          currentPrizePool="15.2471 BNB"
          cardsBackgroundColor="#911c1c"
        />
        <Stats
          duration="Monthly"
          type="PowerBNB Draw"
          timer={{
            days: (
              <>
                {timer3.days < 10 ? "0" : ""}
                {timer3.days}
              </>
            ),
            hours: (
              <>
                {timer3.hours < 10 ? "0" : ""}
                {timer3.hours}
              </>
            ),
            minutes: (
              <>
                {timer3.minutes < 10 ? "0" : ""}
                {timer3.minutes}
              </>
            ),
            seconds: (
              <>
                {timer3.seconds < 10 ? "0" : ""}
                {timer3.seconds}
              </>
            ),
          }}
          currentPrizePool="32.0154 BNB"
          cardsBackgroundColor="#202020"
        />
      </div>
    </div>
  );
}

export default UntilNextDraw;
