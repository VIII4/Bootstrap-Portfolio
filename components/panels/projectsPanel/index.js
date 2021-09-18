import React, { useState } from "react";
import styles from "./projectsPanel.module.css";

// Elements
import ProjectCard from "../../elements/projectCard";
import { MDBCol, MDBContainer, MDBRow, MDBTypography } from "mdb-react-ui-kit";

//Project Data
import { projects } from "../../../data";

export default function ProjectsPanel(props) {
  return (
    <MDBContainer id="portfolio-content" fluid className="my-2">
      <MDBRow>
        <MDBCol>
          <MDBTypography tag="h1" className="text-center">
            Projects
          </MDBTypography>
        </MDBCol>
      </MDBRow>
      <MDBRow>{/* FILTER BLOCK */}</MDBRow>
      {projects.map((project) => {
        return (
          <ProjectCard
            title={project.title}
            desc={project.desc}
            deployed={project.deployed}
            deployLink={project.deployedLink}
            repoLink={project.repoLink}
          />
        );
      })}
    </MDBContainer>
  );
  //
}
