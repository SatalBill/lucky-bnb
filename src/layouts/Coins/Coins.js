import React from "react";
import styles from "./Coins.module.css";
import coins from "assets/images/coins.png";

function Coins() {
  return (
    <div className={styles.coins}>
      <img src={coins} className="w-full floating" alt="" />
    </div>
  );
}

export default Coins;
