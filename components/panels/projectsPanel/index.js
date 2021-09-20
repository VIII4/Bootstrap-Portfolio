import React, { useState } from "react";
import styles from "./projectsPanel.module.css";

// Elements
import ProjectCard from "../../elements/projectCard";
import { MDBCol, MDBContainer, MDBRow, MDBTypography } from "mdb-react-ui-kit";

//Project Data
import { projects } from "../../../data";

export default function ProjectsPanel(props) {
  const [allProjects, setAllProjects] = useState(projects);

  const handleDetailClick = (id) => {
    // When details button is clicked modal pops up with project bullets
    // TESTING SLIDE IN ANIMATION
    // let card = document.querySelector(`[data-project=${id}]`);
    // card.classList.add("slideIn");
  };

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
      {allProjects.map((project) => {
        return (
          <ProjectCard
            key={project.id}
            title={project.title}
            id={project.id}
            imgSrc={project.imgUrl.hero}
            desc={project.desc}
            deployed={project.deployed}
            repo={project.repo}
            type={project.type}
            tags={project.tags}
            handleDetailClick={handleDetailClick}
          />
        );
      })}
    </MDBContainer>
    // Details Modal //
  );
  //
}
