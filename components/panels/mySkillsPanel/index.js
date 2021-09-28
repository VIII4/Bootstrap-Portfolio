import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTypography,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./mySkillsPanel.module.css";

export function MySkillsPanel() {
  //
  return (
    <MDBContainer fluid className={`${styles.skillsBackground}`}>
      <MDBRow center className={styles.skillsHeader}>
        <MDBCol className="text-center ">
          <MDBTypography tag="h4" className="text-muted ">
            Design
          </MDBTypography>
        </MDBCol>
      </MDBRow>
      <MDBRow center className="mb-2 ">
        <MDBCol
          size="12"
          md="8"
          lg="8"
          className="rounded bg-light text-center p-2"
        >
          <MDBListGroup flush>
            <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
            <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
            <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
            <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
            <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
            <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
          </MDBListGroup>
        </MDBCol>
      </MDBRow>
      <MDBRow center className={styles.skillsHeader}>
        <MDBCol className="text-center">
          <MDBTypography tag="h4" className="text-muted ">
            Development
          </MDBTypography>
        </MDBCol>
      </MDBRow>
      <MDBRow center className="mb-5 ">
        <MDBCol
          size="12"
          md="8"
          lg="8"
          className="rounded bg-light text-center p-3"
        >
          <MDBListGroup flush>
            <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
            <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
            <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
            <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
            <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
            <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
          </MDBListGroup>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
