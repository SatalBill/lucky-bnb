import React, { useEffect, useRef, useState } from "react";
import Web3 from 'web3'
import styles from "./UntilNextDraw.module.css";
import sparkel from "assets/images/sparkel.png";
import useMediaQuery from "hooks/useMediaQuery";
import TimerBox from "components/TimerBox/TimerBox";
import Stats from "components/Stats/Stats";
import useCountdownTimer from "hooks/useCountdownTimer";
import luckyBnbAbi from "abi/luckyBnbAbi.json"

const LuckyBnbAddress = "0x18ec883176b8809a807c7ba14ac09f5ef18fdf04"

function UntilNextDraw(props) {
  const [nextTime, setNextTime] = useState("")
  const [nextDrawing, setNextDrawing] = useState("")
  const [timerDays, setTimerDays] = useState("");
  const [timerHours, setTimerHours] = useState("");
  const [timerMinutes, setTimerMinutes] = useState("");
  const [timerSeconds, setTimerSeconds] = useState("");

  // let temp = props.nextDrawingTime
  let myInterval = useRef();

  const startTimer = (deadline) => {
    const countdownDate = new Date(deadline).getTime();

    myInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        // stop our timer
        clearInterval(myInterval.current);
      } else {
        // update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    const start = async () => {
      try {
        // initiate web3
        window.web3 = new Web3("https://bsc-dataseed.binance.org/");
        await window.ethereum.enable()
        const web3 = window.web3
        const luckyBnbContracts = new web3.eth.Contract(luckyBnbAbi, LuckyBnbAddress)

        // next drawing time
        const nextTimeTmp = await luckyBnbContracts.methods.nextDrawing().call()
        const nextDrawingSecond = new Date(parseInt(nextTimeTmp) * 1000)
        const tmp = nextDrawingSecond.toString().substring(0, 24)
        console.log('===========', tmp);
        setNextDrawing(tmp)
        startTimer(tmp)
        
      } catch (error) {
        console.log('err==>>', error)
      }

    }
    start()
    return () => {
      clearInterval(myInterval.current)
    }
  }, [])

  let { days, hours, minutes, seconds } = useCountdownTimer({
    providedDate: nextDrawing,
  });

  const isBellow860px = useMediaQuery("(max-width : 860px)");

  const timer2 = useCountdownTimer({
    providedDate: "April 3, 2022 00:00:00",
  });
  const timer3 = useCountdownTimer({
    providedDate: "April 13, 2022 00:00:00",
  });
  const cutDigits = (num) => {
    return num.toString().substring(0, 5)
  }

  return (
    <div className="container-wrapper">
      <div className="mb-180px">
        <h1
          className={`text-center ${isBellow860px ? "fs-24px" : "fs-32px"
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
                  {timerDays < 10 ? "0" : ""}
                  {timerDays}
                </>
              }
            />
            <TimerBox
              title={`${isBellow860px ? "Hrs" : "Hours"}`}
              count={
                <>
                  {timerHours < 10 ? "0" : ""}
                  {timerHours}
                </>
              }
            />
            <TimerBox
              title={`${isBellow860px ? "Min" : "Minutes"}`}
              count={
                <>
                  {" "}
                  {timerMinutes < 10 ? "0" : ""}
                  {timerMinutes}
                </>
              }
            />
            <TimerBox
              title={`${isBellow860px ? "Sec" : "Seconds"}`}
              count={
                <>
                  {timerSeconds < 10 ? "0" : ""}
                  {timerSeconds}
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
                {timerDays < 10 ? "0" : ""}
                {timerDays}
              </>
            ),
            hours: (
              <>
                {timerHours < 10 ? "0" : ""}
                {timerHours}
              </>
            ),
            minutes: (
              <>
                {timerMinutes < 10 ? "0" : ""}
                {timerMinutes}
              </>
            ),
            seconds: (
              <>
                {timerSeconds < 10 ? "0" : ""}
                {timerSeconds}
              </>
            ),
          }}
          currentPrizePool={`${cutDigits(parseFloat(props.prizePool).toFixed(4))} BNB`}
          cardsBackgroundColor="#911c1c"
        />
        {/* <Stats
          duration="Monthly"
          type="PowerBNB Draw"
          timer={{
            days: (
              <>
                {timer3?.days < 10 ? "0" : ""}
                {timer3?.days}
              </>
            ),
            hours: (
              <>
                {timer3?.hours < 10 ? "0" : ""}
                {timer3?.hours}
              </>
            ),
            minutes: (
              <>
                {timer3?.minutes < 10 ? "0" : ""}
                {timer3?.minutes}
              </>
            ),
            seconds: (
              <>
                {timer3?.seconds < 10 ? "0" : ""}
                {timer3?.seconds}
              </>
            ),
          }}
          currentPrizePool="32.0154 BNB"
          cardsBackgroundColor="#202020"
        /> */}
      </div>
    </div>
  );
}

export default UntilNextDraw;
