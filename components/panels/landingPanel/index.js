import React, { useState, useEffect } from "react";
//import styles from "./landingPanel.module.css";

import { FullScreenIntro } from "..";
import MobileBanner from "../../elements/mobileBanner";

export function LandingPanel({ isMobile }) {
  return (
    <>
      {isMobile === true ? (
        <MobileBanner />
      ) : isMobile === false ? (
        <FullScreenIntro />
      ) : (
        <></>
      )}
    </>
  );
}
