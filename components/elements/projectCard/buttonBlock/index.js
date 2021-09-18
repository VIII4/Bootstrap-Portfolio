import React from "react";
import { MDBIcon, MDBBtn, MDBBtnGroup } from "mdb-react-ui-kit";
import styles from "./buttonBlock.module.css";

export default function ButtonBlock() {
  return (
    <>
      <MDBBtnGroup shadow="0" size="sm">
        <MDBBtn
          color="dark"
          data-project="Care'n"
          href="#"
          className={styles.btnProject}
        >
          Details
        </MDBBtn>
        <MDBBtn
          color="dark"
          href="https://care-n.herokuapp.com/"
          className={styles.btnProject}
        >
          Deployed
        </MDBBtn>
        <MDBBtn
          color="dark"
          href="https://github.com/VIII4/Care-n-v2"
          className={styles.btnProject}
        >
          <MDBIcon fab icon="github" size="2x"></MDBIcon>
        </MDBBtn>
      </MDBBtnGroup>
    </>
  );
}
