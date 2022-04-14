import GradientButton from "components/GradientButton/GradientButton";
import useMediaQuery from "hooks/useMediaQuery";
import React from "react";
import styles from "./Introducing.module.css";

function Introducing() {
  const isBellow860px = useMediaQuery("(max-width : 860px)");

  return (
    <div className="container-wrapper">
      <div className="mb-20px">

      </div>
      <div className="mb-20px">
        <div className={styles.headings}>
          <div className="mb-20px">
            <h1 className={`text-center ${isBellow860px ? "fs-28px" : "fs-56px"}  white weight-7 lh-1_2`}>
              Introducing LuckyBNB!
            </h1>
            <h2 className={`text-center ${isBellow860px ? "fs-28px" : "fs-56px"} white weight-4 lh-1_3`}>
              Brought to you by Lil’ Luck
            </h2>
          </div>

          <p className={`${isBellow860px ? "fs-14px" : "fs-18px"} white weight-4 lh-1_7 text-center`}>
            Awarding BNB jackpot prize tokens every six hours and rewarding
            holders with progressive weekly and monthly sweepstakes draws and
            reflections!
          </p>
        </div>
      </div>

      <div className={styles.btns}>
        <GradientButton title="Pancakeswap" link="https://pancakeswap.finance/swap?outputCurrency=0x18Ec883176B8809A807C7bA14AC09F5EF18FdF04" />
        <GradientButton title="BSC Scan" link="https://bscscan.com/token/0x18Ec883176B8809A807C7bA14AC09F5EF18FdF04" />
        <GradientButton title="DEXTOOLS" link="https://www.dextools.io/app/bsc/pair-explorer/0xf0ad3d6be61aa3c455edf50bdb36ff6317d23b45" />
      </div>
    </div>
  );
}

export default Introducing;
