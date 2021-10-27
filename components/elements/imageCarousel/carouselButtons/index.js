import React from "react";
import styles from "./carouselButtons.module.css";

export const DotButton = ({ light, selected, onClick }) => {
  return (
    <button
      className={`${styles.dotButton} ${light ? styles.light : ""}  ${
        selected ? styles.selected : ""
      }`}
      onClick={onClick}
    >
      <span className="visually-hidden">Carousel Image Selector</span>
    </button>
  );
};

export const NextButton = () => {
  return <></>;
};

export const PrevButton = () => {
  return <></>;
};
