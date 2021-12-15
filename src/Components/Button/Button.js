import React from "react";

import styles from "./Button.module.css";

function Button({
  content,
  onClick,
  mainColor,
  isNotBorder,
  fontSize = "var(--font-20)",
  wrapperClass,
  id,
}) {
  return (
    <button
      id={id}
      className={
        styles.Button +
        " " +
        wrapperClass +
        " " +
        (isNotBorder ? "" : styles.Hoverable)
      }
      style={{
        "--main-color": mainColor,
        fontSize: fontSize,
      }}
      onClick={onClick}
    >
      {content}
    </button>
  );
}

export default Button;
