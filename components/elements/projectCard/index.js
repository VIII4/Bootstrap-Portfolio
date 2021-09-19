import { MDBCol, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import React from "react";
import styles from "./projectCard.module.css";

// Blocks
import ButtonBlock from "./buttonBlock";
import ImageBlock from "./imageBlock";

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
  deployedLink,
  repoLink,
  handleDetailClick,
  imgSrc,
}) {
  return (
    <MDBRow center id={id} className={styles.projectCard} /*data-project={id}*/>
      <MDBCol
        size="12"
        md="8"
        lg="4"
        xl="2"
        className="order-last order-lg-first mx-lg-2"
      >
        {/* Title, Desc, Buttons Block */}
        <MDBRow>
          <MDBTypography tag="h2" data-project={id}>
            {title}
          </MDBTypography>
          <MDBTypography tag="p">{desc}</MDBTypography>
          <ButtonBlock
            projectId={id}
            deployed={deployed}
            deployedLink={deployedLink}
            repoLink={repoLink}
            handleDetailClick={handleDetailClick}
          />
        </MDBRow>
      </MDBCol>
      <MDBCol size="12" md="8" lg="4" xl="3" className="my-3 my-lg-1 mx-lg-2">
        {/* Images */}
        <ImageBlock imgSrc={imgSrc} />
      </MDBCol>
    </MDBRow>
  );
}
