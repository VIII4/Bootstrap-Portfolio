import React from "react";
import { MDBIcon, MDBBtn, MDBBtnGroup } from "mdb-react-ui-kit";
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
  deployedLink,
  repoLink,
  handleDetailClick,
}) {
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
          href={deployedLink}
          className={`${styles.btnProject} ${!deployed ? "disabled" : ""}`}
        >
          Deployed
        </MDBBtn>
        <MDBBtn tag="a" color="dark" href={repoLink}>
          <MDBIcon fab icon="github" size="2x"></MDBIcon>
        </MDBBtn>
      </MDBBtnGroup>
    </>
  );
}
