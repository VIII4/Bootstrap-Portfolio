import { MDBCol, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import React from "react";
import styles from "./projectCard.module.css";

// Blocks
import ButtonBlock from "./buttonBlock";

/*
BREAK DOWN


    CARD
        Project Title Block
        Project Desc Block
        Button Block
            Details Button
            Deployed Button
            Github Button
        Visual Display Block
            Media frame
                Image




*/

export default function ProjectCard({ tags }) {
  return (
    <MDBRow className={styles.projectCard} data-tags={tags}>
      <MDBCol size="12" lg="4" className="order-last order-lg-first">
        {/* Title, Desc, Buttons Block */}
        <MDBRow>
          <MDBTypography tag="h2">Care'n</MDBTypography>
          <MDBTypography tag="p">
            A Full Stack MERN application bootstrapped by Create-React-App
            framework and powered by Google Maps API; Care'n provides
            prioritization of community desired change by presenting real-time
            location based issues for users to vote on, with a unique limited
            vote token system.
          </MDBTypography>
          <ButtonBlock />
        </MDBRow>
      </MDBCol>
      <MDBCol>{/* Images */}</MDBCol>
    </MDBRow>
  );
}
