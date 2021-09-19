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
  id,
  title,
  desc,
  deployed,
  deployLink,
  repoLink,
  handleDetailClick,
}) {
  return (
    <MDBRow id={id} className={styles.projectCard} /*data-project={id}*/>
      <MDBCol size="12" lg="4" className="order-last order-lg-first">
        {/* Title, Desc, Buttons Block */}
        <MDBRow>
          <MDBTypography tag="h2" data-project={id}>
            {title}
          </MDBTypography>
          <MDBTypography tag="p">{desc}</MDBTypography>
          <ButtonBlock
            projectId={id}
            deployed={deployed}
            deployLink={deployLink}
            repoLink={repoLink}
            handleDetailClick={handleDetailClick}
          />
        </MDBRow>
      </MDBCol>
      <MDBCol>{/* Images */}</MDBCol>
    </MDBRow>
  );
}
