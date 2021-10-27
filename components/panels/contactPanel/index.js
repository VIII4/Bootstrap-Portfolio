// Modules
import React from "react";

// Styles
import styles from "./contactPanel.module.css";

// Elements
import { MDBContainer, MDBRow, MDBCol, MDBTypography } from "mdb-react-ui-kit";
import { ContactForm } from "../../elements";

// Blocks
// import {} from "./blocks";

export function ContactPanel({ props }) {
  return (
    <MDBContainer fluid className={styles.contactPanel}>
      <MDBRow center>
        <MDBCol size="12" md="8" lg="6" xl="4" className="text-center">
          <MDBTypography tag="h5" colorText="light" className="">
            Interested in collaborating? Want to discuss work and/or partnership
            opportunities?
          </MDBTypography>
        </MDBCol>
      </MDBRow>
      <MDBRow center>
        <MDBCol size="12" md="8" lg="6" xl="4">
          <MDBContainer
            id="contact-wrapper"
            fluid
            className={styles.formWrapper}
          >
            <ContactForm />
          </MDBContainer>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
