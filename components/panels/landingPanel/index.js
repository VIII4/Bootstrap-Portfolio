import React, { useState, useEffect } from "react";
import styles from "./landingPanel.module.css";

import { FullScreenIntro } from "..";
import MobileBanner from "../../elements/mobileBanner";
import { IsMobileCheck } from "../../../utilities/app";

export function LandingPanel(props) {
  const [isMobile, setIsMobile] = useState(false);

  const onResize = () => {
    setIsMobile(IsMobileCheck);
  };

  useEffect(() => {
    setIsMobile(IsMobileCheck);

    const resize = () => {
      onResize();
    };

    if (window) {
      window.addEventListener("resize", resize);
    }

    return () => {
      if (window) {
        window.removeEventListener("resize", resize);
      }
    };
  });

  return <>{isMobile ? <MobileBanner /> : <FullScreenIntro />}</>;
}
