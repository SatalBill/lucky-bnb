import React from "react";
import styles from "./GradientButton.module.css";

function GradientButton({
  title,
  link,
  style,
  type = "button",
  fontSize = "fs-14px",
}) {
  const openLink = (e) => {
    window.open(e, "_blank")
  }
  return (
    <button
      className={`${styles.btn} ${fontSize} weight-5 pointer white`}
      style={style}
      type={type}
      onClick={() => openLink(link)}
    >
      {title}
    </button>
  );
}

export default GradientButton;
