import React, { useState } from "react";
import Dynamic from "next/dynamic";
import styles from "./projectsPanel.module.css";

// Elements
import { ProjectCard, DetailCard } from "../../elements";
import { MDBCol, MDBContainer, MDBRow, MDBTypography } from "mdb-react-ui-kit";
const CustomModal = Dynamic(() => import("../../elements/customModal"), {
  ssr: false,
});

//Project Data
import { projects } from "../../../data";

export function ProjectsPanel(props) {
  const [allProjects, setAllProjects] = useState(projects);
  const [selectedProject, setSelectedProject] = useState(null);
  const [tabActive, setTabActive] = useState("tab1");
  const [showModal, setShowModal] = useState(false);

  const getOpenState = (e) => setShowModal(e);

  //Fliter Tab Handler
  const handleTabClick = (e, value) => {
    console.log(e.currentTarget);
    if (value === tabActive) {
      return;
    }

    const navLinks = document
      .getElementById("filterTabs")
      .getElementsByClassName("nav-link");

    console.log(navLinks);
    for (let i = 0; i < navLinks.length; i++) {
      const element = navLinks[i];
      element.classList.remove("active-tab");
    }

    e.currentTarget.classList.add("active-tab");
    setTabActive(value);
  };

  const handleDetailClick = (id) => {
    // When details button is clicked modal pops up with project bullets
    // TESTING SLIDE IN ANIMATION
    // let card = document.querySelector(`[data-project=${id}]`);
    // card.classList.add("slideIn");
    console.log(id);
    let project = allProjects.find((p) => {
      return p.id === id;
    });
    setSelectedProject(project);
    setShowModal(!showModal);
  };
  const closeModal = () => {
    setShowModal(false);
    //setSelectedProject(null);
  };

  return (
    <>
      <MDBContainer id="portfolio-content" fluid className="p-3">
        <MDBRow center>
          <MDBCol
            size="11"
            md="10"
            lg="6"
            xl="4"
            className={styles.headerWrapper}
          >
            <MDBTypography tag="h2" className="text-center m-0">
              My Works
            </MDBTypography>
          </MDBCol>
        </MDBRow>
        <MDBRow center className="p-2">
          <MDBCol center size="12" md="10" lg="6" xl="4" className="p-0">
            <ul id="filterTabs" className="nav nav-pills nav-justified mx-auto">
              <li className="nav-item">
                <a
                  className="nav-link active-tab "
                  aria-current="page"
                  onClick={(e) => {
                    handleTabClick(e, "tab1");
                  }}
                >
                  All
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link "
                  onClick={(e) => {
                    handleTabClick(e, "tab2");
                  }}
                >
                  React
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link "
                  onClick={(e) => {
                    handleTabClick(e, "tab3");
                  }}
                >
                  WebXR
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
        {allProjects.map((project) => {
          if (project.deployed.active) {
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
                handleDetailClick={() => {
                  handleDetailClick(project.id);
                }}
              />
            );
          }
        })}
      </MDBContainer>
      <MDBContainer fluid className={`${styles.devWrapper} bg-dark`}>
        {/* IN DEVELOPMENT  */}
        <MDBContainer fluid className={styles.devPanel}>
          <MDBRow center>
            <MDBCol size="12" md="4">
              <MDBTypography tag="h3" className={styles.devHeader}>
                In Development
              </MDBTypography>
              <MDBTypography tag="h6" className="text-center text-light">
                Check out These Projects in the Works!
              </MDBTypography>
            </MDBCol>
          </MDBRow>
          {allProjects.map((project) => {
            if (!project.deployed.active) {
              return (
                <ProjectCard
                  light
                  key={project.id}
                  title={project.title}
                  id={project.id}
                  imgSrc={project.imgUrl.hero}
                  desc={project.desc}
                  deployed={project.deployed}
                  repo={project.repo}
                  type={project.type}
                  tags={project.tags}
                  handleDetailClick={() => {
                    handleDetailClick(project.id);
                  }}
                />
              );
            }
          })}
        </MDBContainer>
      </MDBContainer>
      <CustomModal
        showModal={showModal}
        closeModal={closeModal}
        getOpenState={getOpenState}
      >
        <DetailCard selectedProject={selectedProject} />
      </CustomModal>
    </>
    // Details Modal //
  );
  //
}
