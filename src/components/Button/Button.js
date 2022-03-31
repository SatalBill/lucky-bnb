import React from "react";
import styles from "./Button.module.css";

function Button({ title, style, type = "button", fontSize = "fs-14px" }) {
  return (
    <button
      className={`${styles.btn} ${fontSize} weight-5 pointer`}
      style={style}
      type={type}
    >
      {title}
    </button>
  );
}

export default Button;
