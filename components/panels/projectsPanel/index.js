import { MDBCol, MDBContainer, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import React, { useState } from "react";
import styles from "./projectsPanel.module.css";
import ProjectCard from "../../elements/projectCard";

export default function ProjectsPanel(props) {
  return (
    <MDBContainer id="portfolio-content" fluid>
      <MDBRow>
        <MDBCol>
          <MDBTypography tag="h1" className="text-center">
            Projects
          </MDBTypography>
        </MDBCol>
      </MDBRow>
      <MDBRow>{/* FILTER BLOCK */}</MDBRow>
      <ProjectCard />
      {/* MAP PROJECTS CARDS HERE */}
    </MDBContainer>
  );
  //
}
