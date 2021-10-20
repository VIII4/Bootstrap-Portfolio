// Modules
import React, { useState } from "react";

// Styles
import styles from "./contactPanel.module.css";

// Elements
import { MDBContainer, MDBRow, MDBCol, MDBTypography } from "mdb-react-ui-kit";
import { ContactForm } from "../../elements";

// Blocks
// import {} from "./blocks";

export function ContactPanel(props) {
  return (
    <MDBContainer fluid className={styles.contactPanel}>
      <MDBRow center>
        <MDBCol size="12" md="8" lg="6" className="text-center">
          <MDBTypography tag="h2" colorText="light">
            Reach Out
          </MDBTypography>
          <MDBTypography tag="h6" colorText="light">
            Interested in Collaborating or ...
          </MDBTypography>
        </MDBCol>
      </MDBRow>
      <MDBRow center>
        <MDBCol size="12" md="8" lg="6">
          <ContactForm />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
