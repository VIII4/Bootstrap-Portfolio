import { MDBIcon } from "mdb-react-ui-kit";
import React from "react";
import styles from "./fullscreenIconCanvas.module.css";

export default function FullscreenIconCanvas({ handleContactClick }) {
  return (
    <>
      <div
        className={`${styles.canvasOverlay} ${styles.canvasSocial} align-self-end`}
      >
        <ul className={styles.socialList}>
          <li className={styles.socialListItem}>
            <a href="https://github.com/VIII4">
              <MDBIcon
                fab
                size="3x"
                icon="github"
                className={styles.socialListIcon}
              />
              <span className="visually-hidden">Git Hub</span>
            </a>
          </li>
          <li className={styles.socialListItem}>
            <a href="https://www.linkedin.com/in/iyanlaylor">
              <MDBIcon
                fab
                size="3x"
                icon="linkedin"
                className={styles.socialListIcon}
              />
              <span className="visually-hidden">Linkedin</span>
            </a>
          </li>
          <li className={styles.socialListItem}>
            <a href="https://stackoverflow.com/users/12654186/">
              <MDBIcon
                fab
                size="3x"
                icon="stack-overflow"
                className={styles.socialListIcon}
              />
              <span className="visually-hidden">Stack Overflow</span>
            </a>
          </li>
          <li className={styles.socialListItem}>
            <a href="https://codepen.io/viii4">
              <MDBIcon
                fab
                size="3x"
                icon="codepen"
                className={styles.socialListIcon}
              />
            </a>
            <span className="visually-hidden">Code Pen</span>
          </li>
        </ul>
      </div>
      <div className={`${styles.canvasOverlay}  align-self-end`}>
        <span
          className={`${styles.canvasContact} ${styles.socialListItem} mx-auto mb-3`}
        >
          <a
            data-toggle="modal"
            data-target="#contactFormModal"
            onClick={handleContactClick}
          >
            <MDBIcon
              far
              size="3x"
              icon="comment-alt"
              className={styles.socialListIcon}
            />
          </a>
        </span>
      </div>
    </>
  );
}
