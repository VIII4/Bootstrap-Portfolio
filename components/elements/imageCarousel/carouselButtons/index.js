import React, { useState } from "react";
import {
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBBtn,
  MDBBtnGroup,
} from "mdb-react-ui-kit";

import styles from "./carouselButtons.module.css";

export const DotButton = ({ light, selected, onClick }) => {
  return (
    <button
      className={`${styles.dotButton} ${light ? styles.light : ""}  ${
        selected ? styles.selected : ""
      }`}
      onClick={onClick}
    ></button>
  );
};

export const NextButton = () => {
  return <></>;
};

export const PrevButton = () => {
  return <></>;
};
