import { MDBContainer, MDBRow, MDBCol, MDBTypography } from "mdb-react-ui-kit";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./mySkillsPanel.module.css";

export function MySkillsPanel() {
  //
  return (
    <MDBContainer fluid className={`${styles.skillsBackground} `}>
      <MDBRow className="text-center p-1">
        <MDBTypography tag="h4" className="text-muted ">
          Designer
        </MDBTypography>
      </MDBRow>
      <MDBRow className={styles.skillsWrapper}>
        <MDBCol /* TO DO: STYLE To make element shift aboove background */
          className=""
        >
          <MDBRow className="rounded bg-light text-center p-">
            <MDBTypography tag="h4" className="text-muted m-0">
              Designer List...
            </MDBTypography>
          </MDBRow>
          <MDBRow center className="my-2">
            <MDBTypography tag="h4" className="text-muted m-0 text-center">
              Developer
            </MDBTypography>
          </MDBRow>
          <MDBRow className="rounded bg-light text-center p-">
            <MDBTypography tag="h4" className="text-muted m-0">
              Designer List...
            </MDBTypography>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
