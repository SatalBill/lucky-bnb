import React from "react";
import styles from "./SocialLink.module.css";

const SocialLink = ({ icon, style, link = "/", target = "_self" }) => {
  return (
    <a
      href={link}
      target={target}
      className={`${styles.socialLink}`}
      style={style}
    >
      {icon}
    </a>
  );
};

export default SocialLink;
