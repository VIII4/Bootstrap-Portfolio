import React from "react";
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
  light,
  projectId,
  deployed,
  repo,
  handleDetailClick,
}) {
  return (
    <>
      <MDBBtnGroup shadow="0" size="sm">
        <MDBBtn
          color={light ? "light" : "dark"}
          data-project={projectId}
          tag="a"
          className={styles.btnProject}
          onClick={() => {
            handleDetailClick(projectId);
          }}
        >
          Details
        </MDBBtn>
        {deployed.active && (
          <MDBBtn
            tag="a"
            color={light ? "light" : "dark"}
            href={deployed.link}
            className={styles.btnProject}
          >
            {deployed.active ? `Deployed` : `Coming Soon`}
          </MDBBtn>
        )}

        {repo.active ? (
          <MDBBtn
            tag="a"
            color={light ? "light" : "dark"}
            href={repo.active ? repo.link : "javascript:;"}
          >
            <MDBIcon fab icon="github" size="2x"></MDBIcon>
            <span className="visually-hidden">Repository</span>
          </MDBBtn>
        ) : (
          <MDBTooltip
            toolTipTag="a"
            wrapperProps={{
              color: light ? "light" : "dark",
              href: "javascript:;",
            }}
            title={`${!repo.active ? "Disabled: Repo is Private" : ""}`}
            href={repo.active ? repo.link : "javascript:;"}
          >
            <MDBIcon fab icon="github" size="2x"></MDBIcon>
            <span className="visually-hidden">Repository</span>
          </MDBTooltip>
        )}
      </MDBBtnGroup>
    </>
  );
}
