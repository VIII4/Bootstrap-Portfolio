import { MDBCol, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import React from "react";
import styles from "./projectCard.module.css";

// Blocks
import ButtonBlock from "./buttonBlock";

/*
BREAK DOWN


    CARD
        Project Title Block *
        Project Desc Block *
        Button Block *
            Details Button *
            Deployed Button *
            Github Button *
        Visual Display Block
            Media frame
                Image




*/

export default function ProjectCard({
  tags,
  title,
  desc,
  deployed,
  deployLink,
  repoLink,
  handledetailClick,
}) {
  return (
    <MDBRow className={styles.projectCard} data-tags={tags}>
      <MDBCol size="12" lg="4" className="order-last order-lg-first">
        {/* Title, Desc, Buttons Block */}
        <MDBRow>
          <MDBTypography tag="h2">{title}</MDBTypography>
          <MDBTypography tag="p">{desc}</MDBTypography>
          <ButtonBlock
            deployed={deployed}
            deployLink={deployLink}
            repoLink={repoLink}
            handledetailClick={handledetailClick}
          />
        </MDBRow>
      </MDBCol>
      <MDBCol>{/* Images */}</MDBCol>
    </MDBRow>
  );
}
