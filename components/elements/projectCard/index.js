import { MDBCol, MDBContainer, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import React from "react";
import styles from "./projectCard.module.css";

// Blocks
import ButtonBlock from "./buttonBlock";
import ImageBlock from "./imageBlock";

//Elements
import ImageCarousel from "../imageCarousel";

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
  repo,
  handleDetailClick,
  imgSrc,
}) {
  return (
    <MDBContainer fluid id={id} className={styles.projectCard}>
      <MDBRow center>
        <MDBCol size="12" md="8" lg="4" xl="3" className="my-3 my-lg-1 mx-lg-2">
          {/* Images 
              TO DO: Send PROPS data to carousel for image slides...
          
          */}
          <ImageCarousel imgSrc={imgSrc} />
          {/* <ImageBlock imgSrc={imgSrc} /> */}
        </MDBCol>
      </MDBRow>
      <MDBRow center /*data-project={id}*/>
        <MDBCol center size="12" md="8" lg="6" xl="4" className=" ">
          {/* Title, Desc, Buttons Block */}
          <MDBRow>
            <MDBTypography tag="h2" data-project={id}>
              {title}
            </MDBTypography>
            <MDBTypography tag="p">{desc}</MDBTypography>
            <ButtonBlock
              projectId={id}
              deployed={deployed}
              repo={repo}
              handleDetailClick={handleDetailClick}
            />
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
