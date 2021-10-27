import React from "react";
import { MDBTypography } from "mdb-react-ui-kit";
import styles from "./fullscreenDisplayText.module.css";

export default function fullscreenDisplayText(props) {
  return (
    <div className="align-self-center text-center mx-auto w-75">
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
