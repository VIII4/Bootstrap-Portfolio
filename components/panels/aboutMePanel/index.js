import { MDBContainer, MDBRow, MDBCol, MDBTypography } from "mdb-react-ui-kit";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./aboutMePanel.module.css";

export function AboutMePanel() {
  //
  return (
    <>
      <MDBContainer fluid className="p-4 mt-2 ">
        {/* White BG  */}
        <MDBRow center className={` mt-3 p-3`}>
          <MDBCol
            size="12"
            md="8"
            lg="4"
            className={`${styles.aboutMeBackground}`}
          >
            <MDBRow center className={`${styles.aboutMeHeader} `}>
              <MDBCol
                size="10"
                className="rounded border border-dark border-2 bg-light text-center p-2"
              >
                <MDBTypography tag="h5" className="m-0">
                  Hello, My name is Iyan. I’m a Developer, Designer and an
                  Entrepreneur.
                </MDBTypography>
              </MDBCol>
            </MDBRow>
            <MDBRow center className={styles.imgWrapper}>
              <img
                src="/images/biopic/portrait.png"
                className={styles.imgPortrait}
              />
            </MDBRow>
            <MDBRow center className="text-center p-2 mb-4">
              <MDBCol size="12" md="10">
                <MDBTypography tag="h5" className="text-dark m-0">
                  I love to create, code and learn, what better way to do all
                  three than to be a full stack developer. When I’m not behind
                  the blue lights, I’m cycling with my wife or gaming with my
                  son. Currently I am creating web based VR experiences with the
                  company I founded, ixport Technologies, but always looking for
                  opportunities to grow and/or to collaborate. Please don't
                  hesitate to reach out.
                </MDBTypography>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
