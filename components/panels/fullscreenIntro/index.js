import { MDBContainer } from "mdb-react-ui-kit";
import React, { useState } from "react";
import styles from "./fullscreenIntro.module.css";

// Elements

import FullscreenVideo from "../../elements/fullscreenVideo";
import FullscreenOverlay from "../../elements/fullscreenOverlay";
import FullscreenDisplayText from "../../elements/fullscreenDisplayText";
import FullscreenIconCanvas from "../../elements/fullscreenIconCanvas";

export default function FullScreenIntro(props) {
  // TO DO: HANDLE MODAL
  const handleContactClick = () => {
    // alert("test");
  };

  return (
    <div className={`${styles.view}`}>
      <FullscreenVideo />
      <FullscreenOverlay>
        <FullscreenDisplayText />
        <FullscreenIconCanvas handleContactClick={handleContactClick} />
      </FullscreenOverlay>
    </div>
  );
}
