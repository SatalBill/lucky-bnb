import useMediaQuery from "hooks/useMediaQuery";
import React from "react";

function Title({ title, style, className }) {
  const isBellow760px = useMediaQuery("(max-width : 760px)");
  return (
    <h1
      className={`${
        isBellow760px ? "fs-30px" : "fs-44px"
      }  white weight-7 ${className}`}
      style={style}
    >
      {title}
    </h1>
  );
}

export default Title;
