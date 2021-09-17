import { MDBContainer, MDBTypography } from "mdb-react-ui-kit";
import React, { useState } from "react";
import styles from "./fullscreenDisplayText.module.css";

export default function fullscreenDisplayText(props) {
  return (
    <div class="align-self-center text-center mx-auto w-75">
      <MDBTypography
        tag="div"
        className={`${styles.coverText} display-3 text-white `}
      >
        Web || XR || Native
      </MDBTypography>
      <hr className="text-white" />
      <MDBTypography tag="h5" className={`${styles.coverSubtext} text-muted `}>
        Full Stack Developer and Interactive Content Designer
      </MDBTypography>
    </div>
  );
}
