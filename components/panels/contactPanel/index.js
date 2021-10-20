// Modules
import React, { useState } from "react";

// Styles
import styles from "./contactPanel.module.css";

// Elements
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { ContactForm } from "../../elements";

// Blocks
// import {} from "./blocks";

export function ContactPanel(props) {
  return (
    <MDBContainer fluid className="p-3 bg-dark ">
      <MDBRow center>
        <MDBCol size="12" md="8" lg="6">
          <ContactForm />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
