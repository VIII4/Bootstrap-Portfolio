import React, { useState } from "react";
import { MDBIcon, MDBBtn, MDBBtnGroup, MDBTooltip } from "mdb-react-ui-kit";
import styles from "./buttonBlock.module.css";

/**
 * @name ButtonBlock
 * @description Button group for projects, recieve props for href links and also handler for details btn click
 * @param {string} deployedLink href src for deployed url
 * @param {string} detailTag data-tag for modal identifier
 * @param {string} repoLink href src for Github repo
 * @param {function} handleDetailClick handler for when details button is clicked
 *
 */
export default function ButtonBlock({
  projectId,
  deployed,
  repo,
  handleDetailClick,
}) {
  const [hovering, setHovering] = useState(false);
  // On hover, create tooltip at mouse position for private github

  //TO DO: Create on hover handler
  const handleOnHover = (e) => {
    console.log("mouse location:", e.clientX, e.clientY);
    // TO DO: check if git is active
    if (!repo.active) {
      // TO DO: Get Mouse position
    }
  };

  const handleExitHover = () => {
    //
  };

  const handleClick = () => {
    //
    alert("private repo");
  };

  return (
    <>
      <MDBBtnGroup shadow="0" size="sm">
        <MDBBtn
          color="dark"
          data-project={projectId}
          tag="a"
          className={styles.btnProject}
          onClick={() => {
            handleDetailClick(projectId);
          }}
        >
          Details
        </MDBBtn>
        <MDBBtn
          tag="a"
          color="dark"
          href={deployed.link}
          className={`${styles.btnProject} ${
            !deployed.active ? "disabled" : ""
          }`}
        >
          Deployed
        </MDBBtn>
        {repo.active ? (
          <MDBBtn
            onMouseOver={handleOnHover}
            onClick={handleClick}
            tag="a"
            color="dark"
            href={repo.active ? repo.link : "javascript:;"}
          >
            <MDBIcon fab icon="github" size="2x"></MDBIcon>
          </MDBBtn>
        ) : (
          <MDBTooltip
            toolTipTag="a"
            wrapperProps={{ color: "dark", href: "javascript:;" }}
            title={`${!repo.active ? "Disabled: Repo is Private" : ""}`}
            href={repo.active ? repo.link : "javascript:;"}
          >
            <MDBIcon fab icon="github" size="2x"></MDBIcon>
          </MDBTooltip>
        )}
      </MDBBtnGroup>

      <div></div>
    </>
  );
}
