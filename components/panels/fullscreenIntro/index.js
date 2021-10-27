import React, { useState } from "react";
import Dynamic from "next/dynamic";
import styles from "./fullscreenIntro.module.css";

// Elements

import FullscreenVideo from "../../elements/fullscreenVideo";
import FullscreenOverlay from "../../elements/fullscreenOverlay";
import FullscreenDisplayText from "../../elements/fullscreenDisplayText";
import FullscreenIconCanvas from "../../elements/fullscreenIconCanvas";
import ParticlesCanvas from "../../elements/particlesCanvas";

const ContactModal = Dynamic(() => import("../../elements/contactModal"), {
  ssr: false,
});

export function FullScreenIntro(props) {
  const [showModal, setShowModal] = useState(false);

  // TO DO: HANDLE MODAL
  const handleContactClick = () => {
    setShowModal(!showModal);
  };

  //Method
  const closeModal = () => {
    setShowModal(false);
  };

  const getOpenState = (e) => setShowModal(e);

  return (
    <div id="fullscreen-intro" className={`${styles.view}`}>
      <FullscreenVideo />
      <FullscreenOverlay>
        <ParticlesCanvas />
        <FullscreenDisplayText />
        <FullscreenIconCanvas handleContactClick={handleContactClick} />
      </FullscreenOverlay>
      <ContactModal
        showModal={showModal}
        closeModal={closeModal}
        getOpenState={getOpenState}
      />
    </div>
  );
}
