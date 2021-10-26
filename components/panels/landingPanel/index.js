import React, { useState, useEffect } from "react";
import styles from "./landingPanel.module.css";

import { FullScreenIntro } from "..";
import MobileBanner from "../../elements/mobileBanner";
//import { IsMobileCheck } from "../../../utilities/app";

export function LandingPanel({ isMobile }) {
  return <>{isMobile ? <MobileBanner /> : <FullScreenIntro />}</>;
}
