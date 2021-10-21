import React, { useState } from "react";
import Dynamic from "next/dynamic";
import styles from "./fullscreenIntro.module.css";

// Elements
import { MDBContainer } from "mdb-react-ui-kit";
import FullscreenVideo from "../../elements/fullscreenVideo";
import FullscreenOverlay from "../../elements/fullscreenOverlay";
import FullscreenDisplayText from "../../elements/fullscreenDisplayText";
import FullscreenIconCanvas from "../../elements/fullscreenIconCanvas";

const ContactModal = Dynamic(() => import("../../elements/contactModal"), {
  ssr: false,
});

export function FullScreenIntro(props) {
  const [showModal, setShowModal] = useState(false);

  // TO DO: HANDLE MODAL
  const handleContactClick = () => {
    toggleShow();
  };

  //Toggle Modal
  const toggleShow = () => setShowModal(!showModal);

  //Methos
  const closeModal = () => {
    toggleShow();
  };

  return (
    <div className={`${styles.view}`}>
      <FullscreenVideo />
      <FullscreenOverlay>
        <FullscreenDisplayText />
        <FullscreenIconCanvas handleContactClick={handleContactClick} />
      </FullscreenOverlay>
      <ContactModal showModal={showModal} closeModal={closeModal} />
    </div>
  );
}
